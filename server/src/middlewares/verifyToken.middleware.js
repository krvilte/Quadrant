import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const verifyToken = asyncHandler(async (req, _, next) => {
  try {
    // Verify access token
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.split("Bearer ")[1];

    if (!token) throw new ApiError(401, "Unauthorized request");
    const decryptToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Verify user
    const user = await User.findById(decryptToken.id).select("-password");
    if (!user) throw new ApiError(401, "Invalid user request");
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid user request", error);
  }
});

export default verifyToken;
