/*
 * :file description: 螺旋圆效果材质
 * :name: /firethorn/src/material/CircleSpiralMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 09:40:35
 * :last editor: 张德志
 * :date last edited: 2024-08-30 09:53:01
 */
import * as Cesium from 'cesium';

class CircleSpiralMaterialProperty{
    name: string;
    color: Cesium.Color;
    speed: number;
    definitionChanged: Cesium.Event;
    constructor(options:{color:Cesium.Color,speed:number}) {
        this.name = 'CircleSpiralMaterialProperty';
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
                    #define PI 3.14159265359
                    vec2 rotate2D (vec2 _st, float _angle) {
                        _st =  mat2(cos(_angle),-sin(_angle),  sin(_angle),cos(_angle)) * _st;
                        return _st;
                    }
                    czm_material czm_getMaterial(czm_materialInput materialInput){
                    czm_material material = czm_getDefaultMaterial(materialInput);
                    vec2 st = materialInput.st * 2.0 - 1.0;
                    st *= 1.6;
                    float time = czm_frameNumber * speed / 1000.0;
                    float r = length(st);
                    float w = .3;
                    st = rotate2D(st,(r*PI*6.-time*2.));
                    float a = smoothstep(-w,.2,st.x) * smoothstep(w,.2,st.x);
                    float b = abs(1./(sin(pow(r,2.)*2.-time*1.3)*6.))*.4;
                    material.alpha = a * b ;
                    material.diffuse = color.rgb * a * b  * 3.0;
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
          other instanceof CircleSpiralMaterialProperty &&
          this.name === other.name
        );
    }
}

export default CircleSpiralMaterialProperty;
