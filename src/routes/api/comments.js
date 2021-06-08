const { Router } = require("express");

const router = Router();

const auth = require("../../middlewares/auth");
const { createComment } = require("../../controllers/api/comments");

router.post("/", auth, createComment);

module.exports = router;
