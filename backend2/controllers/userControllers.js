const User = require("../models/register");

exports.createUser = async (req, res) => {
const {
    name,
    email,
    houseNo,
    district,
    stateAddress,
    postalCode,
    phoneNo,
    role,
    createdUsername,
    createdPassword
  } = req.body;

  const userExists = await User.isThisUsernameInuse(createdUsername);
  if (!userExists) {
    return res.json({
      success: false,
      message: "User already exists. Try logging in instead.",
    });
  }

  const user = await User({
    name,
    email,
    houseNo,
    district,
    stateAddress,
    postalCode,
    phoneNo,
    role,
    createdUsername,
    createdPassword
  });

  await user.save((err) => {
    if (err) {
      console.error(`Error saving user to the database. >> ${err}`); // NOTE: If a duplication error occurs, drop the collection and try again
    } else {
      console.log("User saved to database!");
    }
  });

  res.json({
    success: true,
    message: "Registered successfully"
  });
};

exports.loginUser = async (req, res) => {
  const {
    loginUsername,
    loginPassword
  } = req.body;

  const user = await User.findOne({createdUsername: loginUsername});
  if (!user) {
    return res.json({
      success: false,
      message: "User not found with specified username"
    });
  }

  const checkPassword = await user.comparePassword(loginPassword);
  if (!checkPassword) {
    return res.json({
      success: false,
      message: "Invalid Password"
    });
  }
  
  res.json({
    success: true,
    message: "Login successful"
  });
};


