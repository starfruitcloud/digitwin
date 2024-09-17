# 快速上手

## 一、通过 SDK 方式引入

### 1. 下载资源包，解压放到部署的服务器静态目录下
> <a href="/dt-sdk.zip">dt-sdk.zip</a>, 默认访问路径: /libs/dt-sdk

### 2. 在html文件头部引入
```html
  <script src="/libs/dt-sdk/dt.min.js"></script>
  <link href="/libs/dt-sdk/dt.min.css" rel="stylesheet" />
```

### 3. 设置容器
```html
  <div id="viewer-container"></div>
```

### 4. 编写代码
```js
  DT.baseUrl = '/public/sdks/dt-sdk' // 可自定义的文件夹路径
  let viewer = undefined
  function initViewer() {
      viewer = new DT.Viewer('viewer-container')
  }
  DT.ready(initViewer)
```

## 二、通过 NPM 方式引入

### 1. 安装 npm 包
```shell
yarn add @starfruitcloud/digitwin
-------------------------
npm install @starfruitcloud/digitwin
```

### 2. 配置工程，复制资源到构建产物中
> 以 webpack 为例
```js
// webpack.config.js
const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dist = './node_modules/@starfruitcloud'

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(dist, 'dt-sdk/dist/resources'),
        to: 'libs/dt-sdk/resources',
      },
    ]),
  ],
}
```

### 3. 设置容器
```html
  <div id="viewer-container"></div>
```

### 4. 编写代码
```js
  import * as DT from '@starfruitcloud/digitwin'
  import '@starfruitcloud/digitwin/dist/dt.min.css'

  DT.baseUrl = '/public/sdks/dt-sdk' // 可自定义的文件夹路径
  let viewer = undefined
  function initViewer() {
      viewer = new DT.Viewer('viewer-container')
  }
  DT.ready(initViewer)
```