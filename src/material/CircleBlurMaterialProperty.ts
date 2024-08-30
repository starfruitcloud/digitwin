/*
 * :file description: 
 * :name: /firethorn/src/material/CircleBlurMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 11:29:09
 * :last editor: 张德志
 * :date last edited: 2024-08-30 11:54:16
 */

import * as Cesium from 'cesium';

class CircleBlurMaterialProperty{
    name: string;
    color: Cesium.Color;
    speed: number;
    definitionChanged: Cesium.Event;
    constructor(options:{color:Cesium.Color,speed:number}) {
        this.name = 'CircleBlurMaterialProperty';
        this.color = options?.color;
        this.speed = options?.speed;
        this.definitionChanged = new Cesium.Event();
        (Cesium.Material as any)._materialCache.addMaterial(this.name,{
            fabric:{
                type:this.name,
                uniforms:{
                    color: new Cesium.Color(1.0, 0.0, 0.0, 1.0),
                    speed: 10.0
                },
                source:`
                    uniform vec4 color;
                    uniform float speed;
                    czm_material czm_getMaterial(czm_materialInput materialInput){
                    czm_material material = czm_getDefaultMaterial(materialInput);
                    vec2 st = materialInput.st ;
                    vec2 center = vec2(0.5);
                    float time = fract(czm_frameNumber * speed / 1000.0);
                    float r = 0.5 + sin(time) / 3.0;
                    float dis = distance(st, center);
                    float a = 0.0;
                    if(dis < r) {
                        a = 1.0 - smoothstep(0.0, r, dis);
                    }
                    material.alpha = pow(a,10.0) ;
                    material.diffuse = color.rgb * a * 3.0;
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
          other instanceof CircleBlurMaterialProperty &&
          this.name === other.name
        );
    }
}


export default CircleBlurMaterialProperty;