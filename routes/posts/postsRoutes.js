const express = require('express')

const postRouter = express.Router();

// POST /api/v1/users/register
postRouter.post('/', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'post created'
        });
    } catch (error) {
        res.json(error)
    }
});

// GET/api/v1/posts/:id
postRouter.get('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'post found'
        });
    } catch (error) {
        res.json(error)
    }
});

// GET/api/v1/posts
postRouter.get('/', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'posts found'
        });
    } catch (error) {
        res.json(error)
    }
});

// DELETE/api/v1/posts/:id
postRouter.delete('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'post deleted'
        });
    } catch (error) {
        res.json(error)
    }
});

// PUT/api/v1/posts/:id
postRouter.put('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'post updated'
        });
    } catch (error) {
        res.json(error)
    }
});

module.exports = postRouter;