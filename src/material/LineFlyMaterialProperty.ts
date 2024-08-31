/*
 * :file description: 
 * :name: /firethorn/src/material/LineFlyMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 09:11:56
 * :last editor: 张德志
 * :date last edited: 2024-08-31 09:15:27
 */
import * as Cesium from 'cesium';

class GradientWallDiffusionMaterialProperty{
    name: string;
    speed: number;
    percent:number;
    getters:number;
    definitionChanged: Cesium.Event;
    constructor(options:{color:Cesium.Color,speed:number,percent:number,gradient:number}) {
        const {speed,percent,gradient} = options || {}
        this.speed = speed;
        this.percent = percent;
        this.getters = gradient;
        this.name = 'GradientWallDiffusionMaterialProperty';

        this.definitionChanged = new Cesium.Event();
        (Cesium.Material as any)._materialCache.addMaterial(this.name, {
        fabric: {
            type: this.name,
            uniforms: {
                color: new Cesium.Color(1.0, 0.0, 0.0, 1.0),
                speed: 10.0,
                percent: 0.1,
                gradient: 0.01
            },
            source: `
                   uniform vec4 color;
                    uniform float speed;
                    uniform float percent;
                    uniform float gradient;
                    
                    czm_material czm_getMaterial(czm_materialInput materialInput){
                    czm_material material = czm_getDefaultMaterial(materialInput);
                    vec2 st = materialInput.st;
                    float t =fract(czm_frameNumber * speed / 1000.0);
                    t *= (1.0 + percent);
                    float alpha = smoothstep(t- percent, t, st.s) * step(-t, -st.s);
                    alpha += gradient;
                    material.diffuse = color.rgb;
                    material.alpha = alpha;
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
        return result;
    }
    equals(other: { name: string }) {
        return (
        other instanceof GradientWallDiffusionMaterialProperty &&
        this.name === other.name
        );
    }
}

export default GradientWallDiffusionMaterialProperty;