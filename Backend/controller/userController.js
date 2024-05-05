const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(400).send("User does not exist");
  }
  const isPasswordMatchingFromDB = await bcrypt.compare(
    password,
    user.password
  );
  if (isPasswordMatchingFromDB) {
    const token = jwt.sign({ userId: user._id }, "randomestring");
    return res.status(200).json({
      user: user,
      token: token,
    });
  }
  return res.status(401).send("Incorrect login details");
};

const signupUser = async (req, res) => {
  const { email, password, name } = req.body;

  const emailExists = await UserModel.findOne({ email: email });
  if (emailExists) {
    return res.status(400).body("user Already Exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // res.send("signuped");
  const newUser = new UserModel({
    name: name,
    email: email,
    password: hashPassword,
  });

  const saveUser = newUser.save();

  const token = jwt.sign({ userId: saveUser._id }, "randomsecreat");
  return res.status(200).json({
    user: newUser,
    token: token,
  });
};

module.exports = { loginUser, signupUser };
