import request from './request'
export default class {
    protected url: string = ''
    protected errors: Error[] = []
    constructor(options) {}
    public async report(data) {
        const res = await request(this.url, data)
    }
    public saveToLocal(handler) {}
}
