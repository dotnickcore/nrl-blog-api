const registerUser = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user registered'
        });
    } catch (error) {
        res.json(error)
    }
}

const loginUser = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'user login'
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