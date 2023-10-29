const { describe } = require("mocha");
const { spec, request } = require('pactum');

describe('Get list of users', () => {
    it('Get list all users', async () => {
        await spec()
            .get('https://reqres.in/api/users?page=2')
            .expectStatus(200)
    });
});