
# 材质 API 🌎

在真实世界里，每个物体会对光产生不同的反应。钢看起来比陶瓷花瓶更闪闪发光，一个木头箱子不会像钢箱子一样对光产生很强的反射。每个物体对镜面高光也有不同的反应。有些物体不会散射(Scatter)很多光却会反射(Reflect)很多光，结果看起来就有一个较小的高光点(Highlight)，有些物体散射了很多，它们就会产生一个半径更大的高光。如果我们想要在 OpenGL 中模拟多种类型的物体，我们必须为每个物体分别定义材质(Material)属性。

## DT.ColorMaterialProperty

> 颜色材质

### example

```js
let material = new DT.ColorMaterialProperty(DT.Color.RED)
```

### creation

- **_constructor(color)_**

  构造函数

  - 参数
    - `{DT.Color} color`：颜色
  - 返回值 `material`

## DT.ImageMaterialProperty

> 图片材质

### example

```js
let material = new DT.ImageMaterialProperty({
  image: '**/**.png',
  transparent: true,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `material`

```json
// 属性参数（可选）
{
  "image": "", // 图片地址
  "repeat": { "x": 1, "y": 1 }, // 图片重复
  "color": DT.Color.WHITE, // 图片颜色
  "transparent": false // 材质是否透明
}
```

### properties

- `{String} image`：图片地址
- `{Object} repeat`：图片重复
- `{DT.Color} color`：图片颜色
- `{Boolean} transparent`：材质是否透明

## DT.CircleBlurMaterialProperty

> 模糊圆材质

### example

```js
let material = new DT.CircleBlurMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.CircleDiffuseMaterialProperty

> 扩散圆材质

### example

```js
let material = new DT.CircleDiffuseMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.CircleFadeMaterialProperty

> 逐渐消逝圆材质

### example

```js
let material = new DT.CircleFadeMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.CirclePulseMaterialProperty

> 脉冲圆材质

### example

```js
let material = new DT.CirclePulseMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.CircleScanMaterialProperty

> 扫描圆材质

### example

```js
let material = new DT.CircleScanMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.CircleSpiralMaterialProperty

> 螺旋圆材质

### example

```js
let material = new DT.CircleSpiralMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.CircleVaryMaterialProperty

> 多彩圆材质

### example

```js
let material = new DT.CircleVaryMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
      - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.CircleWaveMaterialProperty

> 波纹圆材质

### example

```js
let material = new DT.CircleWaveMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10, // 速度
  "count": 5, //数量
  "gradient": 0.1 //强度
}
```

### properties

- `{Color} color`：颜色
- `{Number} speed`：速度
- `{Number} count`：数量
- `{Number} gradient`：强度

## DT.EllipsoidElectricMaterialProperty

> 电弧球材质

### example

```js
let material = new DT.EllipsoidElectricMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.EllipsoidTrailMaterialProperty

> 轨迹球材质

### example

```js
let material = new DT.EllipsoidTrailMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.PolylineDashMaterialProperty

> 虚线材质

### example

```js
let material = new DT.PolylineDashMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 虚线颜色
  "gapColor": DT.Color.TRANSPARENT, // 间隔颜色
  "dashLength": 16.0 // 虚线片段长度
}
```

### properties

- `{DT.Color} color`：虚线颜色
- `{DT.Color} gapColor`：间隔颜色
- `{Number} dashLength`：虚线片段长度

## DT.PolylineArrowMaterialProperty

> 箭头材质

### example

```js
let material = new DT.PolylineArrowMaterialProperty(DT.Color.WHITE)
```

### creation

- **_constructor(color)_**

  构造函数

  - 参数
    - `{DT.Color} color`：箭头颜色
  - 返回值 `materialProperty`

### properties

- `{DT.Color} color`：箭头颜色

## DT.PolylineOutlineMaterialProperty

> 边线材质

### example

```js
let material = new DT.PolylineOutlineMaterialProperty({
  color: DT.Color.WHITE,
  outlineColor: DT.Color.BLACK,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "outlineColor": DT.Color.BLACK, // 边线颜色
  "outlineWidth": 1 // 边线宽度
}
```

### properties

- `{DT.Color} color`：颜色
- `{DT.Color} outlineColor`：边线颜色
- `{Number} outlineWidth`：边线宽度

## DT.PolylineGlowMaterialProperty

> 光晕材质

### example

```js
let material = new DT.PolylineGlowMaterialProperty({
  color: DT.Color.WHITE,
  glowPower: 0.25,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "glowPower": 0.25, // 发光强度，以总线宽的百分比表示
  "taperPower": 1 // 渐缩效果的强度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} glowPower`：发光强度
- `{Number} taperPower`：渐缩效果的强度

## DT.PolylineFlickerMaterialProperty

> 闪烁线材质

### example

```js
let material = new DT.PolylineFlickerMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.PolylineFlowMaterialProperty

> 流动线材质

### example

```js
let material = new DT.PolylineFlowMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10, // 速度,
  "percent": 0.3, // 比例
  "gradient": 0.1 // 透明程度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度
- `{Number} percent`：比例,
- `{Number} gradient`：透明程度,

## DT.PolylineImageTrailMaterialProperty

> 图片轨迹线材质

### example

```js
let material = new DT.PolylineImageTrailMaterialProperty({
  color: DT.Color.WHITE,
  image: '**/*.png',
  repeat: { x: 10, y: 1 },
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10, // 速度
  "image": "**/*.png", // 图片地址
  "repeat": { "x": 10, "y": 1 } //重复规则
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度
- `{String} image`：图片地址
- `{Object} repeat`：重复规则

## DT.PolylineLightingMaterialProperty

> 发光线材质

### example

```js
let material = new DT.PolylineLightingMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE // 颜色
}
```

### properties

- `{DT.Color} color`：颜色

## DT.PolylineLightingTrailMaterialProperty

> 颜色轨迹线材质

### example

```js
let material = new DT.PolylineLightingTrailMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.PolylineTrailMaterialProperty

> 颜色轨迹线材质

### example

```js
let material = new DT.PolylineTrailMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.RadarLineMaterialProperty

> 雷达线材质

### example

```js
let material = new DT.RadarLineMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.RadarWaveMaterialProperty

> 波纹雷达材质

### example

```js
let material = new DT.RadarWaveMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.WallImageTrailMaterialProperty

> 图片轨迹墙体材质

### example

```js
let material = new DT.WallImageTrailMaterialProperty({
  color: DT.Color.WHITE,
  image: '**/*.png',
  repeat: { x: 10, y: 1 },
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10, // 速度
  "image": "**/*.png", // 图片地址
  "repeat": { "x": 10, "y": 1 } //重复规则
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度
- `{String} image`：图片地址
- `{Object} repeat`：重复规则

## DT.WallTrailMaterialProperty

> 流动墙材质

### example

```js
let material = new DT.WallTrailMaterialProperty({
  color: DT.Color.WHITE,
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "color": DT.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DT.Color} color`：颜色
- `{Number} speed`：速度

## DT.WaterMaterialProperty

> 流动水材质

### example

```js
let material = new DT.WaterMaterialProperty({
  baseWaterColor: DT.Color.WHITE,
  normalMap: '**/**.png',
})
```

### creation

- **_constructor([options])_**

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值 `materialProperty`

```json
// 属性参数（可选）
{
  "baseWaterColor": DT.Color.WHITE, // 水体颜色
  "blendColor": DT.Color.WHITE, // 混合颜色
  "specularMap": "", // 镜面图
  "normalMap": "", // 法线图
  "frequency": 1000, //波纹数量
  "animationSpeed": 0.03, // 动画速度
  "amplitude": 10, //水波振幅
  "specularIntensity": 10 //镜面反射强度
}
```

### properties

- `{DT.Color} baseWaterColor`：颜色
- `{DT.Color} blendColor`：混合颜色
- `{String} normalMap`：法线图
- `{String} specularMap`：镜面图
