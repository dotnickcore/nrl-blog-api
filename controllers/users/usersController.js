const bcrypt = require('bcryptjs');
const User = require("../../model/User/User");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require('../../utils/getTokenFromHeader');
const { appError, AppError } = require('../../utils/appError');

const registerUser = async(req, res, next) => {
    const { firstname, lastname, profilePhoto, email, password } = req.body;
    
    try {
        const userFound = await User.findOne({email});

        if (userFound) {
            return next(new AppError("User Already Exists", 500));
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            firstname, 
            lastname, 
            email, 
            password: hashedPassword
        })

        res.json({
            status: 'success',
            data: user
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({email});

        if (!userFound) {
            return res.json({
                msg: "Invalid Login Credentials"
            });
        }

        const isPasswordMatch = await bcrypt.compare(
            password,
            userFound.password
        );

        if(!isPasswordMatch) {
            return res.json({
                status: 'success',
                data: 'invalid login credentials'
            });
        }

        return res.json({
            status: 'success',
            data: {
                firstname: userFound.firstname,
                lastname: userFound.lastname,
                email: userFound.email,
                isAdmin: userFound.isAdmin,
                token: generateToken(userFound._id)
            }
        });
    } catch (error) {
        res.json(error)
    }
}

const getUserProfile = async(req, res) => {
    try {
        const user = await User.findById(req.userAuth)

        res.json({
            status: 'success',
            data: user
        });
    } catch (error) {
        res.json(error)
    }
}

const getUsers = async(req, res) => {
    try {
        const users = await User.find();

        res.json({
            status: 'success',
            data: users
        });
    } catch (error) {
        res.json(error)
    }
}

const deleteUser = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user profile deleted'
        });
    } catch (error) {
        res.json(error)
    }
}

const updateUser = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user profile updated'
        });
    } catch (error) {
        res.json(error)
    }
}

const uploadProfilePicture = async(req, res, next) => {
    try {
        // 1. find the user to be updated
        const userToUpdate = await User.findById(req.userAuth);

        // 2. check if user is found
        if(!userToUpdate) {
            return next(appError("User Not Found", 404));
        }

        // 3. check if user is blocked
        if(userToUpdate.isBlocked) {
            return next(appError("User Is Forbidden", 403));
        }

        // 4. check if a user is updating their photo
        if (req.file) {
            // 5. update profile picture
            await User.findByIdAndUpdate(
                req.userAuth, 
                {
                    $set: {
                        profilePhoto: req.file.path
                    },
                },
                {
                    new: true,
                }
            );

            res.json({
                status: 'success',
                data: 'you have successfully updated your profile photo'
            });
        }
    } catch (error) {
        next(appError(error.message, 500));
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    getUsers,
    deleteUser,
    updateUser,
    uploadProfilePicture
}