const express = require('express');
const { createComment, getComment, getComments, deleteComment, updateComment } = require('../../controllers/comments/commentsController');
const isLogin = require('../../middlewares/isLogin')

const commentRouter = express.Router();

// POST/api/v1/comments
commentRouter.post('/', isLogin, createComment);

// GET/api/v1/comments
commentRouter.get('/', isLogin, getComments);

// GET/api/v1/comments/:id
commentRouter.get('/:id', isLogin, getComment);

// DELETE/api/v1/comments/:id
commentRouter.delete('/:id', isLogin, deleteComment);

// PUT/api/v1/comments/:id
commentRouter.put('/:id', isLogin, updateComment);

module.exports = commentRouter;