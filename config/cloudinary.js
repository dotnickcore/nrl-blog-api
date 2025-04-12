const cloudinary = require('cloudinary').v2;
require("dotenv").config();
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormat: ["jpg", "jpeg", "png"],
    params: {
        folder: "nrl-blog-api",
        transformation: [{ width: 500, height: 500, crop: "limit" }],
    }
});

module.exports = storage;