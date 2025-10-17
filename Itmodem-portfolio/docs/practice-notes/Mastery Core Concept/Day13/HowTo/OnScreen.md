Awesome! 🎯 You’ve now connected **state + logic** — which is the heart of React. Great progress!

---

## ✅ STEP 9: Show the Tasks on the Screen

Now let’s:

1. Save all added tasks in a list
2. Show them one by one below the input field

---

### ✏️ Update your `Todo.jsx` like this:

```jsx
import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]); // 🗃️ To store all tasks

  const handleAdd = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]); // ➕ Add task to array
    setTask(""); // Clear input
  };

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Todo App
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-200 p-2 rounded"
          >
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
```

---

### 🔍 What’s new:

| Feature       | What it does                                |
| ------------- | ------------------------------------------- |
| `todos` state | Stores all tasks in an array                |
| `.map()`      | Loops through tasks and displays them       |
| `key={index}` | React needs a unique key for each list item |

---

### 🧪 Test it:

* Type: “Buy Milk” → Click Add ✅
* Type: “Learn React” → Click Add ✅
  ➡️ You should now see a list of tasks added below the input.

---

✅ Let me know once your tasks show up. Then we’ll add **Delete functionality** 🗑️.
