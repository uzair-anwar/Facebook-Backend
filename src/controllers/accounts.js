const user = require("../database/models/user");
const {
  comparePassword,
  createHashPassword,
} = require("../utils/hashedPassword");
const { createJWT } = require("../utils/createJWT");

exports.signup = async (req, res, next) => {
  try {
    const existingUser = await user.findOne({
      where: { email: req.body.email },
    });

    if (existingUser) {
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
          status: 401,
          message: "Account can not be created",
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

exports.login = async (req, res, next) => {
  try {
    const result = await user.findOne({ where: { email: req.body.email } });
    if (!result) {
      res.send({
        status: 400,
        message: "Account does not exist",
      });
    } else {
      comparePassword(req.body.password, result.password).then((response) => {
        if (response) {
          let token = createJWT(result);
          res.send({
            status: 200,
            accessToken: token,
            result: result,
          });
        } else {
          res.send({
            status: 401,
            accessToken: null,
            message: "Password does not match",
          });
        }
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      result: error.message,
    });
  }
};
