const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');
const taskControllers = require('../controllers/tasks');
const accessHomeControllers = require('../controllers/home');

router.post('/tasks', taskControllers.creatTask);
router.get('/tasks', taskControllers.getTask);
router.get('/tasks/:id', taskControllers.getTaskByIdd);
router.patch('/tasks/:id', taskControllers.patchTask);
router.delete('/tasks/:id', taskControllers.deleteTask);


module.exports = router;