const express = require("express");
const { login, signup, getAll } = require("../Controllers/accounts");
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/authValidations");
const router = express.Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

module.exports = router;
