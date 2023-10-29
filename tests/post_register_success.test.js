const { describe } = require("mocha");
const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');

describe('POST REGISTER - SUCCESSFUL', () => {

    before(() => {
        request.setDefaultTimeout(10000)
    })

    it('REGISTER - SUCCESSFUL', async () => {

        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }

        await spec()
            .post('https://reqres.in/api/register')
            .withBody(requestBody)
            // .inspect()
            .expectStatus(200)
    });
});