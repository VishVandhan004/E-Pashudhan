// Libraries from express-validator
const { check, validationResult } = require("express-validator");

exports.validateUserRegistration = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name can't be empty")
    .isString()
    .withMessage("Invalid First Name")
    .isLength({ min: 3, max: 20 })
    .withMessage("First Name must be 3 to 20 characters long."),
  check("email")
    .notEmpty()
    .withMessage("Email can't be empty")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email address"),
  check("houseNo").trim().notEmpty().withMessage("House No. can't be empty."),
  check("district").trim().notEmpty().withMessage("District can't be empty."),
  check("stateAddress").trim().notEmpty().withMessage("State can't be empty."),
  check("postalCode")
    .trim()
    .notEmpty()
    .withMessage("Postal Code can't be empty."),
  check("phoneNo")
    .trim()
    .notEmpty()
    .withMessage("Phone Number can't be empty")
    .isNumeric()
    .withMessage("Phone Number should be numeric")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone Number should be 10 digits long"),

  check("createdUsername")
    .trim()
    .notEmpty()
    .withMessage("You must create a username")
    .isLength({ min: 6, max: 15 })
    .withMessage("Usename must be 6 to 15 characters long"),
  check(
    "createdPassword",
    "Password must be at least 8 characters long, must include both uppercase and lowercase letters, at least one number and one special character"
  )
    .trim()
    .notEmpty()
    .withMessage("Password can't be empty")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 8 to 20 characters long")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
  // check('createdConfirmPassword', "Passwords don't match")
  //     .trim()
  //     .notEmpty().withMessage("Password can't be empty")
  //     .isLength({ min: 8, max: 20 }).withMessage("Passwords don't match")
  //     .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
  //     .custom((value, { req }) => {
  //         if (value !== req.body.password) {
  //             throw new Error("Error. Passwords don't match.");
  //         }

  //         return true;
  //     })
];

exports.userValidation = async (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) {
    return next();
  }
  const error = result[0].msg;
  res.json({
    success: false,
    message: error,
  });
};
