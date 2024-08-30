/*
 * :file description: 渐变泛光效果
 * :name: /firethorn/src/lib/wall/GradientWallDiffusion.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 14:58:47
 * :last editor: 张德志
 * :date last edited: 2024-08-30 15:27:54
 */
import * as Cesium from 'cesium';
import GradientWallDiffusionMaterialProperty from '@/material/GradientWallDiffusionMaterialProperty';

class GradientWallDiffusion{
    constructor(viewer:Cesium.Viewer,options:{positions: Cesium.Cartesian3[],color?:Cesium.Color}) {
        const { positions,color} = options || {};
        viewer.entities.add({
            name: "渐变泛光效果",
            wall: {
                positions: positions,
                // 设置高度
                maximumHeights: new Array(positions.length).fill(50),
                minimumHeights: new Array(positions.length).fill(0),
                // 扩散墙材质
                material: new GradientWallDiffusionMaterialProperty({
                    color: color ?? new Cesium.Color(1.0, 1.0, 0.0, 1.0)
                }) as any,
            }
        })
       
    }
}

export default GradientWallDiffusion;
