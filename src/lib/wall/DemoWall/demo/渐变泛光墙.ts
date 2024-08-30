/*
 * :file description: 渐变泛光墙
 * :name: /firethorn/src/lib/wall/DemoWall/demo/渐变泛光墙.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 15:02:28
 * :last editor: 张德志
 * :date last edited: 2024-08-30 15:44:02
 */

import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import GradientWallDiffusion from '@/lib/wall/GradientWallDiffusion';
import HandlerInputAction from '@/lib/utils/HandlerInputAction';
import initViwer from '@/lib/utils/initViewer';


export default () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NWVlNTI2MC00YTViLTQzZjYtOGMxNy1lYTAxMDVkMTMwNTQiLCJpZCI6MTA3NjIxLCJpYXQiOjE2NjI3OTY2ODR9.9Amu-saGmeaPMMt9LE5MjF0FQcoC3toDrxCo_J4ItAg';

    const viewer = initViwer('cesiumContainer', token);


    const position = Cesium.Cartesian3.fromDegrees(
        113.307941,
        // 纬度
        23.087616,
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

    console.log()

    new GradientWallDiffusion(viewer,{
        positions:Cesium.Cartesian3.fromDegreesArrayHeights([
            113.3051, 23.099, 200.0,
            113.3101, 23.099, 200.0,
            113.3101, 23.104, 200.0,
            113.3051, 23.104, 200.0,
            113.3051, 23.099, 200.0,
        ]),
    });
}
