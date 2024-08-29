/*
 * :file description: 水波纹扩散特效
 * :name: /firethorn/src/main.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 14:14:48
 * :last editor: 张德志
 * :date last edited: 2024-08-29 23:04:42
 */
import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import WaveCircleDiffusion from '@/lib/circle/WaveCircleDiffusion';
import RadarCircleRotation from '@/lib/circle/RadarCircleRotation';
import HexagonDiffusion from '@/lib/wall/HexagonDiffusion';
import SpiralCircleDiffusion from '@/lib/circle/SpiralCircleDiffusion';
import HandlerInputAction from '@/lib/utils/HandlerInputAction';
import initViwer from '@/lib/utils/initViewer';
import "./style.css";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NWVlNTI2MC00YTViLTQzZjYtOGMxNy1lYTAxMDVkMTMwNTQiLCJpZCI6MTA3NjIxLCJpYXQiOjE2NjI3OTY2ODR9.9Amu-saGmeaPMMt9LE5MjF0FQcoC3toDrxCo_J4ItAg';

const viewer = initViwer('cesiumContainer',token);


const position = Cesium.Cartesian3.fromDegrees(
  // 经度
  113.324,
  // 纬度
  23.0926,
  // 高度
  2000,
);

viewer.camera.setView({
  destination: position,
  orientation: {
    heading: Cesium.Math.toRadians(-10),
    pitch: Cesium.Math.toRadians(-35),
    roll: 0,
  },
});

new HandlerInputAction(viewer);

// new WaveCircleDiffusion(viewer);

// new RadarCircleRotation(viewer);

new SpiralCircleDiffusion(viewer,{position:[113.32728, 23.12472, 0]})

new HexagonDiffusion(viewer, {
  minLot: 113.920873,
  minLat: 22.511049,
  maxLot: 113.926043,
  maxLat: 22.51466,
},
{
  minLot: 113.918873,
  minLat: 22.510049,
  maxLot: 113.929043,
  maxLat: 113.929043,
},);


