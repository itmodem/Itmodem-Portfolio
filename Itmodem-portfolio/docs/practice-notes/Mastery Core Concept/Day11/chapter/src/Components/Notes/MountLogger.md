Great, let’s do ✅ **Basic Practice – useEffect on Mount** step-by-step together.
Here’s **how you can write and practice it** in React from scratch:

---

## 🔧 Step-by-Step Setup

### 🗂️ Folder Structure (Vite or CRA works)

If you already have a React app using Vite or CRA, go ahead. Otherwise:

```bash
npm create vite@latest useeffect-practice
cd useeffect-practice
npm install
npm run dev
```

---

## ✅ 1. Create a New Component

### 📄 `src/MountLogger.jsx`

```jsx
import { useEffect } from 'react';

function MountLogger() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <h2>👋 Hello from MountLogger Component!</h2>
    </div>
  );
}

export default MountLogger;
```

---

## ✅ 2. Use This Component in `App.jsx`

### 📄 `src/App.jsx`

```jsx
import MountLogger from './MountLogger';

function App() {
  return (
    <div>
      <h1>🧪 useEffect Practice</h1>
      <MountLogger />
    </div>
  );
}

export default App;
```

---

## ✅ 3. Run and Observe

* Start your dev server:

  ```bash
  npm run dev
  ```
* Open browser console (Right click → Inspect → Console).
* You should see:

  ```
  Component mounted
  ```

  only once (on first render).

---

## ✅ 4. Confidence Task for You 🎯

Try modifying the component:

🔁 Add a button: "Hide Component"
🔁 When clicked, hide `<MountLogger />`
🔁 Re-add it again to see that `"Component mounted"` logs again.

Would you like me to guide that task too?
Say: `"Give me hide/show task code"` 👇
