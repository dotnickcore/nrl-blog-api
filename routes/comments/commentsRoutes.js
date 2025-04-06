const express = require('express')

const commentRouter = express.Router();

// POST/api/v1/comments
commentRouter.post('/', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment created'
        });
    } catch (error) {
        res.json(error)
    }
});

// GET/api/v1/comments
commentRouter.get('/', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comments found'
        });
    } catch (error) {
        res.json(error)
    }
});

// GET/api/v1/comments/:id
commentRouter.get('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment found'
        });
    } catch (error) {
        res.json(error)
    }
});

// DELETE/api/v1/comments/:id
commentRouter.delete('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment deleted'
        });
    } catch (error) {
        res.json(error)
    }
});

// PUT/api/v1/comments/:id
commentRouter.put('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment updated'
        });
    } catch (error) {
        res.json(error)
    }
});

module.exports = commentRouter;