const express = require('express');
const { createPost, getPost, getPosts, deletePost, updatePost } = require('../../controllers/posts/postsController');

const postRouter = express.Router();

// POST /api/v1/users/register
postRouter.post('/', createPost);

// GET/api/v1/posts/:id
postRouter.get('/:id', getPost);

// GET/api/v1/posts
postRouter.get('/', getPosts);

// DELETE/api/v1/posts/:id
postRouter.delete('/:id', deletePost);

// PUT/api/v1/posts/:id
postRouter.put('/:id', updatePost);

module.exports = postRouter;