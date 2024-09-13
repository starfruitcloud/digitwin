# DT-SDK

<p>
<img src="https://img.shields.io/github/actions/workflow/status/dvgis/dt-sdk/build.yml"/>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<a href="https://www.npmjs.com/package/@starfruitcloud/digitwin" target="_blank">
 <img src="https://img.shields.io/npm/v/@starfruitcloud/digitwin?color=orange&logo=npm" />
</a>
<a href="https://www.npmjs.com/package/@starfruitcloud/digitwin" target="_blank">
 <img src="https://img.shields.io/npm/dt/@starfruitcloud/digitwin?logo=npm"/>
</a>
<a href="https://resource.dvgis.cn/dt-docs/zh/" target="_blank">
 <img src="https://img.shields.io/badge/docs-online-yellow.svg"/>
</a>
<a href="http://www.shuqin.cc" target="_blank">
 <img src="https://img.shields.io/badge/demo-online-red.svg"/>
</a>
</p>

[**🇨🇳 中文**](./README_zh.md) | [**🇬🇧English**](./README.md)

> `DT-SDK` 是基于开源项目 `Cesium` 进行二次开发的二三维一体的 `WebGis` 应用框架，该框架优化了部分 `Cesium` 的使用方式和增添一些通用功能，旨在为开发者快速构建 `WebGis` 应用。

```warning
Tips：本框架是 JS+GIS 的框架包。开发者需要有一定的前端技术和 GIS 相关技术
```

## 运行示例

```shell
  yarn run build
  yarn run server
```

## 安装

`NPM / YARN` **_`(推荐使用)`_**

NPM / YARN 的方式安装，它能更好地和 `webpack` 打包工具配合使用。

```shell
yarn add @starfruitcloud/digitwin
-------------------------
npm install @starfruitcloud/digitwin
```

```js
import * as DT from '@starfruitcloud/digitwin/' 
import '@starfruitcloud/digitwin/dist/dt.min.css' 
```

`CDN`

[Resources 下载链接](https://github.com/starfruitcloud/digitwin/releases)

```html
<script src="https://cdn.jsdelivr.net/npm/@starfruitcloud/digitwin/dist/dt.base.js"></script>
<link
  href="https://cdn.jsdelivr.net/npm/@starfruitcloud/digitwin/dist/dt.min.css"
  rel="stylesheet"
  type="text/css"
/>
```

```
请将 resources 放置工程根目录 libs/dt-sdk 下，如果放置到其他目录下，框架将无法正常运行
```

## 配置

> 配置主要用于 `NPM / YARN` 的方式

由于框架将Cesium静态资源默认路径设置为 `./libs/dt-sdk/resources/`，这样需将 `Cesium` 相关的静态资源文件: `Assets`、`Workers` 、`ThirdParty` 复制到工程的 `libs/dt-sdk/resources` 目录下以保证三维场景能够正常呈现,也可通过全局函数进行 `Cesium` 相关的静态资源路基设置

`Webpack`

[工程模板](https://github.com/cavencj/dt-vue-app)

```js
// webpack.config.js

const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@starfruitcloud'

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(dvgisDist, 'dt-sdk/dist/resources'),
        to: 'libs/dt-sdk/resources',
      },
    ]),
  ],
}
```

`Vue2.x`

[工程模板](https://github.com/dvgis/dt-vue)

```js
// vue.config.js

const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@starfruitcloud'

module.exports = {
  // 其他配置
  chainWebpack: (config) => {
    config.plugin('copy').use(CopywebpackPlugin, [
      [
        {
          from: path.join(dvgisDist, 'dt-sdk/dist/resources'),
          to: 'libs/dt-sdk/resources',
        },
      ],
    ])
  },
}
```

`Vue3.x`

[工程模板](https://github.com/dvgis/dt-vue-next)

```js
// vue.config.js

const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@starfruitcloud'

module.exports = {
  // 其他配置
  chainWebpack: (config) => {
    config.plugin('copy').use(CopywebpackPlugin, [
      {
        patterns: [
          {
            from: path.join(dvgisDist, 'dt-sdk/dist/resources'),
            to: path.join(__dirname, 'dist', 'libs/dt-sdk/resources'),
          },
        ],
      },
    ])
  },
}
```

`vite`

[Project Template](https://github.com/dvgis/dt-vite)

```js
// vite.config.js
import { defineConfig } from 'vite'
import DT from '@dvgis/vite-plugin-dt'

export default defineConfig({
  plugins: [DT()],
})
```

## 开始

```js
DT.ready().then(() => {
  let viewer = new DT.Viewer(divId)
})
```

## 示例

|           ![picture](https://www.shuqin.cc/examples/previews/baselayer/online/baidu.png)           |     ![picture](http://www.shuqin.cc/examples/previews/baselayer/online/tdt.png)      |     ![picture](http://www.shuqin.cc/examples/previews/baselayer/online/arcgis.png?v=3)     |        ![picture](http://www.shuqin.cc/examples/previews/mini-scene/china.gif)         |
|:------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------:|
|               ![picture](http://www.shuqin.cc/examples/previews/mini-scene/dfmz.gif)               |    ![picture](http://www.shuqin.cc/examples/previews/mini-scene/factory.gif)     |        ![picture](http://www.shuqin.cc/examples/previews/layer/cluster_circle.gif)         | ![picture](http://www.shuqin.cc/examples/previews/model/3dtiles/shp_custom_shader.gif) |
|        ![picture](http://www.shuqin.cc/examples/previews/overlay/polyline/image_trail.gif)         | ![picture](http://www.shuqin.cc/examples/previews/overlay/others/wall_trail.gif) |       ![picture](http://www.shuqin.cc/examples/previews/overlay/primitive/water.gif)       |      ![picture](http://www.shuqin.cc/examples/previews/scene-ext/tools/plot.png)       |


[更多>>](http://www.shuqin.cc/#/examples)


## 版权声明

```warning
1.框架作为一个基础平台，代码开源，任何个人和机构可以修改、重构，无需经过我方授权。
2.任何个人和机构修改框架出现的问题，我方无需负责。
3.后期会添加一些行业性的插件和工具，代码会适量开源。
4.对于我方发布的程序包，任何个人和机构在遵守下列条件的前提下可以永久免费使用:
   1)程序包完整引用；
   2)保留此版权信息在控制台输出
我方保留对此版权信息的最终解释权。
```

## 谢谢
