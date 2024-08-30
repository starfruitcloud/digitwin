/*
 * :file description: 消隐圆扩散特效
 * :name: /firethorn/src/lib/circle/FadeCircleDiffusion.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 10:42:52
 * :last editor: 张德志
 * :date last edited: 2024-08-30 11:15:06
 */
import * as Cesium from 'cesium';
import CircleFadeMaterialProperty from '@/material/CircleFadeMaterialProperty';

class FadeCircleDiffusion{
    constructor(viewer: Cesium.Viewer, options: { position: number[],color?:Cesium.Color,speed?:number }) {
        const { position,color,speed} = options || {}
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(position[0], position[1]),
            name: "消隐圆",
            ellipse: {
                semiMinorAxis: 1000.0,
                semiMajorAxis: 1000.0,
                material: new CircleFadeMaterialProperty({
                    color: color || new Cesium.Color(1, 1, 0, 0.7),
                    speed: speed || 12.0,
                }) as any
            }
        })

    }
}

export default FadeCircleDiffusion;
