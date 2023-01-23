const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');

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
  // role: {
  //   type: String,
  //   required: true,
  // },
  createdUsername: {
    type: String,
    required: true,
  },
  createdPassword: {
    type: String,
    required: true,
  },
});

// User checking
registrationSchema.statics.userExists = async function (createdUsername) {
  //Didn't work when the async function was an arrow function (Why??)     [Arrow functions can't use 'this' keyword]
  if (!createdUsername) {
    throw new Error("Error. No username provided.");
  }

  try {
    const user = await this.findOne({ createdUsername });
    if (user) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(`Error in existingUser function. >> ${err}`);

    return true;
  }
};

module.exports = mongoose.model("RegisteredUser", registrationSchema);

