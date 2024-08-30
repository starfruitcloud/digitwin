/*
 * :file description: 脉冲圆扩散特效
 * :name: /firethorn/src/lib/circle/PulseCircleDiffusion.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 19:37:45
 * :last editor: 张德志
 * :date last edited: 2024-08-30 10:49:32
 */
import * as Cesium from 'cesium';
import CirclePulseMaterialProperty from '@/material/CirclePulseMaterialProperty';

class PulseCircleDiffusion {
    constructor(viewer: Cesium.Viewer, options: { position: number[],color?:Cesium.Color,speed?:number }) {
        const { position } = options || {};
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(position[0], position[1]),
            name: '脉冲圆',
            ellipse: {
                semiMinorAxis: 1000.0,
                semiMajorAxis: 1000.0,
                material: new CirclePulseMaterialProperty({
                    color: new Cesium.Color(1, 1, 0, 0.7),
                    speed: 12.0,
                }) as any as any
            }
        })
    }
}


export default PulseCircleDiffusion;


