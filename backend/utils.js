const fs = require('fs');

const tasksFilePath = './tasks.json';

const readTasks = () => {
  const tasksData = fs.readFile(tasksFilePath);
  return JSON.parse(tasksData);
};

const writeTasks = (tasks) => {
  fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
};

module.exports = {
  readTasks,
  writeTasks
}