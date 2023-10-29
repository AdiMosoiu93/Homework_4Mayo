const { describe } = require("mocha");
const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');

describe('POST REGISTER - UNSUCCESSFUL', () => {

    before(() => {
        request.setDefaultTimeout(10000)
    })

    it('REGISTER - UNSUCCESSFUL', async () => {

        const requestBody = {
            "email": faker.internet.email()
        }

        await spec()
            .post('https://reqres.in/api/register')
            .withBody(requestBody)
            .inspect()
            .expectStatus(400)
    });
});