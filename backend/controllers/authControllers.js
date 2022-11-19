const User = require("../models/UserModel");
const errorHandler = require("../middleware/ErrorHandler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// @desc   Register a user
// @route  POST /api/signup
// @access Public
const signup_user = async (req, res) => {
  const { password, username } = req.body;
  if (!password || !username) {
    return res.status(422).send({ error: "Empty input fields" });
  }
  const user_exists = await User.findOne({ username });
  if (user_exists) {
    return res.status(422).send({ error: "User already exists" });
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({ password: hashedPassword, username });
    res.status(201).json({
      status: 200,
      message: "User created",
      token: generateToken(user._id),
    });
    return;
  } catch (error) {
    errorHandler(error, req, res);
  }
};

// @desc   login a user
// @route  POST /api/login
// @access Public
const login_user = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).send({ error: "Empty input fields" });
  }
  res.status(200).json({
    status: 200,
    message: "User logged in",
  });
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  signup_user,
  login_user,
};
