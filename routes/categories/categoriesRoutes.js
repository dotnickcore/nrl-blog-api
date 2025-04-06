const express = require('express')

const categoryRouter = express.Router();

// POST/api/v1/categories
categoryRouter.post('/', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category created'
        });
    } catch (error) {
        res.json(error)
    }
});

// GET/api/v1/categories
categoryRouter.get('/', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'categories found'
        });
    } catch (error) {
        res.json(error)
    }
});

// GET/api/v1/categories/:id
categoryRouter.get('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category found'
        });
    } catch (error) {
        res.json(error)
    }
});

// DELETE/api/v1/categories/:id
categoryRouter.delete('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category deleted'
        });
    } catch (error) {
        res.json(error)
    }
});

// PUT/api/v1/categories/:id
categoryRouter.put('/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category updated'
        });
    } catch (error) {
        res.json(error)
    }
});

module.exports = categoryRouter;