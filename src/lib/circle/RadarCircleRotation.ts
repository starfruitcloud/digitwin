/*
 * :file description: 雷达圆形旋转特效
 * :name: /firethorn/src/lib/circle/RadarCircleRotation.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 18:50:59
 * :last editor: 张德志
 * :date last edited: 2024-08-29 18:53:42
 */


import RadarMaterialProperty from '@/material/RadarMaterialProperty';
import * as Cesium from 'cesium';

export const defCoordinates = [113.3291, 23.099, 113.3391, 23.109];

// 雷达圆形旋转特效
class RadarCircleRotation {
  constructor(viewer: Cesium.Viewer, options?: { coordinates: number[] }) {
    const { coordinates = defCoordinates } = options || {};
    viewer.entities.add({
      rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(...coordinates),
        material: new RadarMaterialProperty() as any,
      },
    });
  }
}

export default RadarCircleRotation;
