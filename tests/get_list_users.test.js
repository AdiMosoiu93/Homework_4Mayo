const { describe } = require("mocha");
const { spec, request } = require("pactum");
const baseURL = "https://reqres.in/";
const getAllUsersSchema = require('../data/response/get_all_users_schema.json')

describe("GET Test Suite", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Get list of all users", async () => {
    await spec()
      .get(baseURL + "api/users?page=2")
      .expectStatus(200)
      .expectJsonSchema(getAllUsersSchema)
  });
});
