const User = require("../models/login");

exports.loginUser = async (req, res) => {
  const {
    loginUsername,
    loginPassword
  } = req.body;

  const userExists = await User.userExists(loginUsername);
  if (userExists) {
    return res.json({
      success: false,
      message: "User already exists. Try another one.",
    });
  }

  const user = await User({
    loginUsername,
    loginPassword
  });

  await user.save((err) => {
    if (err) {
      console.error(`Error saving user to the database. >> ${err}`); // NOTE: If a duplication error occurs, drop the collection and try again
    } else {
      console.log("User saved to database!");
    }
  });

  res.json(user);
};