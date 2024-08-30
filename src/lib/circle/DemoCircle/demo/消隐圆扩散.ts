/*
 * :file description: 
 * :name: /firethorn/src/lib/circle/DemoCircle/demo/消隐圆扩散.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 10:53:16
 * :last editor: 张德志
 * :date last edited: 2024-08-30 11:13:36
 */
import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import FadeCircleDiffusion from '@/lib/circle/FadeCircleDiffusion';
import HandlerInputAction from '@/lib/utils/HandlerInputAction';
import initViwer from '@/lib/utils/initViewer';


export default () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NWVlNTI2MC00YTViLTQzZjYtOGMxNy1lYTAxMDVkMTMwNTQiLCJpZCI6MTA3NjIxLCJpYXQiOjE2NjI3OTY2ODR9.9Amu-saGmeaPMMt9LE5MjF0FQcoC3toDrxCo_J4ItAg';

    const viewer = initViwer('cesiumContainer', token);


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

    new FadeCircleDiffusion(viewer,{
        position:[113.315301,23.117566],
    });
}
