const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  State: {
    type: String,
    required: true,
    unique: false,
  },
  District: {
    type: String,
    required: true,
  },
  HouseNo: {
    type: String,
    required: true,
  },
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
RegisterSchema.statics.isThisUsernameInuse = async function (username) {
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
// userSchema.methods.isThisUsernameInuse
module.exports = mongoose.model("Register", RegisterSchema);
