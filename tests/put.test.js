const { describe } = require("mocha");
const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');

describe('PUT', () => {

    before(() => {
        request.setDefaultTimeout(10000)
    })

    it('Update user', async () => {

        const requestBody = {
            "name": "Adrian",
            "job": "QA"
        }

        await spec()
            .put('https://reqres.in/api/users/2')
            .withBody(requestBody)
            .inspect()
            .expectStatus(200)
    });
});