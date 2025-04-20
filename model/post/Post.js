const mongoose = require('mongoose');

// create schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Post title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Post description is required'],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        // required: ["Post category is required"]
    },
    numViews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Post User is required"]
    },
    photo: {
        type: String,
        // required: [true, "Post Image is required"]
    },
},{
    timestamps: true,
    toJSON: { virtuals: true }
});

// hooks
postSchema.virtual("viewsCount").get(function () {
    return this.numViews.length;  // This accesses 'numViews' array to calculate length
  });

  postSchema.virtual("likesCount").get(function () {
    return this.likes.length;  // This accesses 'likes' array to calculate length
  });

  postSchema.virtual("dislikesCount").get(function () {
    return this.dislikes.length;  // This accesses 'dislikes' array to calculate length
  });

  postSchema.virtual("likesPercentage").get(function () {
    const total = this.likes.length + this.dislikes.length;
    if (total === 0) return 0; // Avoid divide by 0
    return Math.round((this.likes.length / total) * 100);
  });
  
  postSchema.virtual("dislikesPercentage").get(function () {
    const total = this.likes.length + this.dislikes.length;
    if (total === 0) return 0;
    return Math.round((this.dislikes.length / total) * 100);
  });
  
  // If you want to run any logic before a 'find' operation, you can use a 'pre' hook like this:
  postSchema.pre(/^find/, function(next) {
    // Perform any logic here before the query is executed.
    // No need to define the virtual here
    next();
  });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;