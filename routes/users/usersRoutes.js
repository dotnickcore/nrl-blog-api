const express = require('express');
const { registerUser, loginUser, getUserProfile, getUsers, deleteUser, updateUser } = require('../../controllers/users/usersController');

const userRouter = express.Router();

// POST /api/v1/users/register
userRouter.post("/register", registerUser);

// POST /api/v1/users/login
userRouter.post('/login', loginUser);

// GET/api/v1/users/profile/:id
userRouter.get('/profile/:id', getUserProfile);

// GET/api/v1/users
userRouter.get('/', getUsers);

// DELETE/api/v1/users/:id
userRouter.delete('/:id', deleteUser);

// PUT/api/v1/users/:id
userRouter.put('/:id', updateUser);

module.exports = userRouter;