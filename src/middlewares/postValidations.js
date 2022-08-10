const { body, validationResult } = require("express-validator");

exports.postValidation = [
  body("title").notEmpty().withMessage("Title can not be empty").trim(),
  body("content")
    .notEmpty()
    .withMessage("Content can not be empty")
    .isLength({ min: 20 })
    .withMessage("Content contains atleat 20 character")
    .trim(),
  function (req, res, next) {
    let errorValidation = validationResult(req);
    if (errorValidation.array().length > 0) {
      res.send({
        status: 400,
        error: errorValidation.array(),
      });
    } else {
      next();
    }
  },
];
