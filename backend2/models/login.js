const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const loginSchema = new mongoose.Schema({
  loginUsername: {
    type: String,
    required: true,
  },
  loginPassword: {
    type: String,
    required: true,
  },
});
// hashing
loginSchema.pre("save", function (next) {
  if (this.isModified("loginPassword")) {
    bcrypt.hash(this.loginPassword, 8, (err, hash) => {
      if (err) return next(err);
      this.loginPassword = hash;
      next();
    });
  }
});

// User checking
loginSchema.statics.userExists = async function (loginUsername) {
  //Didn't work when the async function was an arrow function (Why??)     [Arrow functions can't use 'this' keyword]
  if (!loginUsername) {
    throw new Error("Error. No username provided.");
  }

  try {
    const user = await this.findOne({ loginUsername });
    if (user) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(`Error in existingUser function. >> ${err}`);

    return true;
  }
};

module.exports = mongoose.model("loginUser", loginSchema);

