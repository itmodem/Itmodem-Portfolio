Perfect! You're now practicing the **React to State Change** scenario — a super useful useEffect pattern.
Let’s walk through it **step-by-step** so you can confidently write and run this on your own.

---

## ✅ 2. Dependency Practice – Log on State Change

---

### 🧪 Goal:

* Create a **counter** using `useState`
* Use `useEffect` to log `Counter updated:` every time the counter changes

---

## 🧱 Step-by-Step Implementation

---

### 📄 `CounterLogger.jsx`

```jsx
import { useState, useEffect } from 'react';

function CounterLogger() {
  const [count, setCount] = useState(0); // Step 1: Create state

  // Step 2: useEffect runs whenever 'count' changes
  useEffect(() => {
    console.log("Counter updated:", count);
  }, [count]); // Step 3: Dependency is count

  return (
    <div>
      <h2>🧮 Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
    </div>
  );
}

export default CounterLogger;
```

---

### 📄 `App.jsx`

```jsx
import CounterLogger from './CounterLogger';

function App() {
  return (
    <div>
      <h1>🧪 useEffect - State Change Practice</h1>
      <CounterLogger />
    </div>
  );
}

export default App;
```

---

## 🚀 Run the App

```bash
npm run dev
```

1. Click on **Increment** or **Decrement**
2. Open your **console**
3. You will see logs like:

   ```
   Counter updated: 1
   Counter updated: 2
   ```

---

## ✅ Bonus Confidence Task

🎯 Add a **Reset** button
🎯 Log `Counter reset to 0` when you click it
🎯 Still keep the `useEffect` working with `[count]`

Would you like a guided solution for the **Reset Button Challenge** too?
Say: `"Show reset button solution"` 👇
