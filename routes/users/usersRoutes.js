const express = require('express')

const userRouter = express.Router();

// POST /api/v1/users/register
userRouter.post("/register", async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user registered'
        });
    } catch (error) {
        res.json(error)
    }
});

// POST /api/v1/users/login
userRouter.post('/login', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user login'
        });
    } catch (error) {
        res.json(error)
    }
});

// GET/api/v1/users/profile/:id
userRouter.get('/profile/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user profile found'
        });
    } catch (error) {
        res.json(error)
    }
});

// GET/api/v1/users
userRouter.get('/', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'profiles found'
        });
    } catch (error) {
        res.json(error)
    }
});

// DELETE/api/v1/users/:id
userRouter.delete('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user profile deleted'
        });
    } catch (error) {
        res.json(error)
    }
});

// PUT/api/v1/users/:id
userRouter.put('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user profile updated'
        });
    } catch (error) {
        res.json(error)
    }
});

module.exports = userRouter;