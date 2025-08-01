import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
} from "../controllers/user.controllers.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";

const router = Router();

// Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyToken, logoutUser);
router.route("/current").get(verifyToken, currentUser);
export default router;
