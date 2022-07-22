const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {userOneId, userOne, setupDatabase} = require('./fixtures/db')


beforeEach(setupDatabase)


test('Should sign up a new user', async ()=>{
    await request(app).post('/users').send({
        name: 'Aaron',
        email:'atfoofy@gmail.com',
        password: 'Apple@123'
    }).expect(201)


})

test('Should login existing user', async ()=>{
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login, non existant user', async ()=>{
    await request(app).post('/users/login').send({
        email: 'mke@email.com',
        password: 'omegsater'
    }).expect(400)
})

test('Should get profile for user', async()=>{
    await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})

test('Should not get profile for user', async()=>{
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})

test('Should delete account for user', async()=>{
    const response = await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should NOT delete account for user', async()=>{
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

test('Should upload avatar image', async ()=>{
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .attach('avatar','tests/fixtures/philly.jpg')
    .expect(200)

    const user = await User.findById(userOneId)
    // toEqual for objects dont use toBe
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async () =>{
    await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({name:'Mike birbiglia'})
    .expect(200)

    const user = await User.findById(userOneId)
    expect(user).not.toEqual(userOne)
})

test('Should not update valid user fields', async () =>{
    await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({location:'Mike birbiglia'})
    .expect(400)
})