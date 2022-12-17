const Task = require("../models/taskModel");

// Create task
const createTask = async (req, res) => {
  try {
    const task = await new Task({

      name: req.body.taskName,
      completed: req.body.completed,
    });
    res.status(200).json(task);
    task.save();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get single task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`Task with id ${id} can't be found!`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Delete Task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskToDelete = await Task.findByIdAndDelete(id);

    if (!taskToDelete) {
      return res
        .status(404)
        .json(`Can't delete task. Task with id ${id} can't be found!`);
    }
    res.status(200).json(`Task deleted`);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//update task

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask={
     name:req.body.taskName,
     completed:req.body.completed
    }
    const taskToUpdate = await Task.findByIdAndUpdate({ _id: id }, updatedTask, {
      new: true,
      runValidators: true,
    });

    if (!taskToUpdate) {
      return res
        .status(404)
        .json(`Can't update task. Task with id ${id} can't be found!`);
    }
    res.status(200).json(taskToUpdate);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
