const {readTasks ,writeTasks } = require('../utils')

// Get all tasks
function getTasks(req, res) {
  const tasks = readTasks();
  res.json(tasks);
};

// Get task by ID
function getTasksById(req, res) {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }

};

// Create a new task
function createTask(req, res) {
  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, // Auto-increment ID
    title: req.body.title,
    completed: req.body.completed || false
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
};

// Update an existing task by ID
function updateTasks(req, res) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex !== -1) {
    const updatedTask = {
      ...tasks[taskIndex],
      title: req.body.title || tasks[taskIndex].title,
      completed: req.body.completed !== undefined ? req.body.completed : tasks[taskIndex].completed
    };
    tasks[taskIndex] = updatedTask;
    writeTasks(tasks);
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

// Delete a task by ID
function deleteTask(req, res) {
  const tasks = readTasks();
  const filteredTasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  if (filteredTasks.length !== tasks.length) {
    writeTasks(filteredTasks);
    res.json({ message: 'Task deleted' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }

};


module.exports = {
  getTasks,
  getTasksById,
  createTask,
  updateTasks,
  deleteTask
}