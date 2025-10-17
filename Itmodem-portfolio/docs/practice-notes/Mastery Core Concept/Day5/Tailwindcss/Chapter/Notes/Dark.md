Great beginner task! Let’s break it down step by step so you **understand how to do it**, not just copy code.

---

## ✅ Step-by-Step Explanation: How to Enable and Use Dark Mode in Tailwind CSS

---

### 🔧 Step 1: **Enable Dark Mode in `tailwind.config.js`**

Tailwind doesn’t enable dark mode by default. You need to manually tell it **how** to apply dark mode styles.

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // <-- this is the key line
  // other configs...
}
```

✅ This means **dark mode will activate only when a class `dark` is added to the root element (like `<html>` or `<body>`)**.

---

### 🎨 Step 2: **Add Dark Mode Styles with `dark:` Prefix**

Tailwind uses the `dark:` prefix to apply styles **only when dark mode is active**.

```html
<div className="bg-white text-black dark:bg-gray-800 dark:text-white">
  This box will change color in dark mode
</div>
```

* `bg-white text-black`: normal light mode
* `dark:bg-gray-800 dark:text-white`: activated only when `.dark` class is present on a parent element

---

### 💡 Step 3 (Bonus): **Create a Toggle to Switch Between Light and Dark Mode**

You can **manually add or remove the `dark` class** on the `<html>` tag using JavaScript.

```js
// Example toggle function
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
}
```

Add a button in your HTML/JSX:

```jsx
<button onClick={toggleDarkMode} className="px-4 py-2 bg-black text-white">
  Toggle Dark Mode
</button>
```

---

### ✅ Summary Checklist:

* [x] Enable `darkMode: 'class'` in `tailwind.config.js`
* [x] Use `dark:` prefix in classes
* [x] Add/remove the `dark` class to `<html>` using JavaScript toggle

---

Let me know if you want a working example or a beginner project idea using dark mode!
