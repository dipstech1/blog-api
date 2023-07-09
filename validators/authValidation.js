const {body} = require('express-validator');

const authCommonValidation = [
    body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password should be string")
    .isLength({ min: 5 })
    .withMessage("Password should be at least 5 characters"),
  body("email")
      .exists().withMessage("Email is required")
      .isEmail().withMessage("Provide valid email"),
]


const registerValidation = [
    ...authCommonValidation,
    body("firstname")
      .exists({ checkFalsy: true })
      .withMessage("Firstname is required")
      .isString()
      .withMessage("Firstname should be string"),
    body("lastname")
        .exists({checkFalsy: true})
        .withMessage("Lastname is required")
        .isString()
        .withMessage("Last name should be string"),
    body("phoneNumber")
      .optional()
      .isString()
      .withMessage("phone number should be string")
      .custom((value) => {
        if (value.length !== 10) {
          return Promise.reject("Phone number should be 10 digits");
        } else {
          return true;
        }
      }),
  ];

  const loginValidation = [
    ...authCommonValidation
  ]

  module.exports = {
    registerValidation,
    loginValidation
  }