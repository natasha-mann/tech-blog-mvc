const { Router } = require("express");

const blogPostRoutes = require("./blog-posts");
const usersRoutes = require("./users");

const router = Router();

router.use("/posts", blogPostRoutes);
router.use("/users", usersRoutes);

module.exports = router;
