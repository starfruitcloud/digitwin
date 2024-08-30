/*
 * :file description: 扩散圆效果
 * :name: /firethorn/src/lib/circle/CircleDiffuse.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 13:52:42
 * :last editor: 张德志
 * :date last edited: 2024-08-30 14:03:23
 */
import * as Cesium from 'cesium';
import CircleDiffuseMaterialProperty from '@/material/CircleDiffuseMaterialProperty';


class CircleDiffuse{
    constructor(viewer:Cesium.Viewer,options:{position:number[],color?:Cesium.Color,speed?:number}) {
        const {position,color,speed }= options || {};
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(position[0], position[1]),
            name: "扩散圆",
            ellipse: {
                semiMinorAxis: 1000.0,
                semiMajorAxis: 1000.0,
                material: new CircleDiffuseMaterialProperty({
                    color: color || new Cesium.Color(1, 1, 0, 0.7),
                    speed: speed || 12.0,
                }) as any
            }
        })
      
    }
}

export default CircleDiffuse;
