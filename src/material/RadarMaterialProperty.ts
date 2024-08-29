/*
 * :file description: 雷达旋转材质
 * :name: /firethorn/src/material/RadarMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 18:52:41
 * :last editor: 张德志
 * :date last edited: 2024-08-29 18:52:42
 */
import * as Cesium from "cesium";
import gsap from "gsap";

// 雷达材质
class RadarMaterialProperty {
  options: { uTime: number };
  definitionChanged: Cesium.Event;

  constructor() {
    this.definitionChanged = new Cesium.Event();
    this.options = {
      uTime: 0,
    };

    (Cesium.Material as any)._materialCache.addMaterial(
      "RadarMaterialProperty",
      {
        fabric: {
          type: "RadarMaterialProperty",
          uniforms: {
            uTime: 0,
          },
          source: `
            czm_material czm_getMaterial(czm_materialInput materialInput)
            {
            // 生成默认的基础材质
            czm_material material = czm_getDefaultMaterial(materialInput);
            // 旋转uv
            vec2 newSt = mat2(
              cos(uTime),-sin(uTime),
              sin(uTime),cos(uTime)
            )*(materialInput.st-0.5);

            newSt = newSt+0.5;
            // 获取st
            vec2 st = newSt;
        
            // 设置圆，外部透明，内部不透明
            float alpha = 1.0 - step(0.5,distance(st,vec2(0.5))) ;
  
            // 按照角度来设置强弱
            float angle = atan(st.x-0.5,st.y-0.5);
            float strength = (angle+3.1416)/6.2832;

            // 将强弱与透明度结合
            alpha = alpha*strength;
            material.alpha = alpha;
            material.diffuse = vec3(st.x,st.y,1.0);
            return material;
          }
          `,
        },
      }
    );

    this.animation();
  }

  animation() {
    gsap.to(this.options, {
      uTime: 6.2832,
      duration: 1,
      repeat: -1,
      ease: "linear",
    });
  }
  getType() {
    return "RadarMaterialProperty";
  }
  getValue(_: any, result: any) {
    result.uTime = this.options.uTime;
    return result;
  }
  equals(other: Cesium.Material) {
    return other instanceof RadarMaterialProperty;
  }
}

export default RadarMaterialProperty;
