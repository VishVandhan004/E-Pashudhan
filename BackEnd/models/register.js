const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
// schema for registration 
const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  houseNo: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  stateAddress: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  createdUsername: {
    type: String,
    required: true,
  },
  createdPassword: {
    type: String,
    required: true,
  },
});
// hashing
registrationSchema.pre("save", function (next) {
  if (this.isModified("createdPassword")) {
    bcrypt.hash(this.createdPassword, 8, (err, hash) => {
      if (err) return next(err);
      this.createdPassword = hash;
      next();
    });
  }
});
// checking if there already exists any username 
registrationSchema.statics.isThisUsernameInuse = async function (createdUsername) {
  if (!createdUsername) throw new Error("Invalid Username");
  try {
    const user = await this.findOne({ createdUsername });
    if (user) return false;

    return true;
  } catch (error) {
    console.log("error inside isThisUsernameInuse method", error.message);
    return false;
  }
};
// comparing the password
registrationSchema.methods.comparePassword = async function (password) {
  if (!password) {
    throw new Error("Error. Password not specified");
  }

  try {
    const result = await bcrypt.compare(password, this.createdPassword);
    return result;
  } catch (err) {
    console.log(`Error >>${err}`);
  }
}

module.exports = mongoose.model("RegisteredUser", registrationSchema);

