const { Router } = require("express");

const router = Router();

const {
  renderHome,
  renderLogin,
  renderSignup,
} = require("../../controllers/html/public");

router.get("/", renderHome);
router.get("/login", renderLogin);
router.get("/signup", renderSignup);

module.exports = router;
