/*
 * :file description: 首路穿
 * :name: /firethorn/src/material/SpriteLineMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 08:26:28
 * :last editor: 张德志
 * :date last edited: 2024-08-31 08:36:20
 */
import * as Cesium from "cesium";
import spriteLine from '@/shader/spriteLine';
import gsap from "gsap";

// 精灵线
class SpriteLineMaterialProperty {
  options: { uTime: number };
  definitionChanged: Cesium.Event;
  constructor() {
    this.options = {
      uTime: 0,
    };
    this.definitionChanged = new Cesium.Event();
    (Cesium.Material as any)._materialCache.addMaterial(
      "SpriteLineMaterialProperty",
      {
        fabric: {
          type: "SpriteLineMaterialProperty",
          uniforms: {
            uTime: 0,
            image: `https://cdn.xiaozhi.shop/digital/img/spriteline.png`,
          },
          source:spriteLine,
        //   source: `
        //     czm_material czm_getMaterial(czm_materialInput materialInput) {
        //       // 生成默认着色器
        //       czm_material material = czm_getDefaultMaterial(materialInput);
        //       // 获取st
        //       vec2 st = materialInput.st;
        //       // 根据uv采样颜色
        //       vec4 color = texture(image,vec2(fract(st.s + uTime),st.t));
        //       // 设置颜色透明度
        //       material.alpha = color.a;
        //       material.diffuse = color.rgb;

        //       return material;
        //     }
        //   `,
        },
      }
    );
    this.animation();
  }
  animation() {
    gsap.to(this.options, {
      uTime: 1,
      duration: 1,
      repeat: -1,
      ease: "linear",
    });
  }
  getType() {
    // console.log('hello')
    return "SpriteLineMaterialProperty";
  }
  getValue(time: number, result: any) {
    result.uTime = this.options.uTime;
    return result;
  }

  equals(other: Cesium.Material) {
    return other instanceof SpriteLineMaterialProperty;
  }
}

export default SpriteLineMaterialProperty;
