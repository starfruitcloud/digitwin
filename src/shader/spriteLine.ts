/*
 * :file description: 
 * :name: /firethorn/src/shader/spriteLine.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 08:28:28
 * :last editor: 张德志
 * :date last edited: 2024-08-31 08:36:08
 */
export default  `
czm_material czm_getMaterial(czm_materialInput materialInput) {
              // 生成默认着色器
              czm_material material = czm_getDefaultMaterial(materialInput);
              // 获取st
              vec2 st = materialInput.st;
              // 根据uv采样颜色
              vec4 color = texture(image,vec2(fract(st.s + uTime),st.t));
              // 设置颜色透明度
              material.alpha = color.a;
              material.diffuse = color.rgb;

              return material;
            }
`;