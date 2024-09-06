const fs = require('fs');
const tasksFilePath = './tasks.json'; 

function readTasks() {
    const tasksData = fs.readFileSync(tasksFilePath);
    return JSON.parse(tasksData);
}

function writeTasks(tasks) {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

module.exports = { readTasks, writeTasks };
