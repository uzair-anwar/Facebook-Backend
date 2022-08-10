const user = require("../Database/models/user");
const {
  comparePassword,
  createHashPassword,
} = require("../utils/hashedPassword");
const { createJWT } = require("../utils/createJWT");

exports.signup = async (req, res, next) => {
  try {
    const duplicateUser = await user.findOne({
      where: { email: req.body.email },
    });
    if (duplicateUser) {
      res.send({ status: 409, message: "Account already exists" });
    } else {
      let hashedPassword = createHashPassword(req.body.password);
      const newUser = await user.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      if (newUser) {
        res.send({
          status: 201,
          message: "Account created Successfully",
        });
      } else {
        res.send({
          status: 400,
          message: "Account can not be created",
        });
      }
    }
  } catch (error) {
    res.send({
      status: 401,
      result: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const tempUser = await user.findOne({ where: { email: req.body.email } });
    if (!tempUser) {
      res.send({
        status: 400,
        message: "Account does not exist",
      });
    } else {
      if (comparePassword(req.body.password, tempUser.password)) {
        let token = createJWT(tempUser);
        res.send({
          status: 200,
          accessToken: token,
          result: tempUser,
        });
      } else {
        res.send({
          status: 401,
          accessToken: null,
          message: "Password does not match",
        });
      }
    }
  } catch (error) {
    res.send({
      status: 400,
      result: error.message,
    });
  }
};
