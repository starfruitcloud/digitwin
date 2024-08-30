/*
 * :file description: 
 * :name: /firethorn/src/lib/circle/BlurCircleDiffusion.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 11:23:45
 * :last editor: 张德志
 * :date last edited: 2024-08-30 11:45:04
 */
import * as Cesium from 'cesium';
import CircleBlurMaterialProperty from '@/material/CircleBlurMaterialProperty';


class BlurCircleDiffusion{
    constructor(viewer:Cesium.Viewer,options:{position:number[],color?:Cesium.Color,speed?:number}) {
        const { position,color,speed } = options || {}
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(position[0], position[1]),
            name: "多彩圆",
            ellipse: {
                semiMinorAxis: 1000.0,
                semiMajorAxis: 1000.0,
                material: new CircleBlurMaterialProperty({
                    color: color || new Cesium.Color(1, 1, 0, 0.7),
                    speed: speed || 12.0,
                }) as any
            }
        })
    }
    
}

export default BlurCircleDiffusion;
