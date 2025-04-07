const express = require("express");
const userRouter = require("./routes/users/usersRoutes");
const postRouter = require("./routes/posts/postsRoutes");
const commentRouter = require("./routes/comments/commentsRoutes");
const categoryRouter = require("./routes/categories/categoriesRoutes");

require("dotenv").config();
require("./config/dbConnect")

const app = express();

// middleware
app.use(express.json());

// routes
// users route
app.use("/api/v1/users/", userRouter);

// posts route
app.use("/api/v1/posts", postRouter);

// comments route
app.use("/api/v1/comments", commentRouter);

// categories route
app.use("/api/v1/categories", categoryRouter);

// error handler middleware


// listening to the server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and ready at ${PORT}`))