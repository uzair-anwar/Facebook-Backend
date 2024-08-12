const post = require("../database/models/post");

exports.userAutherization = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.body.userId;
  const result = await post.findOne({ where: { id: id, userId: userId } });
  console.log(result);
  if (result === null) {
    return res.send({ status: 400, message: "Unautherized user" });
  } else {
    next();
  }
};
