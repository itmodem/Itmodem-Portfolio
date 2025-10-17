import React, { useState } from 'react'

const Todo = () => {
    const [task,setTask] = useState("");
    const [todos,setTodos] = useState([]);
    const handleAdd = () => {
        if(task.trim() === "") return;
        setTodos([...todos,task])
        setTask("");
    }
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text"
        placeholder='Enter a task' 
        value={task}
        onChange={(e) => setTask (e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
    {todos.map((t,index) => (
        <li key={index}>
            <span>{t}</span>
        </li>
    ))}
      </ul>
    </div>
  )
}

export default Todo
