/*
 * :file description: 六边形扩散
 * :name: /firethorn/src/lib/wall/DemoWall/index.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 15:35:40
 * :last editor: 张德志
 * :date last edited: 2024-08-31 08:19:46
 */

import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import HexagonWallDiffusion from '@/lib/wall/HexagonWallDiffusion';
import HandlerInputAction from '@/lib/utils/HandlerInputAction';
import initViwer from '@/lib/utils/initViewer';


export default () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NWVlNTI2MC00YTViLTQzZjYtOGMxNy1lYTAxMDVkMTMwNTQiLCJpZCI6MTA3NjIxLCJpYXQiOjE2NjI3OTY2ODR9.9Amu-saGmeaPMMt9LE5MjF0FQcoC3toDrxCo_J4ItAg';

    const viewer = initViwer('cesiumContainer', token);

    const position = Cesium.Cartesian3.fromDegrees(
        120.236174, 
        30.221671, 2000
    );

    viewer.camera.setView({
      destination: position,
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-35),
        roll: 0,
      },
    });

    new HandlerInputAction(viewer);
   // 六边形扩散
   new HexagonWallDiffusion(
    viewer,
    {
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
    },
  );
}
