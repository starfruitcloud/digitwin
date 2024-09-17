import * as DT from '@starfruitcloud/digitwin';

export interface Options {
    id: string;
    baseUrl?: string;
}

export type AddonType = typeof Earth;

export default class Earth {

    protected options: Options

    constructor(options) {
        this.options = options
        return this.init(options)
    }

    protected init({ id, baseUrl }) {
        let viewer = undefined
        function initViewer() {
            return new DT.Viewer(id)
        }
        if (baseUrl) {
            DT.config.baseUrl = baseUrl
        }
        return DT.ready(initViewer)
    }


}