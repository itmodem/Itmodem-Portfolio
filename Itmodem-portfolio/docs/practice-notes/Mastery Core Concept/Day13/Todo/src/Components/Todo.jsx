import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if (task.trim() === "") return; // ignore empty task
        setTodos([...todos, task]);
        setTask(""); // clear input field
    }

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            <ul>
                {todos.map((target, index) => (
                    <li key={index}>
                        <span>{target}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
