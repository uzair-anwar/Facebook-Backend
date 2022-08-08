const express = require("express");
const { login, signup, getAll } = require("../Controllers/accounts");
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/authValidations");
const router = express.Router();
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

module.exports = router;
