import { APIRequestContext } from "playwright-core";

export default class API {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async postRequest(endpoint: string, reqBody: object) {
    const response = await this.request.post(endpoint, { data: reqBody })
    return response;
  }

  async getRequest(endpoint: string) {
    const response = await this.request.get(endpoint)
    return response
  }
  async putRequest(endpoint: string, reqBody: object, token: string) {
    const response = await this.request.put(endpoint, {
      data: reqBody
    })
    return response
  }

  async patchRequest(endpoint: string, reqBody: object, token: string) {
    const res = await this.request.patch(endpoint, {
      data: reqBody
    })
    return res
  }

  async deleteReq(endpoint: string, token: string) {
    const response = await this.request.delete(endpoint, {
      headers: {
        'Cookie': `token=${token}`
      }
    })
    return response
  }
}