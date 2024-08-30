/*
 * :file description: 动态立体墙材质
 * :name: /firethorn/src/material/DynamicWallMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 15:58:31
 * :last editor: 张德志
 * :date last edited: 2024-08-30 16:36:20
 */
import * as Cesium from 'cesium';

class DynamicWallMaterialProperty{
    name: string;
    _time: number;
    color: Cesium.Color;
    duration: number;
    definitionChanged: Cesium.Event;
    constructor(options:{color:Cesium.Color,duration:number}) {
        const { color,duration } = options || {}
        this.color = color;
        this.duration = duration;
        this._time = (new Date()).getTime();
        this.name = 'DynamicWallMaterialProperty';
    
        this.definitionChanged = new Cesium.Event();
        (Cesium.Material as any)._materialCache.addMaterial(this.name, {
          fabric: {
            type: this.name,
            uniforms: {
                color: new Cesium.Color(1.0, 1.0, 1.0, 1),
                image: 'https://tugua.oss-cn-hangzhou.aliyuncs.com/firethorn/assets/color.png',
                time: 0,
            },
            source: `
              czm_material czm_getMaterial(czm_materialInput materialInput){
                czm_material material = czm_getDefaultMaterial(materialInput);
                vec2 st = materialInput.st;
                vec4 colorImage = texture(image, vec2(fract(st.t - time), st.t));
                vec4 fragColor;
                fragColor.rgb = color.rgb / 1.0;
                fragColor = czm_gammaCorrect(fragColor);
                material.alpha = colorImage.a * color.a;
                material.diffuse = color.rgb;
                material.emission = fragColor.rgb;
                return material;
            }
            `,
          },
        });
    }
    getType() {
        return this.name;
      }
    getValue(_: number, result: any) {
        if (this.duration) {
            result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration;
        }
        return result;
      }
    equals(other: { name: string }) {
        return (
          other instanceof DynamicWallMaterialProperty &&
          this.name === other.name
        );
    }
}


export default DynamicWallMaterialProperty;
