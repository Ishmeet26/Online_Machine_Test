const express= require('express');
const {getTasks , getTasksById ,createTask , updateTasks , deleteTask} = require('../controller/tasks')
const router = express.Router();


router.get('/tasks' , getTasks);
router.get('/tasks/:id' , getTasksById);
router.post('/tasks' , createTask);
router.put('/tasks/:id' , updateTasks);
router.delete('/tasks/:id', deleteTask)

module.exports = router
