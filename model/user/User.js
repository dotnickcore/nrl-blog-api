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
userSchema.pre(/^find/, function (next) {
    console.log("Pre Hook Called")
    next();
});

// post -after saving
userSchema.pre("save", function (next) {
    console.log("Post Hook Called")
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