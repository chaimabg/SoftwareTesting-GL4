const request = require("supertest");
const app = require("../app");
const User = require('../models/User');
const bcrypt = require("bcrypt");

beforeAll(async () => {
    let pass = await bcrypt.hash('Foulen5', 10);
    const user = new User({
        identifier: 3693356,
        firstName: 'Foulen5',
        lastName: 'Ben Foulen5',
        emailAddress: 'mrX@gmail.com',
        password: pass
    });
    await user.save();
});

afterAll(async () => {
    await User.deleteOne({emailAddress: 'Foulen3@gmail.com'});
});
describe("Authentification",()=>{
    test('authentification with valid credentials', async () => {
        const resp_post = await request(app).post("/auth").send({
            emailAddress: 'mrX@gmail.com',
            password:'Foulen5',
        });
        expect(resp_post.statusCode).toEqual(200);
    });
    test('authentification with incorrect email', async () => {
        const resp_post = await request(app).post("/auth").send({
            emailAddress: 'FFF@gmail.com',
            password:'Foulen5',
        });
        expect(resp_post.statusCode).toEqual(500);
    });
    test('authentification with incorrect password', async () => {
        const resp_post = await request(app).post("/auth").send({
            emailAddress: 'mrX@gmail.com',
            password:'Foulen',
        });
        expect(resp_post.statusCode).toEqual(500);
    });

})
