const User = require("../../model/User/User");
const Comment = require("../../model/Comment/Comment");
const { appError, AppError } = require('../../utils/appError');
const Post = require("../../model/Post/Post");

const createComment = async(req, res, next) => {
    try {
        const { description } = req.body;

        const post = await Post.findById(req.params.id);

        if (!post) {
            return next(appError("Oops! We couldn’t find that post. It might’ve been deleted or never existed.", 404));
        }

        const userCommenter = await User.findById(req.userAuth);

        if (!userCommenter) {
            return next(appError("Oops! We couldn’t find that user. It might’ve been deleted or never existed.", 404));
        }

        const comment = await Comment.create({
            post: post._id,
            description,
            user: userCommenter
        });
        
        post.comments.push(comment._id);

        userCommenter.comments.push(comment._id);
        
        await post.save({ validateBeforeSave: false });
        await userCommenter.save({ validateBeforeSave: false });

        res.json({
            status: 'success',
            data: comment
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const deleteComment = async(req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id);

        if (comment.user.toString() !== req.userAuth.toString()) {
            return next(appError("You do not have permission to delete this comment", 403));
        }

        await Comment.findByIdAndDelete(req.params.id);

        res.json({
            status: 'success',
            data: 'comment deleted'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const updateComment = async(req, res, next) => {
    try {
        const { description } = req.body;

        const comment = await Comment.findById(req.params.id);
        
        if (comment.user.toString() !== req.userAuth.toString()) {
            return next(appError("You do not have permission to update this comment", 403));
        }

    const category = await Comment.findByIdAndUpdate(
      req.params.id,
      { description },
      { new: true, runValidators: true }
    );

        res.json({
            status: 'success',
            data: category
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

module.exports = {
    createComment,
    getComment,
    getComments,
    updateComment,
    deleteComment
}