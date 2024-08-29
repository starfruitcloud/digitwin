/*
 * :file description:  圆形扩散材质
 * :name: /firethorn/src/material/DotCircleDiffusionMaterProperty.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 16:15:35
 * :last editor: 张德志
 * :date last edited: 2024-08-29 16:15:59
 */
import * as Cesium from 'cesium';

class DotCircleDiffusionMaterProperty {
  name: string;
  color: string;
  duration: number;
  definitionChanged: Cesium.Event;
  constructor(color: string, duration: number) {
    this.color = color;
    this.duration = duration;
    this.name = 'DotCircleDiffusionMaterProperty';

    this.definitionChanged = new Cesium.Event();
    (Cesium.Material as any)._materialCache.addMaterial(this.name, {
      fabric: {
        type: this.name,
        uniforms: {
          color: this.color,
        },
        source: `
            czm_material czm_getMaterial(czm_materialInput materialInput) {
	        czm_material material = czm_getDefaultMaterial(materialInput);
  
            material.diffuse = 1.5 * color.rgb;
            vec2 st = materialInput.st;
            float dis = distance(st, vec2(0.5, 0.5));
            float bl = .0;
            float offset = 0.42;
            if(dis > 0.5) {
                material.alpha = 0.0;
                discard;
            }
            if(dis > offset) {
                bl = color.a * 1.0 / (0.5 - offset) * (dis - offset);
                material.alpha =  pow(bl, 3.0);
            } else {
                material.alpha = 0.0;
                discard;
            }
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
    return result;
  }
  equals(other: { name: string }) {
    return (
      other instanceof DotCircleDiffusionMaterProperty &&
      this.name === other.name
    );
  }
}

export default DotCircleDiffusionMaterProperty;