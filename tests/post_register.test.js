const { describe } = require("mocha");
const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const baseURL = "https://reqres.in/";
const fakeEmail = faker.internet.email();

describe("POST Test Suite", () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it("Test REGISTER - SUCCESSFUL", async () => {
    const requestBody = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };

    await spec()
      .post(baseURL + "api/register")
      .withBody(requestBody)
      // .inspect()
      .expectStatus(200);
  });

  it("Test REGISTER - UNSUCCESSFUL, password not given", async () => {
    await spec()
      .post(baseURL + "api/register")
      .withBody(fakeEmail)
      .inspect()
      .expectStatus(400);
  });
});
