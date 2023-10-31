const { describe } = require("mocha");
const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const baseURL = "https://reqres.in/";
const fakeID = faker.number.int();

describe("DELETE Test Suite", () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it("Delete newly added user", async () => {
    await spec()
      .delete(baseURL + "api/users/" + fakeID)
      .inspect()
      .expectStatus(204);
  });
});
