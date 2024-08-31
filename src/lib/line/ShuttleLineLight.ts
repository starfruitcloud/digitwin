/*
 * :file description: 道路穿梭线效果
 * :name: /firethorn/src/lib/line/ShuttleLineLight.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 08:24:47
 * :last editor: 张德志
 * :date last edited: 2024-08-31 08:54:38
 */
import * as Cesium from 'cesium';
import SpriteLineMaterialProperty from '@/material/SpriteLineMaterialProperty';

class ShuttleLineLight {
  constructor(viewer: Cesium.Viewer, options: { url: string }) {
    const { url } = options || {};
    const geojsonPromise = Cesium.GeoJsonDataSource.load(
      url,
    );

    geojsonPromise.then((datasource) => {
      viewer.dataSources.add(datasource);

      const entities = datasource.entities.values;
      viewer.zoomTo(entities);
      const material = new SpriteLineMaterialProperty();
      entities.forEach((item) => {
        let polyline: any = item.polyline;
        polyline.material = material;
      });
    });
  }
}

export default ShuttleLineLight;
