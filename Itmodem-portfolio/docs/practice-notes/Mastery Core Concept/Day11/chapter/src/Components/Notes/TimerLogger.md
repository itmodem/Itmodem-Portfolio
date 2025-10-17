Awesome! You're now ready to learn one of the **most important real-world patterns** in React:
**Using `useEffect` with `setInterval` and cleanup** — especially useful for timers, animations, polling, etc.

---

## ✅ 3. Timer Practice – `setInterval` + Cleanup on Unmount

---

### 🧪 Goal:

* Start a timer when the component mounts
* Log `"Tick..."` every second
* Stop (clean up) the timer when the component unmounts

---

## 🧱 Step-by-Step Implementation

---

### 📄 `TimerLogger.jsx`

```jsx
import { useEffect } from 'react';

function TimerLogger() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Tick...");
    }, 1000);

    // Cleanup when component unmounts
    return () => {
      console.log("Timer cleared");
      clearInterval(timer);
    };
  }, []); // Empty dependency = run only once

  return (
    <div>
      <h2>⏱️ Timer Running... (Check Console)</h2>
    </div>
  );
}

export default TimerLogger;
```

---

### 📄 `App.jsx`

To see the **mount → unmount effect**, add toggle logic:

```jsx
import { useState } from 'react';
import TimerLogger from './TimerLogger';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <h1>🧪 useEffect - Timer with Cleanup</h1>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? '🛑 Stop Timer' : '▶️ Start Timer'}
      </button>

      {showTimer && <TimerLogger />}
    </div>
  );
}

export default App;
```

---

## ✅ Result:

* When component **mounts**, it logs `"Tick..."` every second.
* When you **click Stop Timer**, it **unmounts the component**, and you'll see:

  ```
  Timer cleared
  ```

---

## 💪 Confidence Booster Task:

🎯 Modify it to show the number of seconds passed on screen:
(Example: "⏱️ Timer Running: 5 seconds")

Want the solution or just a hint for that?
Say: `"Show seconds counter"` or `"Give hint only"` 👇
