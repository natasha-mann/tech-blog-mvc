const { Router } = require("express");

const router = Router();

const { createUser } = require("../../controllers/api/users");

router.post("/", createUser);

module.exports = router;
