# DT-SDK

<p>
<img src="https://img.shields.io/github/actions/workflow/status/dvgis/dt-sdk/build.yml"/>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<a href="https://www.npmjs.com/package/@dvgis/dt-sdk" target="_blank">
 <img src="https://img.shields.io/npm/v/@dvgis/dt-sdk?color=orange&logo=npm" />
</a>
<a href="https://www.npmjs.com/package/@dvgis/dt-sdk" target="_blank">
 <img src="https://img.shields.io/npm/dt/@dvgis/dt-sdk?logo=npm"/>
</a>
<a href="https://resource.dvgis.cn/dt-docs/zh/" target="_blank">
 <img src="https://img.shields.io/badge/docs-online-yellow.svg"/>
</a>
<a href="http://dt.dvgis.cn" target="_blank">
 <img src="https://img.shields.io/badge/demo-online-red.svg"/>
</a>
</p>


[**🇨🇳 中文**](./README_zh.md) | [**🇬🇧English**](./README.md)

`DT-SDK` is based on the open source project `Cesium` for the second development of two three-dimensional `WebGis` application framework , the framework optimizes the use of `Cesium` and adds some additional features , designed for developers to quickly build `WebGis` application.

```warning
Tips：This SDK is JS+GIS framework package. Developers need to have some front-end technology and GIS related technology
```


## Run examples

```shell
  yarn run build
  yarn run server
```

## Installation

`NPM / YARN` **_`(Recommend)`_**

Installing with NPM or YARN is recommended and it works seamlessly with webpack.

```shell
yarn add @dvgis/dt-sdk
-------------------------
npm install @dvgis/dt-sdk
```

```js
import * as DT from '@dvgis/dt-sdk'
import '@dvgis/dt-sdk/dist/dt.min.css'
```

`CDN`

[Resources](https://github.com/dvgis/dt-sdk/releases)

```html
<script src="https://cdn.jsdelivr.net/npm/@dvgis/dt-sdk/dist/dt.min.js"></script>
<link
  href="https://cdn.jsdelivr.net/npm/@dvgis/dt-sdk/dist/dt.min.css"
  rel="stylesheet"
  type="text/css"
/>
```

```
Please put the resources in the project root directory libs/dt-sdk, if you put it in other directory, the framework will not run properly.
```

## Configuration

> The configuration is mainly used in the `NPM / YARN` way

Since the `DT` framework sets `CESIUM_BASE_URL` to `./libs/dt-sdk/resources/` , you need to copy `Cesium` related static resources files: `Assets` , `Workers` , `ThirdParty `to `libs/dt-sdk/resources` directory of the project to ensure that the 3D scene can be rendered properly. You can also use `DT.config.baseUrl` to set the static resource base related to `Cesium` .

`Webpack`

[Project Template](https://github.com/cavencj/dt-vue-app)

```js
// webpack.config.js
const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@dvgis'

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

[Project Template](https://github.com/dvgis/dt-vue)

```js
// vue.config.js
const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@dvgis'
module.exports = {
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

[Project Template](https://github.com/dvgis/dt-vue-next)

```js
// vue.config.js
const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@dvgis'
module.exports = {
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


## Start

```js
global.DT = DT
DT.ready({}).then(()=>{
    let viewer = new DT.Viewer()
})
```

## Demo

|           ![picture](https://dt.dvgis.cn/examples/previews/baselayer/online/baidu.png)           |     ![picture](http://dt.dvgis.cn/examples/previews/baselayer/online/tdt.png)      |     ![picture](http://dt.dvgis.cn/examples/previews/baselayer/online/arcgis.png?v=3)     |        ![picture](http://dt.dvgis.cn/examples/previews/mini-scene/china.gif)         |
|:------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------:|
|               ![picture](http://dt.dvgis.cn/examples/previews/mini-scene/dfmz.gif)               |    ![picture](http://dt.dvgis.cn/examples/previews/mini-scene/factory.gif)     |        ![picture](http://dt.dvgis.cn/examples/previews/layer/cluster_circle.gif)         | ![picture](http://dt.dvgis.cn/examples/previews/model/3dtiles/shp_custom_shader.gif) |
|        ![picture](http://dt.dvgis.cn/examples/previews/overlay/polyline/image_trail.gif)         | ![picture](http://dt.dvgis.cn/examples/previews/overlay/others/wall_trail.gif) |       ![picture](http://dt.dvgis.cn/examples/previews/overlay/primitive/water.gif)       |      ![picture](http://dt.dvgis.cn/examples/previews/scene-ext/tools/plot.png)       |

[More>>](http://dt.dvgis.cn/#/examples)

## Copyright

```warning
1. The framework is a basic platform, completely open source, which can be modified and reconstructed by any individual or institution without our authorization.
2. We are not responsible for any problems arising from the modification of the framework by individuals and organizations.
3. Some industrial plug-ins and tools will be added in the later stage, and the code will be open source appropriately.
4. The package released by us may be used permanently and free of charge by any person or organization subject to:
  1) complete package reference;
  2) reserve this copyright information in the console output
We reserve the right of final interpretation of this copyright information.
```

## Support

> if dt-sdk can bring benefits to you, please support it ~

<p>
<a href="https://www.paypal.com/paypalme/cavencj" target="_blank">
<img src="https://www.paypalobjects.com/images/shared/paypal-logo-129x32.svg" style="margin-top:10px" />
</a>
</p>

## Thanks
