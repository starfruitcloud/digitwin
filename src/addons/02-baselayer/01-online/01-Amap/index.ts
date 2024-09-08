// export default class {


//     let viewer = undefined
//     function initViewer() {
//       viewer = new DT.Viewer('viewer-container')
//       let baseLayer = DT.ImageryLayerFactory.createImageryLayer(DT.ImageryType.AMAP)
//       viewer.addBaseLayer(baseLayer, {
//         iconUrl: '../assets/icon/elec.png',
//         name: '电子'
//       })

//       let baseLayer_img = DT.ImageryLayerFactory.createImageryLayer(DT.ImageryType.AMAP, {
//         style: 'img'
//       })
//       viewer.addBaseLayer(baseLayer_img, {
//         iconUrl: '../assets/icon/img.png',
//         name: '影像'
//       })

//       let baseLayer_cva = DT.ImageryLayerFactory.createImageryLayer(DT.ImageryType.AMAP, {
//         style: 'cva'
//       })
//       viewer.addBaseLayer([baseLayer_img, baseLayer_cva], {
//         iconUrl: '../assets/icon/img.png',
//         name: '影像+注记'
//       })

//       viewer.zoomToPosition(
//         new DT.Position(105.565571, 31.984708, 15362816, 0, -90)
//       )
//     }
//     DT.ready({
//       baseUrl: '../libs/dt-sdk/resources/'
//     }).then(initViewer)
// }