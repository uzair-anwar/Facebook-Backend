const express = require("express");
const { login, signup, logout } = require("../controllers/accounts");
const {
  loginValidation,
  nameValidation,
  validate,
} = require("../middlewares/authValidations");
const { verifyToken } = require("../middlewares/authVerifyJWT");
const router = express.Router();
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/login", loginValidation(), validate, login);
router.post("/signup", nameValidation(), loginValidation(), validate, signup);
router.get("/logout", verifyToken, logout);

module.exports = router;
