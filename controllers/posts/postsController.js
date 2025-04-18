const Post = require("../../model/Post/Post");
const User = require("../../model/User/User");
const { appError, AppError } = require('../../utils/appError');

const createPost = async(req, res, next) => {
    try {
        const { title, description, category } = req.body;

        // find the user
        const author = await User.findById(req.userAuth);

        // checks if user was blocked
        if (author.isBlocked) {
            return next(appError("You are currently blocked from creating posts."), 403);
        }

        // create the post
        const postCreated = await Post.create({
            title,
            description,
            user: author._id,
            category
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
        next(new AppError(error.message));
    }
}

const getPost = async(req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'post found'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const getPosts = async(req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'posts found'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const deletePost = async(req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'post deleted'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const updatePost = async(req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'post updated'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
}