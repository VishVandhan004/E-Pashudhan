const express = require("express");
const app = express();
const LoginUser = require("./models/login");
const RegisterUser = require("./models/register");
var port = 3001;
require("dotenv").config();
require("./models/db");
const name = "ethnic";
const phNo = "6966969696";
const state = "Telangana";
const district = "jdfs";
const houseNo = "svd";
const Nusername = "et69";
const Npassword = "007";
app.post("/create-user", async (req, res) => {
  const isNewUser = await LoginUser.isThisUsernameInuse(Nusername);
  if (!isNewUser)
    return res.json({
      success: false,
      message: "This Username is already in Use, Try again",
    });
  const user = await LoginUser({
    username: Nusername,
    password: Npassword,
  });
  // user.isThisUsernameInuse();
  await user.save();
  res.json(user);
});
app.post("/register-user", async (req, res) => {
  const isNewUser = await RegisterUser.isThisUsernameInuse(Nusername);
  if (!isNewUser)
    return res.json({
      success: false,
      message: "This Username is already in Use, Try again",
    });
  const register = await RegisterUser({
    Name: name,
    PhoneNumber: phNo,
    State: state,
    District: district,
    HouseNo: houseNo,
    username: Nusername,
    password: Npassword,
  });
  // user.isThisUsernameInuse();
  await register.save();
  res.json(register);
});
app.get("/", (req, res) => {
  res.send('welocome to backend!');
});

app.listen(port, () => {
  console.log("listening to port");
});
