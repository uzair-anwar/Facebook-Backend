const express = require("express");
const { login, signup, logout } = require("../controllers/accounts");
const {
  loginValidation,
  nameValidation,
  validate,
} = require("../middlewares/authValidations");
const router = express.Router();

router.post("/login", loginValidation(), validate, login);
router.post("/signup", nameValidation(), loginValidation(), validate, signup);

module.exports = router;
