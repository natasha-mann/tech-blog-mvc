const { Router } = require("express");

const router = Router();

//require handler functions

// The `/api/users` endpoint

router.get("/", getAllPosts);

router.get("/:id", getPost);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

module.exports = router;
