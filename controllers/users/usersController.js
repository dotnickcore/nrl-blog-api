const bcrypt = require('bcryptjs');
const User = require("../../model/User/User");

const registerUser = async(req, res) => {
    const { firstname, lastname, profilePhoto, email, password } = req.body;
    
    try {
        const userFound = await User.findOne({email});

        if (userFound) {
            return res.json({
                msg: "User Already Exists"
            })
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
        res.json(error)
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
            data: userFound
        });
    } catch (error) {
        res.json(error)
    }
}

const getUserProfile = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user profile found'
        });
    } catch (error) {
        res.json(error)
    }
}

const getUsers = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'profiles found'
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

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    getUsers,
    deleteUser,
    updateUser
}