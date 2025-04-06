const express = require('express')

const userRouter = express.Router();

userRouter.post('/api/v1/users/register', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user registered'
        });
    } catch (error) {
        res.json(error)
    }
});