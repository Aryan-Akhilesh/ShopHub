import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc     login user
//@route    POST /api/users/login
//@access   Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  res.send("Login user");
});

//@desc     Register user
//@route    POST api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      Id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
  res.send("Register User");
});

//@desc     logout user / clear cookie
//@route    POST api/users/logout
//@access   Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });

  res.status(200).json({ message: "Logged out" });
});

//@desc     Get user profile
//@route    GET api/users/profile
//@access   Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get User Profile");
});

//@desc     Update user profile
//@route    PUT api/users/profile
//@access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update User Profile");
});

//@desc     Get users
//@route    GET api/users
//@access   Private/ Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get all users");
});

//@desc     Get user by ID
//@route    GET api/users/:id
//@access   Private/ Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("Get user by ID");
});

//@desc     Delete user
//@route    DELETE api/users/:id
//@access   Private/ Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete user");
});

//@desc     Update user
//@route    PUT api/users/:id
//@access   Private/ Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Delete user");
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
};
