import { AuthParams } from "../models";
import { faker } from "@faker-js/faker";

export const mockAuthParams = (): AuthParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
