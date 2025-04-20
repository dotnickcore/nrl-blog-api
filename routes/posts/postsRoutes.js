const express = require('express');
const { createPost, getPost, getPosts, deletePost, updatePost, handlePostLike, handlePostDislike } = require('../../controllers/posts/postsController');
const isLogin = require("../../middlewares/isLogin");

const postRouter = express.Router();

// POST /api/v1/users/register
postRouter.post('/', isLogin, createPost);

// GET/api/v1/posts/:id
postRouter.get('/:id', isLogin, getPost);

// GET/api/v1/posts
postRouter.get('/', isLogin, getPosts);

postRouter.post('/:id/like', isLogin, handlePostLike);

postRouter.post('/:id/dislike', isLogin, handlePostDislike);

// DELETE/api/v1/posts/:id
postRouter.delete('/:id', isLogin, deletePost);

// PUT/api/v1/posts/:id
postRouter.put('/:id', isLogin, updatePost);

module.exports = postRouter;