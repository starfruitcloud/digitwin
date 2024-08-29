# firethorn

## 运行应用

```sh
npm install
npm run dev
```

For the built, production version

```sh
npm run build
npm run preview
```

Navigate to `localhost:5173`. For the built version navigate to `localhost:4173`

## Available scripts

- `npm run eslint` - Lint this project
- `npm run prettier` - Format all the code to a consistant style
- `npm run prettier-check` - Check the format of code but do not change it
- `npm run dev` - Starts the Vite development server server at `localhost:5173`
- `npm run build` - Runs the Vite production build
- `npm run preview` - Starts a local preview of the production build using [`vite preview`](https://vitejs.dev/guide/cli.html#vite-preview)


### 引入cesium

```js
import { Color } from "cesium";
var c = Color.fromRandom();
```

### 引入cesium静态文件

```js
import "cesium/Build/Cesium/Widgets/widgets.css";
```

## Cesium sub-packages

CesiumJS requires a few static files to be hosted on your server, like web workers and SVG icons. This example is already set up to copy these directories if you install the whole `cesium` package.

```js
viteStaticCopy({
  targets: [
    { src: `${cesiumSource}/ThirdParty`, dest: cesiumBaseUrl },
    { src: `${cesiumSource}/Workers`, dest: cesiumBaseUrl },
    { src: `${cesiumSource}/Assets`, dest: cesiumBaseUrl },
    { src: `${cesiumSource}/Widgets`, dest: cesiumBaseUrl },
  ],
}),
```

However if you only install `@cesium/engine` then you should change the paths in [`vite.config.js`](./vite.config.js) to the ones below:

```js
viteStaticCopy({
  targets: [
    { src: 'node_modules/@cesium/engine/Build/Workers', dest: cesiumBaseUrl },
    { src: 'node_modules/@cesium/engine/Build/ThirdParty', dest: cesiumBaseUrl },
    { src: 'node_modules/@cesium/engine/Source/Assets', dest: cesiumBaseUrl },
  ],
}),
```

Additionally you will have to import a different widgets css file in `src/main.js`.

```js
// Change this import
import "cesium/Build/Cesium/Widgets/widgets.css";

// To this one from the cesium/engine package
import "@cesium/engine/Source/Widget/CesiumWidget.css";
```

## CesiumJS before version `1.114`

If you are using a version of CesiumJS before `1.114` you will need to modify the config to tell it to ignore some external node dependencies. Add the `build` section below:

```js
  build: {
    rollupOptions: {
      external: ["http", "https", "url", "zlib"],
    },
  },
```


