const request = require('supertest');

const app = require('./server').app;

it('should return name and age', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(done);
});
    