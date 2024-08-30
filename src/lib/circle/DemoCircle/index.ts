/*
 * :file description: 圆形扩散特效
 * :name: /firethorn/src/lib/circle/DotCircleDiffusion.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 16:14:46
 * :last editor: 张德志
 * :date last edited: 2024-08-29 18:37:54
 */
import * as Cesium from 'cesium';
import DotCircleDiffusionMaterProperty from '@/material/DotCircleDiffusionMaterProperty';


export interface DotCircleDiffusionOptionsType {
  color?: string; // 扩散颜色
  position?: number[]; // 经纬度
  maxRadius?: number; // 最大半径
  duration?: number; // 持续时间
}

const defPosition = [113.32728, 23.12472, 0];

let currentRadius = 1;

class DotCircleDiffusion {
  options?: DotCircleDiffusionOptionsType;
  constructor(viewer: Cesium.Viewer, options?: DotCircleDiffusionOptionsType) {
    this.options = options;
    const {
      duration = 9500,
      maxRadius = 1400,
      position = defPosition,
      color = 'rgba(247, 235, 8, 1)',
    } = options || {};

    const cssColor = Cesium.Color.fromCssColorString(color as string)

    viewer.entities.add({
      id: 'dotCircleDiffusion',
      position: Cesium.Cartesian3.fromDegrees(
        position[0],
        position[1],
        position[2],
      ),
      ellipse: {
        semiMajorAxis: new Cesium.CallbackProperty(() => {
          currentRadius += (1000 / duration) * 50;
          if (currentRadius > maxRadius) {
            currentRadius = 1;
          }
          return currentRadius;
        }, false),
        semiMinorAxis: new Cesium.CallbackProperty(() => {
          return currentRadius;
        }, false),
        material: new DotCircleDiffusionMaterProperty(cssColor as any,duration) as any
      },
    });
  }
}

export default DotCircleDiffusion;