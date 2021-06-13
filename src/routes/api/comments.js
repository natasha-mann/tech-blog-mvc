const { Router } = require("express");

const router = Router();

const auth = require("../../middlewares/auth");
const {
  createComment,
  updateComment,
} = require("../../controllers/api/comments");

router.post("/", auth, createComment);
router.put("/:id", auth, updateComment);

module.exports = router;
