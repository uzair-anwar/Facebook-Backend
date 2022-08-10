const express = require("express");
const router = express.Router();
const {
  createPost,
  editPost,
  deletePost,
  getAllPosts,
} = require("../Controllers/posts");
const { verifyToken } = require("../middlewares/authVerifyJWT");
const { postValidation } = require("../middlewares/postValidations");
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/create", [verifyToken, postValidation], createPost);
router.put("/edit/:id", [verifyToken, postValidation], editPost);
router.delete("/:id", verifyToken, deletePost);
router.get("/show", verifyToken, getAllPosts);

module.exports = router;
