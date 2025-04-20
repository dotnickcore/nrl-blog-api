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
        const posts = await Post.find({}).populate('user').populate('category', 'title');
        
        const filteredPosts = posts.filter(post => {
            const blockedUsers = post.user.blocked;
            const isBlocked = blockedUsers.includes(req.userAuth);

            return !isBlocked;
        });

        res.json({
            status: 'success',
            data: filteredPosts
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const handlePostLike = async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id);
      const userId = req.userAuth;  // Assuming this is already the user ID
  
      const user = await User.findById(userId);
  
      if (user.isBlocked) {
        return next(appError("You are currently blocked from liking posts.", 403));
      }
  
      // Check if the user has already liked the post
      const hasLiked = post.likes.some(id => id.toString() === userId.toString());
  
      if (hasLiked) {
        // Unlike: Remove user ID from the likes array
        post.likes = post.likes.filter(id => id.toString() !== userId.toString());
      } else {
        // Like: Add user ID to the likes array
        post.likes.push(userId);
      }
  
      // Ensure likes are unique
      post.likes = [...new Set(post.likes.map(id => id.toString()))];

      const hasDisliked = post.dislikes.some(id => id.toString() === userId.toString());

        if (hasDisliked) {
            // Unlike: Remove user ID from the likes array
            post.dislikes = post.dislikes.filter(id => id.toString() !== userId.toString());
        }
  
      await post.save();
  
      res.json({
        status: 'success',
        message: hasLiked
          ? 'You have successfully unliked this post'
          : 'You have successfully liked this post',
        data: post,
      });
    } catch (error) {
      next(new AppError(error.message));
    }
  };

const handlePostDislike = async(req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        const userId = req.userAuth;  // Assuming this is already the user ID
    
        const user = await User.findById(userId);
    
        if (user.isBlocked) {
          return next(appError("You are currently blocked from disliking posts.", 403));
        }
    
        // Check if the user has already disliked the post
        const hasDisliked = post.dislikes.some(id => id.toString() === userId.toString());

        if (hasDisliked) {
          // Unlike: Remove user ID from the dislikes array
          post.dislikes = post.dislikes.filter(id => id.toString() !== userId.toString());
        } else {
          // Dislike: Add user ID to the dislikes array
          post.dislikes.push(userId);
        }
    
        // Ensure dislikes are unique
        post.dislikes = [...new Set(post.dislikes.map(id => id.toString()))];

        const hasLiked = post.likes.some(id => id.toString() === userId.toString());

        if (hasLiked) {
            // Unlike: Remove user ID from the likes array
            post.likes = post.likes.filter(id => id.toString() !== userId.toString());
        }
    
        await post.save();
    
        res.json({
          status: 'success',
          message: hasDisliked
            ? 'You have successfully undisliked this post'
            : 'You have successfully disliked this post',
          data: post,
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
    deletePost,
    handlePostLike,
    handlePostDislike
}