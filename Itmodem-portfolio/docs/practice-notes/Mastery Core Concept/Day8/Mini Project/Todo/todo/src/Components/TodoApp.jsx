// src/TodoApp.jsx

import React, { useState } from 'react';

const TodoApp = () => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  // Add new task
  const handleAddTask = () => {
    if (taskText.trim() === '') return;

    const newTask = {
      id: Date.now(), // Unique ID
      text: taskText,
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">📝 Todo App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={taskText}
          onChange={handleInputChange}
          placeholder="Enter your task"
          className="flex-grow border p-2 rounded-l"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{task.text}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
