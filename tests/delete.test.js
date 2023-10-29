const { describe } = require("mocha");
const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');

describe('DELETE', () => {

    before(() => {
        request.setDefaultTimeout(10000)
    })

    it('Delete newly added user', async () => {

        await spec()
            .delete('https://reqres.in/api/users/2')
            .inspect()
            .expectStatus(204)
    });
});