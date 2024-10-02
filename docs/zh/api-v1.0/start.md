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

### 1. 安装 npm 包 (以 npm 安装为例)
```shell
npm install @starfruitcloud/digitwin -S
```

### 2. 配置工程，复制资源 resources 到构建产物中，以 默认路径 libs/dt-sdk 为例
> webpack 例子
```js
// webpack.config.js
const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dist = './node_modules/@starfruitcloud/digitwin';
const copySrcPath = path.join(dist, 'dist/resources');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: copySrcPath,
        to: 'libs/dt-sdk',
      },
    ]),
  ],
}
```

> vite 例子
```js
// vite.config.js
import { defineConfig } from 'vite'
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const dist = './node_modules/@starfruitcloud/digitwin';
const copySrcPath = path.join(dist, 'dist/resources');

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: copySrcPath,
          dest: 'libs/dt-sdk',
        },
      ],
    })
  ],
})
```

### 3. 设置容器
```html
  <div id="viewer-container"></div>
```

### 4. 编写代码
```js
  import DT from '@starfruitcloud/digitwin'
  import '@starfruitcloud/digitwin/dist/dt.min.css'

  DT.baseUrl = '/sdks/dt-sdk' // 可自定义的文件夹路径
  let viewer = undefined
  function initViewer() {
      viewer = new DT.Viewer('viewer-container')
  }
  DT.ready(initViewer)
```