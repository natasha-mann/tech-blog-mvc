const { Router } = require("express");
const {
  renderDashboard,
  renderCreatePost,
} = require("../../controllers/html/private");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/dashboard/create", renderCreatePost);

module.exports = router;
