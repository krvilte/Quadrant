import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/apiError";
import ApiResponse from "../utils/apiResponse";
import TaskModel from "../models/task.model";

// @desc Add Task
// @route POST "/api/v1/tasks"
// @access private
export const addTask = asyncHandler(async (req, res) => {
  res.send("Add task");
});

// @desc Get Tasks
// @route GET "/api/v1/tasks"
// @access private
export const getTasks = asyncHandler(async (req, res) => {
  res.send("Get tasks");
});

// @desc Get Singlt Task
// @route GET "/api/v1/tasks/:id"
// @access private
export const getSingleTasks = asyncHandler(async (req, res) => {
  res.send("Get single task");
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
