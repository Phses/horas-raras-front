import { HttpPostClient, HttpStatusCode } from "@/data/protocols/http";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { AuthParams, AuthToken } from "@/domain/models";
import { Authentication } from "@/domain/usecases/authentication/authentication";

export class RemoteAuthentication implements Authentication {
  private url: string;
  private httpPostClient: HttpPostClient<AuthParams, AuthToken>;
  constructor(
    url: string,
    httpPostClient: HttpPostClient<AuthParams, AuthToken>
  ) {
    (this.url = url), (this.httpPostClient = httpPostClient);
  }
  async auth(params: AuthParams): Promise<AuthToken> {
    const response = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (response.StatusCode) {
      case HttpStatusCode.ok:
        return response.Body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
