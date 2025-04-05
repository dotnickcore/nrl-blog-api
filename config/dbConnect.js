const mongoose = require('mongoose');

// function to connect
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('DB Connect Succeeded');
    } catch (error) {
        console.log('Error:', error)
        process.exit(1);
    }
};

dbConnect();