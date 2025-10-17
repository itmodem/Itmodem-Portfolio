Fantastic! 🥳 You’ve successfully built the **input section** using a separate `Todo.jsx` component. Now let’s move to the next logical step:

---

## ✅ STEP 8: Add Functionality to Input Field

Goal:

* Store what the user types inside a state variable
* Console log the task when the **Add** button is clicked

---

### ✏️ Update your `Todo.jsx` like this:

```jsx
import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState(""); // 🧠 State for input

  const handleAdd = () => {
    console.log("New Task:", task); // 🖨️ Print in console
    setTask(""); // Clear input after clicking Add
  };

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Todo App
      </h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)} // 📝 Update state
          className="flex-grow p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Todo;
```

---

### 🔍 What’s new here?

| Line           | Meaning                         |
| -------------- | ------------------------------- |
| `useState("")` | Creates a state variable `task` |
| `onChange`     | Updates `task` as user types    |
| `onClick`      | Logs the task and clears input  |

---

✅ Try this:

* Type a task in the input
* Click **Add**
* Open browser console (Right click → Inspect → Console tab)
* You’ll see: `New Task: your task`

---

Let me know once this is working — then we’ll move to **saving and displaying tasks on screen**.
