import { Earth } from "@starfruitcloud/digitwin/addons"

const earth = new Earth({
    id: "viewer-container",
});

earth.onReady(() => {

    console.log('ready')

    // setTimeout(() => {
    //     earth.viewer.destroy()
    // }, 3000)
})
