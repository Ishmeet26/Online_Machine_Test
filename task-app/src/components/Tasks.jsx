import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskComp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(err => console.error(err));
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      axios.post('http://localhost:5000/tasks', { title: newTask, completed: false })
        .then(response => setTasks([...tasks, response.data]))
        .catch(err => console.error(err));
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskComp;
