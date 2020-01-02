const User = require("../controllers/user");
const express = require("express");

const router = express.Router();

router.post("/auth", User.auth);

router.post("/register", User.register);

module.exports = router;
