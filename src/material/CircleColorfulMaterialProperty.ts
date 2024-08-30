/*
 * :file description: 
 * :name: /firethorn/src/material/CircleColorfulMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 10:28:40
 * :last editor: 张德志
 * :date last edited: 2024-08-30 10:33:27
 */
import * as Cesium from 'cesium';

class CircleColorfulMaterialProperty{
    name: string;
    color: Cesium.Color;
    speed: number;
    definitionChanged: Cesium.Event;
    constructor(options:{color:Cesium.Color,speed:number}) {
        this.name = 'CircleColorfulMaterialProperty';
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
                        vec2 st = materialInput.st  * 2.0 - 1.0;
                        float time =czm_frameNumber * speed / 1000.0;
                        float radius = length(st);
                        float angle = atan(st.y/st.x);
                        float radius1 = sin(time * 2.0) + sin(40.0*angle+time)*0.01;
                        float radius2 = cos(time * 3.0);
                        vec3 fragColor = 0.2 + 0.5 * cos( time + color.rgb + vec3(0,2,4));
                        float inten1 = 1.0 - sqrt(abs(radius1 - radius));
                        float inten2 = 1.0 - sqrt(abs(radius2 - radius));
                        material.alpha = pow(inten1 + inten2 , 5.0) ;
                        material.diffuse = fragColor * (inten1 + inten2);
                        return material;
                }`
               
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
          other instanceof CircleColorfulMaterialProperty &&
          this.name === other.name
        );
    }
}


export default CircleColorfulMaterialProperty;