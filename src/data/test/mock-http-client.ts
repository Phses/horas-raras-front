import { type HttpPostClient, type PostParams } from '@/data/protocols/http/'

import {
  type HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http/http-response'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    StatusCode: HttpStatusCode.ok
  }

  async post(params: PostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
