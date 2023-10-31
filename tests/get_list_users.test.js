const { describe } = require("mocha");
const { spec, request } = require("pactum");
const baseURL = "https://reqres.in/";

describe("GET Test Suite", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Get list of all users", async () => {
    await spec()
      .get(baseURL + "api/users?page=2")
      .expectStatus(200);
  });
});
