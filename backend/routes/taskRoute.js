const express = require("express");

const Task = require("../models/taskModel");

const router = express.Router();
const taskController = require("../controllers/taskController");

//Get the home page

//get all Tasks
router.get("/", taskController.getTasks);

//get 1 specific task
router.get("/:id", taskController.getTask);

//post a task
router.post("/", taskController.createTask);

//Delete task
router.delete("/:id", taskController.deleteTask);

//update task
router.put("/:id", taskController.updateTask);

module.exports = router;
