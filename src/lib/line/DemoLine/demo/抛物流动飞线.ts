/*
 * :file description: 
 * :name: /firethorn/src/lib/line/DemoLine/demo/抛物流动飞线.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 10:29:32
 * :last editor: 张德志
 * :date last edited: 2024-08-31 10:32:09
 */


/*
 * :file description: 道路穿梭线
 * :name: /firethorn/src/lib/line/DemoLine/demo/道路穿梭线.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 14:16:12
 * :last editor: 张德志
 * :date last edited: 2024-08-31 08:39:33
 */
import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import ParabolicFlyLineLight from '@/lib/line/ParabolicFlyLineLight';
import HandlerInputAction from '@/lib/utils/HandlerInputAction';
import initViwer from '@/lib/utils/initViewer';


export default () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NWVlNTI2MC00YTViLTQzZjYtOGMxNy1lYTAxMDVkMTMwNTQiLCJpZCI6MTA3NjIxLCJpYXQiOjE2NjI3OTY2ODR9.9Amu-saGmeaPMMt9LE5MjF0FQcoC3toDrxCo_J4ItAg';

    const viewer = initViwer('cesiumContainer', token);


    const position = Cesium.Cartesian3.fromDegrees(
        // 经度
        113.9236839,
        // 纬度
        22.528061,
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

    new ParabolicFlyLineLight(viewer,{
      center:[113.9236839, 22.528061],
      positions:[
        [113.8236839, 22.528061],
       [114.0236839, 22.528061],
       [113.9236839, 22.428061],
       [113.9236839, 22.628061],
       [113.8236839, 22.428061],
       [114.0236839, 22.628061],
       [113.8236839, 22.628061],
       [114.0236839, 22.428061]
      ],
      num:3,
    });
}
