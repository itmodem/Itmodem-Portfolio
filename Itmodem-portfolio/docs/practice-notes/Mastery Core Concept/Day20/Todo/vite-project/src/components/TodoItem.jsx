import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between p-2 border rounded-lg">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer flex-grow ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-2 text-red-500 hover:text-red-700"
      >
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
