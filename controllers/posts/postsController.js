const Post = require("../../model/Post/Post");
const User = require("../../model/User/User");

const createPost = async(req, res, next) => {
    try {
        const { title, description } = req.body;

        // find the user
        const author = await User.findById(req.userAuth);

        // create the post
        const postCreated = await Post.create({
            title,
            description,
            user: author._id,
        })

        // associate the user to a post -Push the post into the user posts field
        author.posts.push(postCreated);

        // save the author
        await author.save();

        res.json({
            status: 'success',
            data: postCreated
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