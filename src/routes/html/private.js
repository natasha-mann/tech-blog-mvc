const { Router } = require("express");
const {
  renderDashboard,
  renderCreatePost,
  renderEditPost,
} = require("../../controllers/html/private");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/dashboard/create", renderCreatePost);
router.get("/dashboard/edit/:id", renderEditPost);

module.exports = router;
