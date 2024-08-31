/*
 * :file description: 抛物流动飞线
 * :name: /firethorn/src/lib/line/ParabolicFlyLineLight.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 09:28:46
 * :last editor: 张德志
 * :date last edited: 2024-08-31 10:31:28
 */ 

import * as Cesium from 'cesium';
import LineFlyMaterialProperty from '@/material/LineFlyMaterialProperty';

class ParabolicFlyLineLight{
    constructor(viewer:Cesium.Viewer,options:{center:number[],positions:number[][],num:number}) {
        const {center,positions,num} = options || {}
        positions.forEach((item:number[]) => {
            let siglePositions = this.parabola({startPosition:center, endPosition:item, height:5000});
            // 创建飞线
            for (let i = 0; i < num; i++) {
                viewer.entities.add({
                    polyline: {
                        positions: siglePositions,
                        material: new LineFlyMaterialProperty({
                            color: new Cesium.Color(1.0, 1.0, 0.0, 0.8),
                            speed: 15 * Math.random(),
                            percent: 0.1,
                            gradient: 0.01
                        }) as any
                    },
                });
            }
            // 创建轨迹线
            viewer.entities.add({
                polyline: {
                    positions: siglePositions,
                    material: new Cesium.Color(1.0, 1.0, 0.0, 0.2),
                }
            })
        });
   
    }
    // 抛物算法
    parabola(options:{startPosition:number[],endPosition:number[],height:number,count?:number }) {
        let {startPosition,endPosition,height = 0,count = 50} = options || {};
        //方程 y=-(4h/L^2)*x^2+h h:顶点高度 L：横纵间距较大者
        let result = [];
        height = Math.max(+height, 100);
        count = Math.max(+count, 50);
        let diffLon = Math.abs(startPosition[0] - endPosition[0]);
        let diffLat = Math.abs(startPosition[1] - endPosition[1]);
        let L = Math.max(diffLon, diffLat)
        let dlt = L / count
        if (diffLon > diffLat) {
            //base on lon
            let delLat = (endPosition[1] - startPosition[1]) / count;
            if (startPosition[0] - endPosition[0] > 0) {
                dlt = -dlt
            }
            for (let i = 0; i < count; i++) {
                let h = height - (Math.pow(-0.5 * L + Math.abs(dlt) * i, 2) * 4 * height) / Math.pow(L, 2);
                let lon = startPosition[0] + dlt * i;
                let lat = startPosition[1] + delLat * i;
                let point = Cesium.Cartesian3.fromDegrees(lon, lat, h);
                result.push(point);
            }
        } else {
            //base on lat
            let delLon = (endPosition[0] - startPosition[0]) / count
            if (startPosition[1] - endPosition[1] > 0) {
                dlt = -dlt
            }
            for (let i = 0; i < count; i++) {
                let h = height - (Math.pow(-0.5 * L + Math.abs(dlt) * i, 2) * 4 * height) /Math.pow(L, 2);
                let lon = startPosition[0] + delLon * i;
                let lat = startPosition[1] + dlt * i;
                let point = Cesium.Cartesian3.fromDegrees(lon, lat, h);
                result.push(point);
            }
        }
        return result
    }
}

export default ParabolicFlyLineLight;
