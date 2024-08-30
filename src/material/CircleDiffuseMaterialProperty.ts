
/*
 * :file description: 扩散圆材质
 * :name: /firethorn/src/material/CircleDiffuseMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 10:56:25
 * :last editor: 张德志
 * :date last edited: 2024-08-30 14:01:18
 */

import * as Cesium from 'cesium';

class CircleDiffuseMaterialProperty{
    name: string;
    color: Cesium.Color;
    speed: number;
    definitionChanged: Cesium.Event;
    constructor(options:{color:Cesium.Color,speed:number}) {
        this.name = 'CircleDiffuseMaterialProperty';
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

                    vec3 circlePing(float r, float innerTail,  float frontierBorder, float timeResetSeconds,  float radarPingSpeed,  float fadeDistance){
                    float t = fract(czm_frameNumber * speed / 1000.0);
                    float time = mod(t, timeResetSeconds) * radarPingSpeed;
                    float circle;
                    circle += smoothstep(time - innerTail, time, r) * smoothstep(time + frontierBorder,time, r);
                        circle *= smoothstep(fadeDistance, 0.0, r);
                        return vec3(circle);
                    }

                    czm_material czm_getMaterial(czm_materialInput materialInput){
                        czm_material material = czm_getDefaultMaterial(materialInput);
                        vec2 st = materialInput.st * 2.0  - 1.0 ;
                        vec2 center = vec2(0.);
                        float time = fract(czm_frameNumber * speed / 1000.0);
                        vec3 flagColor;
                        float r = length(st - center) / 4.;
                        flagColor += circlePing(r, 0.25, 0.025, 4.0, 0.3, 1.0) * color.rgb;
                        material.alpha = length(flagColor);
                        material.diffuse = flagColor.rgb;
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
          other instanceof CircleDiffuseMaterialProperty &&
          this.name === other.name
        );
    }
}


export default CircleDiffuseMaterialProperty;
