const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
require("./config/dbConnect")

const app = express();

// middlewards


// routes


// error handler middleward


// listening to the server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log("Server is up and ready"))