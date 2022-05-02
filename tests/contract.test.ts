const joi = require('@hapi/joi')
const request = require('supertest');
const schema = require('./schema');
const base_url = 'https://serverest.dev'

describe('CONTRACT /usuarios', () => {

    it('GET', async () => {
        const {body} = await request(base_url).get('/usuarios').expect(200)
        joi.assert(body, schema.get)
    });

    
    it('POST', async () => {
        const {body} = await request(base_url).post('/usuarios').send({}).expect(400)
        joi.assert(body, schema.post)
    });
});