/*
 * :file description: 动态立体墙
 * :name: /firethorn/src/lib/wall/DynamicWallDiffusion.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 15:53:21
 * :last editor: 张德志
 * :date last edited: 2024-08-30 16:35:48
 */
import * as Cesium from 'cesium';
import DynamicWallMaterialProperty from '@/material/DynamicWallMaterialProperty';

class DynamicWallDiffusion{
    constructor(viewer:Cesium.Viewer,options:{positions:Cesium.Cartesian3[],color?:Cesium.Color,duration?:number}) {
        const { positions,color,duration } = options || {}
        viewer.entities.add({
            name: "立体墙效果",
            wall: {
                positions: positions,
                // 设置高度
                maximumHeights: new Array(positions.length).fill(100),
                minimumHeights: new Array(positions.length).fill(0),
                material: new DynamicWallMaterialProperty({
                    color: color ?? Cesium.Color.fromBytes(55, 96, 56).withAlpha(0.7),
                    duration: duration ?? 3000
                }) as any,
            }
        })
 
    }
}

export default DynamicWallDiffusion;
