# 标绘要素 🌎

## DT.AttackArrow

> 攻击箭头要素，继承于[Overlay](./overlay-vector#dt-overlay)

### example

```js
let attackArrow = new DT.AttackArrow('-90.0,32.0;-94.0,36.0;-94.0,38.0')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `attackArrow`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](#dt-polygon)
  - 返回值 `this`

## DT.DoubleArrow

> 双箭头要素，继承于[Overlay](./overlay-vector#dt-overlay)

### example

```js
let doubleArrow = new DT.DoubleArrow('-90.0,32.0;-94.0,36.0;-94.0,38.0')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `doubleArrow`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](#dt-polygon)
  - 返回值 `this`

## DT.FineArrow

> 直箭头要素，继承于[Overlay](./overlay-vector#dt-overlay)

### example

```js
let fineArrow = new DT.FineArrow('-90.0,32.0;-94.0,36.0')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `fineArrow`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](#dt-polygon)
  - 返回值 `this`

## DT.GatheringPlace

> 聚集地要素，继承于[Overlay](./overlay-vector#dt-overlay)

### example

```js
let gatheringPlace = new DT.GatheringPlace('-90.0,32.0;-94.0,36.0')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `gatheringPlace`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](#dt-polygon)
  - 返回值 `this`

## DT.TailedAttackArrow

> 聚集地，继承于[Overlay](./overlay-vector#dt-overlay)

### example

```js
let tailedAttackArrow = new DT.TailedAttackArrow('-90.0,32.0;-94.0,36.0')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `tailedAttackArrow`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](#dt-polygon)
  - 返回值 `this`
