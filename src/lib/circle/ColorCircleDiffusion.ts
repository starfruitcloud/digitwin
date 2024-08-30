/*
 * :file description: 多彩圆特效
 * :name: /firethorn/src/lib/circle/ColorCircleDiffusion.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 10:19:28
 * :last editor: 张德志
 * :date last edited: 2024-08-30 10:34:48
 */
import * as Cesium from 'cesium';
import CircleColorfulMaterialProperty from '@/material/CircleColorfulMaterialProperty';

class ColorCircleDiffusion{
    constructor(viewer:Cesium.Viewer,options:{position:number[],color?:Cesium.Color,speed?:number}) {
        const { position,color,speed } = options || {}
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(position[0], position[1]),
            name: "多彩圆",
            ellipse: {
                semiMinorAxis: 1000.0,
                semiMajorAxis: 1000.0,
                material: new CircleColorfulMaterialProperty({
                    color: color || new Cesium.Color(1, 1, 0, 0.7),
                    speed: speed || 12.0,
                }) as any
            }
        })
    }

}

export default ColorCircleDiffusion;
