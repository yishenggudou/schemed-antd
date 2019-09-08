/**
 * @author timger
 */
import JQuery from 'jquery'

class BaseRequest {
    constructor(url: string) {

    }

    doRequest(data: any, options: any): JQuery.Promise<any> {
        const settings: JQuery.AjaxSettings = {};
        return JQuery.ajax(settings) as JQuery.Promise<any>
    }
}

export default BaseRequest;