const { describe } = require("mocha");
const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const baseURL = "https://reqres.in/";

describe("PUT Test Suite", () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it("Update user info", async () => {
    const requestBody = {
      name: "Adrian",
      job: "QA",
    };

    await spec()
      .put(baseURL + "api/users/2")
      .withBody(requestBody)
      .withHeaders("Content-Type", "application/json")
      .inspect()
      .expectStatus(200);
  });
});
