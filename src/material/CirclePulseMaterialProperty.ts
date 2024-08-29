/*
 * :file description: 脉冲圆扩散材质
 * :name: /firethorn/src/material/CirclePulseMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 22:22:48
 * :last editor: 张德志
 * :date last edited: 2024-08-29 22:35:59
 */
import * as Cesium from 'cesium';

class CirclePulseMaterialProperty{
    name: string;
    color: Cesium.Color;
    speed: number;
    definitionChanged: Cesium.Event;
    constructor(options:{color:Cesium.Color,speed:number}) {
        this.name = 'CirclePulseMaterialProperty';
        this.color = options?.color;
        this.speed = options?.speed;
        this.definitionChanged = new Cesium.Event();
        (Cesium.Material as any)._materialCache.addMaterial(this.name,{
            fabric:{
                type:this.name,
                uniforms:{
                    color:new Cesium.Color(1.0, 0.0, 0.0, 1.0),
                    speed: 10.0
                },
                source:`
                    uniform vec4 color;
                    uniform float speed;
                    czm_material czm_getMaterial(czm_materialInput materialInput) {
                        czm_material material = czm_getDefaultMaterial(materialInput);
                        vec2 st = materialInput.st * 2.0 - 1.0;
                        float time = fract(czm_frameNumber * speed / 1000.0);
                        float r = length(st) * 1.2;
                        float a = pow(r, 2.0);
                        float b = sin(r * 0.8 - 1.6);
                        float c = sin(r - 0.010);
                        float s = sin(a - time * 2.0 + b) * c;
                        float d = abs(1.0 / (s * 10.8)) - 0.01;
                        material.alpha = pow(d, 10.0);
                        material.diffuse = color.rgb * d;
                        return material;
                    }

                `,
               
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
          other instanceof CirclePulseMaterialProperty &&
          this.name === other.name
        );
      }
}


export default CirclePulseMaterialProperty;
