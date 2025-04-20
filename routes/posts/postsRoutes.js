const express = require('express');
const { createPost, getPost, getPosts, deletePost, updatePost, handlePostLike, handlePostDislike } = require('../../controllers/posts/postsController');
const isLogin = require("../../middlewares/isLogin");
const storage = require("../../config/cloudinary");
const multer = require("multer");

const postRouter = express.Router();

const upload = multer({ storage });

// POST /api/v1/users/register
postRouter.post('/', isLogin, upload.single("image"), createPost);

// GET/api/v1/posts/:id
postRouter.get('/:id', isLogin, getPost);

// GET/api/v1/posts
postRouter.get('/', isLogin, getPosts);

postRouter.post('/:id/like', isLogin, handlePostLike);

postRouter.post('/:id/dislike', isLogin, handlePostDislike);

// DELETE/api/v1/posts/:id
postRouter.delete('/:id', isLogin, deletePost);

// PUT/api/v1/posts/:id
postRouter.put('/:id', isLogin, upload.single("image"), updatePost);

module.exports = postRouter;