const post = require("../Database/models/post");

exports.createPost = async (req, res, next) => {
  try {
    const newPost = await post.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
    });
    if (newPost) {
      res.send({
        status: 201,
        message: "Post created Successfully",
      });
    } else {
      res.send({
        status: 400,
        message: "Post can not be created",
      });
    }
  } catch (error) {
    res.send({
      status: 401,
      message: error.message,
    });
  }
};

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await post.findAll();
    if (posts.length > 0) {
      res.send({
        status: 200,
        result: posts,
      });
    } else {
      res.send({
        status: 400,
        message: "No post exists",
      });
    }
  } catch (error) {
    res.send({
      status: 401,
      message: error.message,
    });
  }
};
exports.editPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPost = await post.update(
      { title: req.body.title, content: req.body.content },
      { where: { id: id } }
    );
    if (updatedPost[0] === 1) {
      res.send({ status: 200 });
    } else {
      res.send({ status: 400 });
    }
  } catch (error) {
    res.send({
      status: 400,
      message: error.message,
    });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rowDeleted = await post.destroy({
      where: {
        id: id,
      },
    });
    if (rowDeleted === 1) {
      res.send({ status: 200 });
    } else {
      res.send({ status: 400 });
    }
  } catch (error) {
    res.send({
      status: 400,
      message: error.message,
    });
  }
};
