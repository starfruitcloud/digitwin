# 快速上手

## 一、通过 SDK 方式引入

### 1. 下载资源包，解压放到部署的服务器静态目录下
> [dt-sdk.zip](/dt-sdk.zip), 默认路径: /libs/dt-sdk

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
