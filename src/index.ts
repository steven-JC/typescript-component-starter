import request from '@/request'
export default class Starter {
    constructor(url: string) {
        this.report(url)
    }
    public async report(url: string) {
        const res = await request(url)
        console.log(res)
    }
}
