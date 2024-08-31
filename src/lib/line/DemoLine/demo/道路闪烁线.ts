/*
 * :file description: 道路闪烁线
 * :name: /firethorn/src/lib/line/DemoLine/demo/道路闪烁线.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 08:45:15
 * :last editor: 张德志
 * :date last edited: 2024-08-31 08:46:42
 */

import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import FlickerLineLight from '@/lib/line/FlickerLineLight';
import HandlerInputAction from '@/lib/utils/HandlerInputAction';
import initViwer from '@/lib/utils/initViewer';


export default () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NWVlNTI2MC00YTViLTQzZjYtOGMxNy1lYTAxMDVkMTMwNTQiLCJpZCI6MTA3NjIxLCJpYXQiOjE2NjI3OTY2ODR9.9Amu-saGmeaPMMt9LE5MjF0FQcoC3toDrxCo_J4ItAg';

    const viewer = initViwer('cesiumContainer', token);


    const position = Cesium.Cartesian3.fromDegrees(
        // 经度
        113.921751,
        // 纬度
        22.5098,
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

    new FlickerLineLight(viewer,{
       url:`https://cdn.xiaozhi.shop/digital/geojson/shenzhen-nanshan.geojson`
    });
}
