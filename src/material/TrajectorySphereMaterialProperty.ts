/*
 * :file description: 轨迹球体材质
 * :name: /firethorn/src/material/TrajectorySphereMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 14:31:22
 * :last editor: 张德志
 * :date last edited: 2024-08-30 14:32:46
 */

import * as Cesium from 'cesium';

class TrajectorySphereMaterialProperty{
    name: string;
    color: Cesium.Color;
    speed: number;
    definitionChanged: Cesium.Event;
    constructor(options:{color:Cesium.Color,speed:number}) {
        this.name = 'TrajectorySphereMaterialProperty';
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
                        vec2 st = materialInput.st;
                        float time = fract(czm_frameNumber * speed / 1000.0);
                        float alpha = abs(smoothstep(0.5,1.,fract( -st.t - time)));
                        alpha += .1;
                        material.alpha = alpha;
                        material.diffuse = color.rgb;
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
          other instanceof TrajectorySphereMaterialProperty &&
          this.name === other.name
        );
    }
}


export default TrajectorySphereMaterialProperty;