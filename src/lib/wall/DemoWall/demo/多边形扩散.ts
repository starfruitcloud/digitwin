/*
 * :file description: 
 * :name: /firethorn/src/lib/wall/DemoWall/demo/多边形扩散.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 16:41:23
 * :last editor: 张德志
 * :date last edited: 2024-08-30 17:23:12
 */
/*
 * :file description: 六边形扩散
 * :name: /firethorn/src/lib/wall/DemoWall/demo/六边形扩散.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 15:35:40
 * :last editor: 张德志
 * :date last edited: 2024-08-30 17:21:11
 */

import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import DynamicPolygonalDiffusion from '@/lib/wall/DynamicPolygonalDiffusion';
import HandlerInputAction from '@/lib/utils/HandlerInputAction';
import initViwer from '@/lib/utils/initViewer';


export default () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NWVlNTI2MC00YTViLTQzZjYtOGMxNy1lYTAxMDVkMTMwNTQiLCJpZCI6MTA3NjIxLCJpYXQiOjE2NjI3OTY2ODR9.9Amu-saGmeaPMMt9LE5MjF0FQcoC3toDrxCo_J4ItAg';

    const viewer = initViwer('cesiumContainer', token);


    const position = Cesium.Cartesian3.fromDegrees(
        // 经度
        113.307569,
        // 纬度
        23.055172,
        // 高度
        1000,
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
    new DynamicPolygonalDiffusion(viewer,{
        center: [113.305176, 23.068425],
        edge:5,
    })
}
