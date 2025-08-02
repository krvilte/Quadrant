import { Router } from "express";
import {
  addTask,
  getTasks,
  getSingleTask,
  editTask,
  deleteTask,
} from "../controllers/task.controllers.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";

const router = Router();

// Protected Routes
router.use(verifyToken);

// Routes
router.route("/").post(addTask).get(getTasks);
router.route("/:id").get(getSingleTask).patch(editTask).delete(deleteTask);

export default router;
