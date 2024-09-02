# 全局 API 🌎

## ready()

> 框架主入口函数，使用框架时必须以其开始，否则使用框架

```js
DT.ready({}).then(() => {})
```

- 参数
  - `{Object} config`：配置参数
- 返回值 `Promise`

```json
//属性参数（可选）
{
  "Cesium": "<自定义的Cesium库，如果未设置，将使用框架内部默认Cesium框架>",
  "echarts": "<echarts库，设置后将加载echarts图层>",
  "baseUrl": "<Cesium 静态资源路径，默认值为：“./libs/dt-sdk/resources/” >"
}
```

## registerLib()

> 框架中注册第三放框架包，

```js
DT.registerLib('turf', turf)
console.log(DT.__namespace.turf)
```

- 参数
  - `{String} name`：名称
  - `{Object} lib`: 库模块

## getLib()

> 获取框架中注册的第三方框架包，

```js
let turf = DT.getLib('turf')
```

- 参数
  - `{String} name`：名称
- 返回值 `Object`

## 常量

> 框架内部默认常量

::: warning
开发时请使用默认常量进行开发
:::

### MouseEventType

**_`DT.MouseEventType.LEFT_DOWN`_**: (场景、图层、覆盖物)鼠标左键按下事件

**_`DT.MouseEventType.LEFT_UP`_**: (场景、图层、覆盖物)鼠标左键抬升事件

**_`DT.MouseEventType.CLICK`_**: (场景、图层、覆盖物)鼠标点击事件

**_`DT.MouseEventType.RIGHT_DOWN`_**: (场景、图层、覆盖物)鼠标右键按下事件

**_`DT.MouseEventType.RIGHT_UP`_**: (场景、图层、覆盖物)鼠标右键按下事件

**_`DT.MouseEventType.RIGHT_CLICK`_**: (场景、图层、覆盖物)鼠标右击事件

**_`DT.MouseEventType.DB_CLICK`_**: (场景、图层、覆盖物)鼠标双击事件

**_`DT.MouseEventType.MOUSE_MOVE`_**: 场景鼠标移动事件

**_`DT.MouseEventType.WHEEL`_**: 场景鼠标滚轮事件

**_`DT.MouseEventType.MOUSE_OVER`_**: 覆盖物鼠标移入事件

**_`DT.MouseEventType.MOUSE_OUT`_**: 覆盖物鼠标移出事件

### SceneEventType

**_`DT.SceneEventType.CAMERA_MOVE_END`_**: 相机移动完成

**_`DT.SceneEventType.CAMERA_CHANGED`_**: 相机位置完成

**_`DT.SceneEventType.PRE_UPDATE`_**: 场景更新前

**_`DT.SceneEventType.POST_UPDATE`_**: 场景更新后

**_`DT.SceneEventType.PRE_RENDER`_**: 场景渲染前

**_`DT.SceneEventType.POST_RENDER`_**: 场景渲染后

**_`DT.SceneEventType.MORPH_COMPLETE`_**: 场景模式变换完成

**_`DT.SceneEventType.CLOCK_TICK`_**: 时钟跳动

**_`DT.SceneEventType.RENDER_ERROR`_**: 渲染错误

### MouseMode

**_`DT.MouseMode.LEFT_MIDDLE`_**: 左键拖动，中键翻转(默认)

**_`DT.MouseMode.LEFT_RIGHT`_**: 左键拖动，右键翻转

### ImageryType

**_`DT.ImageryType.ARCGIS`_**: arcgis 地图

**_`DT.ImageryType.SINGLE_TILE`_**: 单图片地图

**_`DT.ImageryType.WMS`_**: WMS 地图

**_`DT.ImageryType.WMTS`_**: WMTS 地图

**_`DT.ImageryType.XYZ`_**: xyz 格式地图

**_`DT.ImageryType.COORD`_**: 瓦片坐标地图

**_`DT.ImageryType.AMAP`_**: 高德地图

**_`DT.ImageryType.BAIDU`_**: 百度地图

**_`DT.ImageryType.GOOGLE`_**: 谷歌地图

**_`DT.ImageryType.TDT`_**: 天地图

**_`DT.ImageryType.TENCENT`_**: 腾讯地图

**_`DT.ImageryType.GEO_VIS`_**: 星图地图

### TerrainType

**_`DT.TerrainType.NONE`_**: 无地形

**_`DT.TerrainType.XYZ`_**: xyz 格式地形

**_`DT.TerrainType.GOOGLE`_**: 谷歌地形

**_`DT.TerrainType.ARCGIS`_**: arcgis 地形

**_`DT.TerrainType.VR`_**: VR 地形

### LayerType

**_`DT.LayerType.VECTOR`_**: 矢量图层

**_`DT.LayerType.PRIMITIVE`_**: 图元图层

**_`DT.LayerType.TILESET`_**: 3dtiles 图层

**_`DT.LayerType.HTML`_**: html 图层

**_`DT.LayerType.GEOJSON`_**: GeoJson 图层

**_`DT.LayerType.CLUSTER`_**: 聚合图层

**_`DT.LayerType.KML`_**: kml 图层

**_`DT.LayerType.CZML`_**: czml 图层

**_`DT.LayerType.HEAT`_**: 热区图层

**_`DT.LayerType.CHART`_**: echarts 图层

### OverlayType

**_`DT.OverlayType.POINT`_**: 点 **_`可标绘`_**

**_`DT.OverlayType.POLYLINE`_**: 线 **_`可标绘`_**

**_`DT.OverlayType.POLYGON`_**: 面 **_`可标绘`_**

**_`DT.OverlayType.MODEL`_**: 模型

**_`DT.OverlayType.BILLBOARD`_**: 图标点 **_`可标绘`_**

**_`DT.OverlayType.RECTANGLE`_**: 矩形 **_`可标绘`_**

**_`DT.OverlayType.CIRCLE`_**: 圆 **_`可标绘`_**

**_`DT.OverlayType.LABEL`_**: 标签

**_`DT.OverlayType.TILESET`_**: 3DTiles

**_`DT.OverlayType.BOX`_**: 盒

**_`DT.OverlayType.CORRIDOR`_**: 走廊

**_`DT.OverlayType.CYLINDER`_**: 圆柱

**_`DT.OverlayType.ELLIPSE`_**: 椭圆

**_`DT.OverlayType.ELLIPSOID`_**: 球体

**_`DT.OverlayType.PLANE`_**: 面板

**_`DT.OverlayType.POLYLINE_VOLUME`_**: 管道

**_`DT.OverlayType.WALL`_**: 墙体

**_`DT.OverlayType.DYNAMIC_BILLBOARD`_**: 动态图标点

**_`DT.OverlayType.DYNAMIC_MODEL`_**: 动态模型点

**_`DT.OverlayType.CUSTOM_BILLBOARD`_**: 自定义图标

**_`DT.OverlayType.CUSTOM_LABEL`_**: 自定义标签

**_`DT.OverlayType.ATTACK_ARROW`_**: 攻击箭头 **_`可标绘`_**

**_`DT.OverlayType.DOUBLE_ARROW`_**: 双箭头 **_`可标绘`_**

**_`DT.OverlayType.FINE_ARROW`_**: 直箭头 **_`可标绘`_**

**_`DT.OverlayType.GATHERING_PLACE`_**: 聚集地 **_`可标绘`_**

**_`DT.OverlayType.TAILED_ATTACK_ARROW`_**: 燕尾攻击箭头 **_`可标绘`_**

**_`DT.OverlayType.BILLBOARD_PRIMITIVE`_**: 图标图元

**_`DT.OverlayType.DIFFUSE_WALL_PRIMITIVE`_**: 扩散墙图元

**_`DT.OverlayType.ELEC_ELLIPSOID_PRIMITIVE`_**: 电弧球图元

**_`DT.OverlayType.FLOW_LINE_PRIMITIVE`_**: 流动线图元

**_`DT.OverlayType.LABEL_PRIMITIVE`_**: 文本图元

**_`DT.OverlayType.MODEL_PRIMITIVE`_**: 模型图元

**_`DT.OverlayType.POINT_PRIMITIVE`_**: 点图元

**_`DT.OverlayType.POLYLINE_PRIMITIVE`_**: 线图元

**_`DT.OverlayType.SCAN_CIRCLE_PRIMITIVE`_**: 扫描圆图元

**_`DT.OverlayType.TRAIL_LINE_PRIMITIVE`_**: 轨迹线图元

**_`DT.OverlayType.WATER_PRIMITIVE`_**: 水面图元

**_`DT.OverlayType.VIDEO_PRIMITIVE`_**: 视频图元

### TrackViewMode

**_`DT.TrackViewMode.FP`_**: 第一人称视角

**_`DT.TrackViewMode.TP`_**: 第三人称视角

**_`DT.TrackViewMode.TRACKED`_**: 跟随视角

**_`DT.TrackViewMode.FREE`_**: 自由视角
