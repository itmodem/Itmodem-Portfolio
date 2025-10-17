Awesome, Rupesh bhai! 🔥 You're now doing a **real-world task with API** — a very common use case in React apps.

Let’s **practice and write** ✅ **4. Fetch API using `useEffect`** step-by-step.

---

## ✅ Goal:

* Fetch user data from `https://jsonplaceholder.typicode.com/users`
* Display the data on screen when the component mounts
* Use `useEffect` for API call

---

## 🧱 Step-by-Step Setup

---

### 📄 `UserFetcher.jsx`

```jsx
import { useState, useEffect } from 'react';

function UserFetcher() {
  const [users, setUsers] = useState([]); // Step 1: Create state

  useEffect(() => {
    // Step 2: Fetch API on mount
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []); // Step 3: Run only once on mount

  return (
    <div>
      <h2>👤 Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserFetcher;
```

---

### 📄 `App.jsx`

```jsx
import UserFetcher from './UserFetcher';

function App() {
  return (
    <div>
      <h1>🧪 API Fetch Practice - useEffect</h1>
      <UserFetcher />
    </div>
  );
}

export default App;
```

---

## ✅ Run the App

```bash
npm run dev
```

✅ You should see a list of users with their name and email fetched from the API!

---

## 🔥 Bonus Challenge (Optional):

🎯 Show a `"Loading..."` message until data is fetched
🎯 Handle and show error if fetch fails

Want this bonus solution too?
Just say: `"Show loading + error handling"` 👇
