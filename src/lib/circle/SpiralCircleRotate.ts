/*
 * :file description: 螺旋圆旋转特效
 * :name: /firethorn/src/lib/circle/SpiralCircleRotate.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 09:36:39
 * :last editor: 张德志
 * :date last edited: 2024-08-30 09:47:43
 */ 
import * as Cesium from 'cesium';
import CircleSpiralMaterialProperty from '@/material/CircleSpiralMaterialProperty';

class SpiralCircleRotate{
    constructor(viewer:Cesium.Viewer,options:{position:number[],color?:Cesium.Color,speed?:number}) {
        const { position,color,speed } = options || {}
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(position[0],position[1]),
            name: "螺旋圆",
            ellipse: {
                semiMinorAxis: 1000.0,
                semiMajorAxis: 1000.0,
                material: new CircleSpiralMaterialProperty({
                    color: color || new Cesium.Color(1, 1, 0, 0.7),
                    speed: speed || 12.0,
                }) as any
            }
        })
    }
}

export default SpiralCircleRotate;
