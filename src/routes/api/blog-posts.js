const { Router } = require("express");

const router = Router();

const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/api/blog-posts");

// The `/api/users` endpoint

router.get("/", getAllPosts);

router.get("/:id", getPost);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

module.exports = router;
