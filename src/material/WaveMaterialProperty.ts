/*
 * :file description: 水波纹扩散材质
 * :name: /firethorn/src/material/WaveMaterialProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 18:24:33
 * :last editor: 张德志
 * :date last edited: 2024-08-29 18:24:34
 */
import * as Cesium from 'cesium';

export interface OptionsConfigType {
  count?: number; // 波浪数量
  color?: Cesium.Color | string; // 颜色
  duration?: number; // 持续时间 毫秒
  gradient?: number; // 渐变曲率
  uTime?: number; // 变化时间
}

// 默认配置
export const defOptions = {
  count: 3,
  color: Cesium.Color.fromCssColorString('rgba(31, 168, 227, 0.59)' as string),
  duration: 4500,
  gradient: 0.1,
  uTime: new Date().getTime(),
};

class WaveMaterialProperty {
  name: string;
  options: OptionsConfigType;
  definitionChanged: Cesium.Event;
  constructor(options?: OptionsConfigType) {
    this.name = 'WaveMaterialProperty';
    this.options = {
      ...defOptions,
      ...options,
    };
    this.definitionChanged = new Cesium.Event();
    (Cesium.Material as any)?._materialCache.addMaterial(this.name, {
      fabric: {
        type: this.name,
        uniforms: {
          ...this.options,
        },
        source: `
          czm_material czm_getMaterial(czm_materialInput materialInput)
          { 
              czm_material material = czm_getDefaultMaterial(materialInput);
              material.diffuse = 1.5 * color.rgb;
              vec2 st = materialInput.st;
              vec3 str = materialInput.str;
              float dis = distance(st, vec2(0.5, 0.5));
              float per = fract(uTime);
              if (abs(str.z) > 0.001) {
                discard;
              }
              if (dis > 0.5) {
                  discard;
                } else {
                  float perDis = 0.5 / count;
                  float disNum;
                  float bl = .0;
                  for (int i = 0; i <= 9; i++) {
                    if (float(i) <= count) {
                      disNum = perDis *float(i) - dis + per / count;
                      if (disNum > 0.0) {
                        if (disNum < perDis) {
                          bl = 1.0 - disNum / perDis;
                        } else if(disNum - perDis < perDis) {
                          bl = 1.0 - abs(1.0 - disNum / perDis);
                        }
                        material.alpha = pow(bl, gradient);
                      }
                    }
                  }
                }
                return material;
            
            return material;
          }
          `,
      },
    });
  }

  getType() {
    return this.name;
  }

  getValue(_: number, result: any) {
    const currentTime = new Date().getTime();

    const { uTime, gradient, color, count, duration } = this.options;
    result.count = count;
    result.color = color;
    result.gradient = 1 + 10 * (1 - (gradient as number));
    result.uTime =
      ((currentTime - (uTime as number)) % (duration as number)) /
      (duration as number);
    return result;
  }
  equals(other: { name: string }) {
    // 判断两个材质是否相等
    return other instanceof WaveMaterialProperty && this.name === other.name;
  }
}

export default WaveMaterialProperty;
