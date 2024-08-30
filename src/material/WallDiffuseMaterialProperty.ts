/*
 * :file description: 
 * :name: /firethorn/src/material/WallDiffuseMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 17:13:51
 * :last editor: 张德志
 * :date last edited: 2024-08-30 17:16:11
 */
import * as Cesium from 'cesium';

class WallDiffuseMaterialProperty{
    name: string;
    color: Cesium.Color;
    definitionChanged: Cesium.Event;
    constructor(options:{color:Cesium.Color}) {
        this.name = 'WallDiffuseMaterialProperty';
        this.color = options?.color;
        this.definitionChanged = new Cesium.Event();
        (Cesium.Material as any)._materialCache.addMaterial(this.name,{
            fabric: {
                type: this.name,
                uniforms: {
                    color: new Cesium.Color(1.0, 0.0, 0.0, 1.0),
                },
                source: `
                    uniform vec4 color;
                    czm_material czm_getMaterial(czm_materialInput materialInput){
                        czm_material material = czm_getDefaultMaterial(materialInput);
                        vec2 st = materialInput.st;
                        material.diffuse = color.rgb * 2.0;
                        material.alpha = color.a * (1.0-fract(st.t)) * 0.8;
                        return material;
                    } 

                `
            },
            translucent: function() {
                return true
            }
        })
       
    }
    getType() {
        return this.name;
    }
    getValue(_: number, result: any) {
        return result;
    }
    equals(other: { name: string }) {
        return (
          other instanceof WallDiffuseMaterialProperty &&
          this.name === other.name
        );
    }
}


export default WallDiffuseMaterialProperty;