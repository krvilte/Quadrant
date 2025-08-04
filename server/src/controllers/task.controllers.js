import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import TaskModel from "../models/task.model.js";

// @desc Add Task
// @route POST "/api/v1/tasks"
// @access private
export const addTask = asyncHandler(async (req, res) => {
  const { title, description, priority, quadrant, dueDate } = req.body;

  // List of required fields
  const requiredFields = ["title", "priority", "quadrant", "dueDate"];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length) {
    const message = `Missing required field(s): ${missingFields.join(", ")}.`;
    throw new ApiError(400, message);
  }

  // Create task
  const task = await TaskModel.create({
    title,
    description,
    priority,
    quadrant,
    dueDate,
    user: req.user.id,
  });

  if (!task) throw new ApiError(500, "Error while create the task");
  res.status(200).json(new ApiResponse(200, "Task created successfully", task));
});

// @desc Get Tasks
// @route GET "/api/v1/tasks"
// @access private
export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await TaskModel.find({ user: req.user.id }).sort({
    createdAt: -1,
  });

  res.status(200).json(new ApiResponse(200, "Success", tasks));
});

// @desc Get Singlt Task
// @route GET "/api/v1/tasks/:id"
// @access private
export const getSingleTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await TaskModel.findById(id);
  if (!task) throw new ApiError(404, "Task not found");

  res.status(200).json(new ApiResponse(200, "Success", task));
});

// @desc Edit Task
// @route PATCH "/api/v1/tasks/:id"
// @access private
export const editTask = asyncHandler(async (req, res) => {
  res.send("Edit task");
});

// @desc Delete Task
// @route DELETE "/api/v1/tasks/:id"
// @access private
export const deleteTask = asyncHandler(async (req, res) => {
  res.send("Delete task");
});
