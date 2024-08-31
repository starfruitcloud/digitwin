/*
 * :file description: 随机竖直飞线
 * :name: /firethorn/src/lib/line/VerticalFlyLineLight.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 08:53:22
 * :last editor: 张德志
 * :date last edited: 2024-08-31 09:21:37
 */
import * as Cesium from 'cesium';
import LineFlyMaterialProperty from '@/material/LineFlyMaterialProperty';


class VerticalFlyLineLight{
    constructor(viewer:Cesium.Viewer,options:{center:number[], num:number}) {
        const {center,num} = options || {}
        let positions = this.generateRandomPosition(center, num);
        positions.forEach(item => {
            // 经纬度
            let startLon = item[0];
            let startLat = item[1];
    
            let startPoint = Cesium.Cartesian3.fromDegrees(startLon, startLat, 0);
    
            // 随机高度
            let height = 5000 * Math.random();
            let endPoint = Cesium.Cartesian3.fromDegrees(startLon, startLat, height);
            let linePositions = [];
            linePositions.push(startPoint);
            linePositions.push(endPoint);
            viewer.entities.add({
                polyline: {
                    positions: linePositions,
                    material: new LineFlyMaterialProperty({
                        color: new Cesium.Color(1.0, 1.0, 0.0, 0.8),
                        speed: 15 * Math.random(),
                        percent: 0.1,
                        gradient: 0.01
                    }) as any
                }
            })
        })
    }

    generateRandomPosition(position:number[], num:number) {
        let list = []
        for (let i = 0; i < num; i++) {
            // random产生的随机数范围是0-1，需要加上正负模拟
            let lon = position[0] + Math.random() * 0.04 * (i % 2 == 0 ? 1 : -1);
            let lat = position[1] + Math.random() * 0.04 * (i % 2 == 0 ? 1 : -1);
            list.push([lon, lat])
        }
        return list
    }
}

export default VerticalFlyLineLight;
