const Post = require('../Post/Post');
const mongoose = require('mongoose');

// create schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastname: {
        type: String,
        required: [true, 'Last Name is required']
    },
    profilePhoto: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["Admin", "Guest", "Editor"]
    },
    viewers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    blocked:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    /*
    plan:[{
        type: String,
        enum: ['Free', 'Premium', 'Pro'],
        default: 'Free'
    }],
    */
    userAward:{
        type: String,
        enum: ['Bronze', 'Silver', 'Gold'],
        default: 'Bronze'
    }
},{
    timestamps: true,
    toJSON: { virtuals: true },
});

// hools
// pre-before record is saved
userSchema.pre("findOne", async function (next) {
    // populate the post
    this.populate('posts');

    // get user id
    const userId = this._conditions._id;

    // find the posts created by the user
    const posts = await Post.find({ user: userId });

    // get the last post created by the user
    const lastPost = posts[posts.length - 1];

    // get the last post date
    const lastPostDate = new Date(lastPost.createdAt);

    // get the last post date in string format
    const lastPostDateAsString = lastPostDate.toDateString();

    userSchema.virtual("lastPostDate").get(function () {
        return lastPostDateAsString;
    })

    // ============================ Check if User Is Inactive For 30 Days ============================ //
    // get the current date
    const currentDate = new Date();

    // get the difference betweem the last post date and the current date
    const diff = currentDate - lastPostDate;

    // get the difference in days since last post
    const diffInDays = diff / (1000 * 3600 * 24);

    if (diffInDays < 30) {
        // add virtual isInactive to the schema to check of a user is inactive for 30 days
        userSchema.virtual('isActive').get(function() {
            return true;
        });

        await User.findByIdAndUpdate(
            userId,
            {
                isBlocked: false,
            },
            {
                new: true,
            }
        );

    } else {
        userSchema.virtual('isActive').get(function() {
            return false;
        });

        await User.findByIdAndUpdate(
            userId,
            {
                isBlocked: true,
            },
            {
                new: true,
            }
        );
    }

    // ============================ Get Last Active Date For User ============================ //
    // covert to days ago
    const daysAgo = Math.floor(diffInDays);
    
    // add virtual for lastActive
    userSchema.virtual("lastActive").get(function() {
        // checks if they were present
        if (daysAgo <= 0) {
            return "Today";
        } else {
            return `${daysAgo} Days Ago`;
        }
    })

    // ============================ Update User Award Based On Number of Posts ============================ //
    // get the number of posts
    const numberOfPosts = posts.length;

    if (numberOfPosts < 10) {
        await User.findByIdAndUpdate(
            userId,
            {
                userAward: "Bronze",
            },
            {
                new: true,
            }
        )
    } else if (numberOfPosts < 20) {
        await User.findByIdAndUpdate(
            userId,
            {
                userAward: "Silver",
            },
            {
                new: true,
            }
        )
    } else {
        await User.findByIdAndUpdate(
            userId,
            {
                userAward: "Gold",
            },
            {
                new: true,
            }
        )
    }

    next();
});

userSchema.virtual("fullname").get(function () {
    return `${this.firstname || ''} ${this.lastname || ''}`.trim();
});

userSchema.virtual("initials").get(function () {
    return `${this.firstname[0] || ''}${this.lastname[0] || ''}`.trim();
});

userSchema.virtual("postCount").get(function () {
    return `${this.posts.length}`.trim();
});

userSchema.virtual("followerCount").get(function () {
    return this.followers ? this.followers.length : 0;
});

userSchema.virtual("followingCount").get(function () {
    return this.following ? this.following.length : 0;
});

userSchema.virtual("viewerCount").get(function () {
    return `${this.viewers.length}`.trim();
});

userSchema.virtual("blockedCount").get(function () {
    return `${this.blocked.length}`.trim();
});

const User = mongoose.model("User", userSchema);

module.exports = User;