/*
 * :file description: 道路闪烁线
 * :name: /firethorn/src/lib/line/FlickerLineLight.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 08:43:38
 * :last editor: 张德志
 * :date last edited: 2024-08-31 08:54:50
 */
import * as Cesium from 'cesium';
import LineFlickerMaterialProperty from '@/material/LineFlickerMaterialProperty';

class FlickerLineLight {
  constructor(viewer: Cesium.Viewer, options: { url: string }) {
    const { url } = options || {};
    const geojsonPromise = Cesium.GeoJsonDataSource.load(
      url,
    );

    geojsonPromise.then((datasource) => {
      viewer.dataSources.add(datasource);

      const entities = datasource.entities.values;
      viewer.zoomTo(entities);
      const material = new LineFlickerMaterialProperty({
        color: Cesium.Color.YELLOW,
            // 设置随机变化速度
        speed: 20 * Math.random(),
      });
      entities.forEach((item) => {
        let polyline: any = item.polyline;
        polyline.material = material;
      });
    });
  }
}

export default FlickerLineLight;
