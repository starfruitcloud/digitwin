export interface Options {
    id: string;
    baseUrl?: string;
}
export type AddonType = typeof Earth;
export default class Earth {
    protected options: Options;
    constructor(options: any);
    protected init({ id, baseUrl }: {
        id: any;
        baseUrl: any;
    }): any;
}
