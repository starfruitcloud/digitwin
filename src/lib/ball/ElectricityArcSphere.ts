/*
 * :file description: 电弧球体效果
 * :name: /firethorn/src/lib/ball/ElectricityArcSphere.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 14:41:07
 * :last editor: 张德志
 * :date last edited: 2024-08-30 14:53:24
 */
import * as Cesium from 'cesium';
import ArcSphereMaterialProperty from '@/material/ArcSphereMaterialProperty';

class ElectricityArcSphere{
    constructor(viewer:Cesium.Viewer,options:{position:number[],color?:Cesium.Color,speed?:number}) {
        const { position,color,speed} = options || {}
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(position[0], position[1]),
            name: '电弧球体',
            ellipsoid: {
                radii: new Cesium.Cartesian3(1000.0, 1000.0, 1000.0),
                material: new ArcSphereMaterialProperty({
                    color: color ?? new Cesium.Color(1.0, 1.0, 0.0, 1.0),
                    speed: speed ?? 10.0
                }) as any
            }
        })

    }
}

export default ElectricityArcSphere;
