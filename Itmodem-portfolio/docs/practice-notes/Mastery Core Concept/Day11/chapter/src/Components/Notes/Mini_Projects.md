Shandaar soch, Rupesh bhai! 💪
Practice + Confidence = 🔑 Success in React real-world development.

---

## 🎯 **Goal**: Master `useEffect` with Real-Life Practice

Here’s your **step-by-step practice plan** (with increasing difficulty):

---

### ✅ **1. Basic Practice – useEffect on Mount**

**🧪 Task:** Create a component that logs "Component mounted" only once.

```jsx
// Hint:
useEffect(() => {
  console.log("Component mounted");
}, []);
```

---

### ✅ **2. Dependency Practice – React to State Change**

**🧪 Task:** Create a counter. Whenever the counter changes, log `Counter updated`.

```jsx
// Hint:
useEffect(() => {
  console.log("Counter updated:", count);
}, [count]);
```

---

### ✅ **3. Timer Practice – Cleanup Example**

**🧪 Task:** Start a timer (`setInterval`) when the component mounts, and clear it when unmounted.

```jsx
// Hint:
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick...");
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

---

### ✅ **4. Real-World Practice – Fetch API**

**🧪 Task:** Fetch user data from this API and display it:
`https://jsonplaceholder.typicode.com/users`

```jsx
// Hint:
useEffect(() => {
  fetch("API")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
```

---

### ✅ **5. Dependency Array Challenge**

**🧪 Task:** Create a search box. When user types something, show that input below after a delay.

```jsx
// Hint:
useEffect(() => {
  const timeout = setTimeout(() => {
    setResult(input);
  }, 1000);

  return () => clearTimeout(timeout);
}, [input]);
```

---

## 🧠 Bonus Confidence Boost Challenge

**🔥 Build This Mini Project:**
➡️ A “Live GitHub Profile Fetcher”

**Steps:**

1. Input GitHub username.
2. On submit, fetch profile data using:
   `https://api.github.com/users/{username}`
3. Show:

   * Name
   * Avatar
   * Followers
   * Public Repos

Want me to create the full task structure or break it step-by-step with hints?

---

Just reply with:

* `"Show full mini project"` — to get all steps + starter code
* `"Break into steps"` — if you want to learn by doing one part at a time

Ready to build like a pro? 💻🔥
