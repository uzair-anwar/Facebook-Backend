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
        status: 204,
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
    const [updatedPost] = await post.update(
      { title: req.body.title, content: req.body.content },
      { where: { id: id, userId: req.body.userId } }
    );

    if (updatedPost > 0) {
      res.send({
        status: 200,
        message: "Post updated successfully",
      });
    } else {
      res.send({
        status: 400,
        message: "you can not update this Post",
      });
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
    const deletedPosts = await post.destroy({
      where: {
        id: id,
        userId: req.body.userId,
      },
    });

    if (deletedPosts > 0) {
      res.send({ status: 200, message: "Post successfully deleted" });
    } else {
      res.send({ status: 400, message: "You can not delete this post" });
    }
  } catch (error) {
    res.send({
      status: 400,
      message: error.message,
    });
  }
};
