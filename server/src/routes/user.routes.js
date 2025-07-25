import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
} from "../controllers/user.controllers.js";

const router = Router();

// Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/current").post(currentUser);
export default router;
