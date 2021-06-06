const { Router } = require("express");

const blogPostRoutes = require("./blog-posts");

const router = Router();

router.use("/posts", blogPostRoutes);

module.exports = router;
