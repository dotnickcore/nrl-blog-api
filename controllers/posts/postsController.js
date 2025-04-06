const createPost = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'post created'
        });
    } catch (error) {
        res.json(error)
    }
}

const getPost = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'post found'
        });
    } catch (error) {
        res.json(error)
    }
}

const getPosts = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'posts found'
        });
    } catch (error) {
        res.json(error)
    }
}

const deletePost = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'post deleted'
        });
    } catch (error) {
        res.json(error)
    }
}

const updatePost = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'post updated'
        });
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
}