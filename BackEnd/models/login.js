const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: Buffer,
});
// Hashing
LoginSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.hash(this.password, 8, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  }
});

LoginSchema.statics.isThisUsernameInuse = async function (username) {
  if (!username) throw new Error("Invalid Username");
  try {
    const user = await this.findOne({ username });
    if (user) return false;

    return true;
  } catch (error) {
    console.log("error inside isThisUsernameInuse method", error.message);
    return false;
  }
};
//LoginSchema.methods.isThisUsernameInuse
module.exports = mongoose.model("Login", LoginSchema);
