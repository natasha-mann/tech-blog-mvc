const { Router } = require("express");

// const userRoutes = require("./users");
// const commentRoutes = require("./comments");
const blogPostRoutes = require("./blog-posts");

const router = Router();

// router.use("/users", userRoutes);
// router.use("/comments", commentRoutes);
router.use("/posts", blogPostRoutes);

module.exports = router;
