/*
 * :file description: 雷达线材质
 * :name: /firethorn/src/material/RadarLineMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 22:57:03
 * :last editor: 张德志
 * :date last edited: 2024-08-29 23:05:55
 */
import * as Cesium from "cesium";

class RadarLineMaterialProperty{
    name: string;
    color: Cesium.Color;
    speed: number;
    definitionChanged: Cesium.Event;
    constructor(options:{color: Cesium.Color,speed: number}) {
       
        this.color = options?.color;
        this.speed = options?.speed;
        this.name = 'RadarLineMaterialProperty';
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

                    czm_material czm_getMaterial(czm_materialInput materialInput){
                    czm_material material = czm_getDefaultMaterial(materialInput);
                    vec2 st = materialInput.st * 2.0 - 1.0;
                    float t = czm_frameNumber * speed / 1000.0 ;
                    vec3 col = vec3(0.0);
                    vec2 p = vec2(sin(t), cos(t));
                    float d = length(st - dot(p, st) * p);
                    if (dot(st, p) < 0.) {
                        d = length(st);
                    }

                    col = .006 / d * color.rgb;

                    if(distance(st,vec2(0)) >  0.99 ){
                        col =color.rgb;
                    }

                    material.alpha  = pow(length(col),2.0);
                    material.diffuse = col * 3.0 ;
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
          other instanceof RadarLineMaterialProperty &&
          this.name === other.name
        );
    }
}


export default RadarLineMaterialProperty;


