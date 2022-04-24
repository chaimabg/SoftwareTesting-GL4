var {getUsers, getUserById, addUser, deleteUser} = require("../services/user-service");
const request = require("supertest");
const app = require("../app");
const User = require('../models/User')
const users = [new User({
    id: 1,
    firstName: 'Foulen1',
    lastName: 'Ben Foulen1',
    emailAddress: 'Foulen1@gmail.com'
}),
    new User({
        id: 2,
        firstName: 'Foulen2',
        lastName: 'Ben Foulen2',
        emailAddress: 'Foulen2@gmail.com'
    })];

beforeAll(async () => {
    await users.save();
});

afterAll(async () => {
    await User.deleteMany(users);
});

describe('Get end points', function () {

    test('responds to get users', async () => {
        const res = await request(app).get("/users");
        expect(res.body.length).toBe(2);
        expect(res.statusCode).toEqual(200);
    });
    test('responds to get users by id', async () => {
        const res = await request(app).get(`/users/2`);
        expect(newUser.body).toHaveProperty("id");
        expect(newUser.body.firstName).toBe("Foulen2");
        expect(res.statusCode).toEqual(200);
    });

})
describe('post end point', () => {
    test('responds to add user', async () => {
        const newUser = await request(app).post("/users").send(
            {   id: 3,
                firstName: 'Foulen3',
                lastName: 'Ben Foulen3',
                emailAddress: 'Foulen3@gmail.com'
            }
        );

        expect(res.statusCode).toEqual(200);
    });
})
describe('delete end point', () => {
    test('responds to delete user', async () => {
        const res = await request(app).delete("/users").send(
            {
                emailAddress: 'Foulen3@gmail.com'
            }
        );
        expect(res.statusCode).toEqual(200);
    });
})
