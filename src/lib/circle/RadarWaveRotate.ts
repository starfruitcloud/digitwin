/*
 * :file description: 波纹雷达旋转
 * :name: /firethorn/src/lib/circle/RadarWaveRotate.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 09:58:17
 * :last editor: 张德志
 * :date last edited: 2024-08-30 10:16:38
 */
import * as Cesium from 'cesium';
import RadarWaveMaterialProperty from '@/material/RadarWaveMaterialProperty';

class RadarWaveRotate{
    constructor(viewer:Cesium.Viewer,options:{position:number[],color?:Cesium.Color,speed?:number}) {
        const { position } = options || {}
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(position[0], position[1]),
            name: '波纹雷达',
            ellipse: {
                semiMajorAxis: 1000.0,
                semiMinorAxis: 1000.0,
                material: new RadarWaveMaterialProperty({
                    color: new Cesium.Color(1.0, 1.0, 0.0, 0.7),
                    speed: 20.0
                }) as any
            }
        })
       

    }
}

export default RadarWaveRotate;


