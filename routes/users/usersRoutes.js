const express = require('express');
const { registerUser, loginUser, getUserProfile, getUsers, deleteUser, updateUser, uploadProfilePicture } = require('../../controllers/users/usersController');
const isLogin = require("../../middlewares/isLogin")
const storage = require("../../config/cloudinary");
const multer = require("multer");
const userRouter = express.Router();

const upload = multer({ storage });

// POST /api/v1/users/register
userRouter.post("/register", registerUser);

// POST /api/v1/users/login
userRouter.post('/login', loginUser);

// GET/api/v1/users/profile/:id
userRouter.get('/profile/', isLogin, getUserProfile);

// GET/api/v1/users
userRouter.get('/', getUsers);

// DELETE/api/v1/users/:id
userRouter.delete('/:id', deleteUser);

// PUT/api/v1/users/:id
userRouter.put('/:id', updateUser);

// PUT/api/v1/users/profile-photo-upload
userRouter.post(
    '/profile-photo-upload',
    isLogin,
    upload.single("profile"),
    uploadProfilePicture
);

module.exports = userRouter;