const generateToken = require("../utils/generateTokens");
const User = require("../models/userModel");

const registerController = async (req, res) => {
  const { email, username, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ email, username, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      //   token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};
const authController = (req, res) => {};

const getUserProfile = (req, res) => {};

const UpdateUserProfile = (req, res) => {};

module.exports = {
  registerController,
  authController,
  getUserProfile,
  UpdateUserProfile,
};
