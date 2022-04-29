const joi = require('@hapi/joi')
const request = require('supertest');
const schema = require('./schema');

describe('CONTRACT /usuarios', () => {
    const URL = 'https://serverest.dev'

    it('GET', async () => {
        const {body} = await request(URL).get('/usuarios').expect(200)
        joi.assert(body, schema.get)
    });

    
    it('POST', async () => {
        const {body} = await request(URL).post('/usuarios').send({}).expect(400)
        joi.assert(body, schema.post)
    });

    // Forma alternativa

    // it('CONTRACT', async () => {
    //     await request(URL)
    //         .get('/usuarios')            
    //         .expect(200)
    //         .then(response => {
    //             joi.assert(response.body, schema.get)
    //         })
    // });
});