/**
 * @author timger
 */
import BaseRequest from './BaseRequest';
import JQuery from "jquery";

class BaseModel {

    data: any = {};
    httpRequest: BaseRequest;

    constructor(url: string) {
        this.httpRequest = new BaseRequest(url)
    }


    post(data: any, options: any): JQuery.Promise<any> {
        return this.httpRequest.doRequest(data, options)
    }

    put(data: any, options: any): JQuery.Promise<any> {
        return this.httpRequest.doRequest(data, options)
    }

    get(options: any): JQuery.Promise<any> {
        return this.httpRequest.doRequest({}, options)
    }

    delete(options: any): JQuery.Promise<any> {
        return this.httpRequest.doRequest({}, options)
    }

    head(options: any): JQuery.Promise<any> {
        return this.httpRequest.doRequest({}, options)
    }
}

export default BaseModel;