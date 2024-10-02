import DT from '@starfruitcloud/digitwin';

export interface Options {
    id: string;
    baseUrl?: string;
}

export type AddonType = typeof Earth;

export default class Earth {

    protected options: Options
    protected isOnReady: boolean = false;
    protected onReadyFns: (() => any)[] = [];
    viewer: any = null;

    constructor(options) {
        this.options = options
        this.init(options)
    }

    protected init({ id, baseUrl }) {
        function initViewer() {
            this.viewer = new DT.Viewer(id)
            this.isOnReady = true;
            this.runOnReadyFn();
        }
        if (baseUrl) {
            DT.config.baseUrl = baseUrl
        }
        DT.ready(initViewer.bind(this))
    }

    protected runOnReadyFn() {
        while (this.onReadyFns.length) {
            const fn = this.onReadyFns.shift()
            fn.apply(this, [])
        }
    }

    onReady(fn) {
        if (this.isOnReady) {
            fn.apply(this, [])
        } else {
            this.onReadyFns.push(fn)
        }
    }

}