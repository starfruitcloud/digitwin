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
yarn add @starfruitcloud/digitwin
-------------------------
npm install @starfruitcloud/digitwin
```

```js
import * as DT from '@starfruitcloud/digitwin'
import '@starfruitcloud/digitwin/dist/dt.min.css'
```

`CDN`

[Resources](https://github.com/starfruitcloud/digitwin/releases)

```html
<script src="https://cdn.jsdelivr.net/npm/@starfruitcloud/digitwin/dist/dt.min.js"></script>
<link
  href="https://cdn.jsdelivr.net/npm/@starfruitcloud/digitwin/dist/dt.min.css"
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

## Start

```js
DT.ready(()=>{
    let viewer = new DT.Viewer()
})
```

## Demo


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

## Thanks
