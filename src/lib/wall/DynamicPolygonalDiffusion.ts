/*
 * :file description: 
 * :name: /firethorn/src/lib/wall/DynamicPolygonalDiffusion.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 16:46:59
 * :last editor: 张德志
 * :date last edited: 2024-08-30 17:18:54
 */
import * as Cesium from 'cesium';

import WallDiffuseMaterialProperty from '@/material/WallDiffuseMaterialProperty';

export interface DynamicPolygonalType {
    center:number[];
    radius?:number; // 扩散半径半径
    edge?:number; // 扩散正多变形的边数
    speed?:number;//  扩散速度
    height?:number; // 扩散高度
    minRadius?:number; // 最小半径
    currentHeight?:number;// 实时高度
    currentRadius?:number;// 实时半径
   
}

class DynamicPolygonalDiffusion{

    center:number[]; // 中心点坐标
    radius:number; // 扩散半径半径
    edge:number; // 扩散正多变形的边数
    speed:number;//  扩散速度
    height:number; // 扩散高度
    minRadius:number; // 最小半径
    currentHeight:number;// 实时高度
    currentRadius:number;// 实时半径

    constructor(viewer:Cesium.Viewer,options:DynamicPolygonalType) {
        const {center,radius = 1000.0,edge = 64,speed = 5.0,height = 100.0,minRadius = 10.0} = options || {}
        
            this.edge = edge;
            this.speed = speed;
            this.center = center;
            this.radius = radius;
            this.height = height;
            this.currentHeight = height;
            this.minRadius  = minRadius;
            this.currentRadius = minRadius;

            if(edge < 3) {
                throw new Error('edge not length < 3');
            }

            viewer.entities.add({
                wall: {
                    // callbackProperty回调函数，实时更新
                    positions: new Cesium.CallbackProperty(() => {
                        let positions = [];
                        this.currentRadius += radius * speed / 1000.0;
                        this.currentHeight -= height * speed / 1000.0;
        
                        // 判断扩散的实际半径和高度是否超出范围
                        if (this.currentRadius > radius || this.currentHeight < 0) {
                            this.currentRadius = minRadius;
                            this.currentHeight = height;
                        }
        
                        positions = this.getPositions(this.center, this.edge, this.currentRadius, this.currentHeight);
                        return positions;
                    }, false),
                    // 设置材质
                    material: new WallDiffuseMaterialProperty({
                        color: new Cesium.Color(1.0, 1.0, 0.0, 1.0)
                    }) as any
                }
            })
 
    }

    getPositions(center:number[], edge:number, currentRadius:number, currentHeight:number) {
        let positions = [];
        let modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
            Cesium.Cartesian3.fromDegrees(center[0], center[1], 0)
        );
        for (let i = 0; i < edge; i++) {
            let angle = (i / edge) * Cesium.Math.TWO_PI;
            let x = Math.cos(angle);
            let y = Math.sin(angle);
            let point = new Cesium.Cartesian3(
                x * currentRadius,
                y * currentRadius,
                currentHeight
            )
            positions.push(Cesium.Matrix4.multiplyByPoint(modelMatrix, point, new Cesium.Cartesian3()));
        }
        // 封闭墙，首节点点需要存两次
        positions.push(positions[0]);
        return positions;
    }
}

export default DynamicPolygonalDiffusion;
