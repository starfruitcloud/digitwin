/*
 * :file description: 鼠标获取经伟度
 * :name: /firethorn/src/lib/utils/HandlerInputAction.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 16:00:59
 * :last editor: 张德志
 * :date last edited: 2024-08-29 16:01:00
 */
import * as Cesium from "cesium";

class HandlerInputAction {
  viewer: Cesium.Viewer;
  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer;
    
    const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction((event:any) => {
      let cartesian = viewer.scene.pickPosition(event.position);
      let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
      let lng = Cesium.Math.toDegrees(cartographic.longitude); // 经度
      let lat = Cesium.Math.toDegrees(cartographic.latitude); // 纬度
      let alt = cartographic.height; // 高度
      let coordinate = {
          longitude: Number(lng.toFixed(6)),
          latitude: Number(lat.toFixed(6)),
          altitude: Number(alt.toFixed(2))
      };
  
      console.log('coordinate',coordinate);
      
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
}

export default HandlerInputAction;