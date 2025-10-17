import React from 'react'
import { useState } from 'react'
const Todo = () => {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "")
      return;
    setTodos([...todos, task]);
    setTask("")
  }
  return (
    <div className='bg-white p-6 rounded shadow w-full max-w-md mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-4 text-center text-blue-500'>Todo App</h1>
      <div className='flex gap-4 m-2' >
        <input type="text"
          placeholder='Enter a task'
          className='flew-grow p-2 border border-gray-200 rounded'
          value={task}
          onChange={(event) => {
            setTask(event.target.value)
          }} />

        <button className='bg-blue-500 py-2 px-4 rounded-md text-center text-white hover:bg-blue-600' onClick={handleAdd}>Add</button>
      </div>

      <ul className='space-y-2'>
        {todos.map((t, index) => (
          <li key={index} className='flex-justify-between item-center bg-gray-200 p-2 rounded'>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
