const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
require("./config/dbConnect")

const app = express();

// middleware


// routes

// users route
// POST/api/v1/users/register
app.post('/api/v1/users/register', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user registered'
        });
    } catch (error) {
        res.json(error)
    }
});

// POST/api/v1/users/login
app.post('/api/v1/users/login', async(req, res) => {
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
app.get('/api/v1/users/profile/:id', async(req, res) => {
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
app.get('/api/v1/users', async(req, res) => {
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
app.delete('/api/v1/users/:id', async(req, res) => {
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
app.put('/api/v1/users/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user profile updated'
        });
    } catch (error) {
        res.json(error)
    }
});

// posts route
// POST/api/v1/posts
app.post('/api/v1/posts', async(req, res) => {
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
app.get('/api/v1/posts/:id', async(req, res) => {
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
app.get('/api/v1/posts', async(req, res) => {
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
app.delete('/api/v1/posts/:id', async(req, res) => {
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
app.put('/api/v1/posts/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'post updated'
        });
    } catch (error) {
        res.json(error)
    }
});

// comments route
// POST/api/v1/comments
app.post('/api/v1/comments', async(req, res) => {
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
app.get('/api/v1/comments', async(req, res) => {
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
app.get('/api/v1/comments/:id', async(req, res) => {
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
app.delete('/api/v1/comments/:id', async(req, res) => {
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
app.put('/api/v1/comments/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment updated'
        });
    } catch (error) {
        res.json(error)
    }
});

// categories route
// POST/api/v1/comments
app.post('/api/v1/categories', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category created'
        });
    } catch (error) {
        res.json(error)
    }
});

// GET/api/v1/comments
app.get('/api/v1/categories', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'categories found'
        });
    } catch (error) {
        res.json(error)
    }
});

// GET/api/v1/comments/:id
app.get('/api/v1/categories/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category found'
        });
    } catch (error) {
        res.json(error)
    }
});

// DELETE/api/v1/comments/:id
app.delete('/api/v1/categories/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category deleted'
        });
    } catch (error) {
        res.json(error)
    }
});

// PUT/api/v1/comments/:id
app.put('/api/v1/categories/:id', async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category updated'
        });
    } catch (error) {
        res.json(error)
    }
});

// error handler middleware


// listening to the server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and ready at ${PORT}`))