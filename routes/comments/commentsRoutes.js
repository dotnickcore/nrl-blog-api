const express = require('express');
const { createComment, getComment, getComments, deleteComment, updateComment } = require('../../controllers/comments/commentsController');
const isLogin = require('../../middlewares/isLogin')

const commentRouter = express.Router();

// POST/api/v1/comments
commentRouter.post('/', createComment);

// GET/api/v1/comments
commentRouter.get('/', getComments);

// GET/api/v1/comments/:id
commentRouter.get('/:id', getComment);

// DELETE/api/v1/comments/:id
commentRouter.delete('/:id', deleteComment);

// PUT/api/v1/comments/:id
commentRouter.put('/:id', updateComment);

module.exports = commentRouter;