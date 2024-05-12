const express = require("express"),
    Task = require("../models/taskModel"),
    { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController"),
    router = express.Router()

router.route("/")
    .get(getTasks)              // Get / Read Tasks
    .post(createTask)           // Create a Task
router.route("/:id")
    .get(getTask)               //  Get a single Task
    .delete(deleteTask)         //  Delete a single Task
    .put(updateTask)            //  Update Task

module.exports = router