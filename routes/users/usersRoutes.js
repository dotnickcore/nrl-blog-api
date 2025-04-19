const express = require('express');
const { 
    registerUser, 
    loginUser, 
    getUserProfile, 
    getUsers, 
    deleteUser, 
    updateUser, 
    uploadProfilePicture, 
    viewedBy,
    followUser,
    unfollowUser,
    blockUser,
    unblockUser,
    adminBlockUser,
    adminUnblockUser,
    updatePassword
} = require('../../controllers/users/usersController');
const isLogin = require("../../middlewares/isLogin")
const storage = require("../../config/cloudinary");
const multer = require("multer");
const isAdmin = require('../../middlewares/isAdmin');
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
userRouter.delete('/delete-account', isLogin, deleteUser);

// PUT/api/v1/users/:id
userRouter.put('/', isLogin, updateUser);

// PUT/api/v1/users/profile-photo-upload
userRouter.post(
    '/profile-photo-upload',
    isLogin,
    upload.single("profile"),
    uploadProfilePicture
);

//GET/api/v1/users/profile-viewers/:id
userRouter.get('/profile-viewers/:id', isLogin, viewedBy);

//GET/api/v1/users/following/:id
userRouter.get('/following/:id', isLogin, followUser);

//GET/api/v1/users/following/:id
userRouter.get('/unfollowing/:id', isLogin, unfollowUser);

//GET/api/v1/users/blocked/:id
userRouter.get('/blocked/:id', isLogin, blockUser);

//GET/api/v1/users/unblocked/:id
userRouter.get('/unblocked/:id', isLogin, unblockUser);

//PUT/api/v1/users/admin-block/:id
userRouter.put('/admin-block/:id', isLogin, isAdmin, adminBlockUser);

//PUT/api/v1/users/admin-block/:id
userRouter.put('/admin-unblock', isLogin, updatePassword);

//PUT/api/v1/users/update-user-password
userRouter.put('/update-user-password', isLogin, updatePassword);

module.exports = userRouter;