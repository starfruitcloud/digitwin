/*
 * :file description: 道路闪烁线材质
 * :name: /firethorn/src/material/LineFlickerMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 08:46:07
 * :last editor: 张德志
 * :date last edited: 2024-08-31 08:47:39
 */

import * as Cesium from 'cesium';

class LineFlickerMaterialProperty{
    name: string;
    color: Cesium.Color;
    speed: number;
    definitionChanged: Cesium.Event;
    constructor(options:{color:Cesium.Color,speed:number}) {
        this.name = 'LineFlickerMaterialProperty';
        this.color = options?.color;
        this.speed = options?.speed;
        this.definitionChanged = new Cesium.Event();
        (Cesium.Material as any)._materialCache.addMaterial(this.name,{
            fabric:{
                type:this.name,
                uniforms:{
                    color: new Cesium.Color(1.0, 0.0, 0.0, 1.0),
                    speed: 5.0,
                },
                source:`
                uniform vec4 color;
                uniform float speed;
                czm_material czm_getMaterial(czm_materialInput materialInput){
                    czm_material material = czm_getDefaultMaterial(materialInput);
                    float time = fract( czm_frameNumber  *  speed / 1000.0);
                    vec2 st = materialInput.st;
                    float scalar = smoothstep(0.0,1.0,time);
                    material.diffuse = color.rgb * scalar;
                    material.alpha = color.a * scalar ;
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
          other instanceof LineFlickerMaterialProperty &&
          this.name === other.name
        );
    }
}


export default LineFlickerMaterialProperty;