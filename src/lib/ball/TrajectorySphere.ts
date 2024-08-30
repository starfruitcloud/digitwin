/*
 * :file description: 轨迹球体特效
 * :name: /firethorn/src/lib/ball/TrajectorySphere.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 14:15:20
 * :last editor: 张德志
 * :date last edited: 2024-08-30 14:34:11
 */
import * as Cesium from 'cesium';
import TrajectorySphereMaterialProperty from '@/material/TrajectorySphereMaterialProperty';


class TrajectorySphere{
    constructor(viewer:Cesium.Viewer,options:{position:number[],color?:Cesium.Color,speed?:number}) {
        const {position,color,speed} = options || {};
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(position[0], position[1]),
            name: '轨迹球体',
            ellipsoid: {
                radii: new Cesium.Cartesian3(1000.0, 1000.0, 1000.0),
                material: new TrajectorySphereMaterialProperty({
                    color: color || new Cesium.Color(1.0, 1.0, 0.0, 1.0),
                    speed: speed || 10.0
                }) as any
            }
        })
       
    }
}


export default TrajectorySphere;
