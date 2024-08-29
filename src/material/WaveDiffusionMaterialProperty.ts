
/*
 * :file description:  光波扩散材质
 * :name: /firethorn/src/material/WaveDiffusionMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-26 16:04:17
 * :last editor: 张德志
 * :date last edited: 2024-08-29 19:10:42
 */
import * as Cesium from "cesium";

class WaveDiffusionMaterialProperty {
  options: { uTime: number };
  definitionChanged: Cesium.Event;
  constructor() {
    this.options = {
      uTime: 0,
    };
    this.definitionChanged = new Cesium.Event();
    (Cesium.Material as any)._materialCache.addMaterial(
      "WaveDiffusionMaterialProperty",
      {
        fabric: {
          type: "WaveDiffusionMaterialProperty",
          uniforms: {
            uTime: 0,
            // TODO
            image:`https://cdn.xiaozhi.shop/digital/img/hexagon.png`
          },
          source: `
            czm_material czm_getMaterial(czm_materialInput materialInput) {
                czm_material material = czm_getDefaultMaterial(materialInput);
                vec2 st = materialInput.st;

                // 对图片进行采样
                vec4 color = texture2D(image,st);

                material.diffuse = color.rgb;
                material.alpha = color.a;

                return material;
            }
          `,
        },
      }
    );
  }
  getType() {
    return "WaveDiffusionMaterialProperty";
  }
  getValue(time: number, result: any) {
    result.uTime = this.options.uTime;
    return result;
  }

  equals(other: Cesium.Material) {
    return other instanceof WaveDiffusionMaterialProperty;
  }
}

export default WaveDiffusionMaterialProperty;
