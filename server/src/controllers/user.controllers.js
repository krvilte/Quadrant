import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import User from "../models/user.model.js";

// @desc Register User
// @route POST "/api/v1/users/register"
// @access public
export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, username, email, password } = req.body;

  if (!fullName && !username && !email && !password)
    throw new ApiError(400, "All fields are required");

  // Check existing user
  const existingUser = await User.findOne({ $or: [{ username, email }] });
  if (existingUser)
    throw new ApiError(409, "User with email or password already exists");

  // Create user
  const user = await User.create({
    fullName,
    email,
    password,
    username: username.toLowerCase(),
  });

  // Find registered user
  const registeredUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // Validate registered user
  if (!registeredUser) throw new ApiError(500, "Error while registering user");

  // Success response
  return res
    .status(201)
    .json(new ApiResponse(200, "User registered successfully", registeredUser));
});

// @desc Login User
// @route POST "/api/v1/users/login"
// @access public
export const loginUser = (req, res) => {
  res.send("Login user");
};

// @desc Logout User
// @route POST "/api/v1/users/logout"
// @access public
export const logoutUser = (req, res) => {
  res.send("Logout user");
};

// @desc Current User
// @route POST "/api/v1/users/current"
// @access public
export const currentUser = (req, res) => {
  res.send("Current user");
};
