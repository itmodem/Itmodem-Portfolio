Bilkul desi style mein samjhte hain bhai 😄👇

---

## 🤝 Event Handler ko Argument Kaise Pass Karein? (Desi Style)

### 🚩 Situation:

Agar aapko kisi button ya element ke **click hone par koi specific value ya naam pass karna hai** function ke andar — jaise "John", "Ramesh", ya koi `id` — toh seedha function **nahi laga sakte**. Warna woh bina click kiye hi chal jaayega!

---

### ❌ Galat Tarika:

```jsx
<button onClick={greet('John')}>Greet</button> // ❌ Yeh turant chalega, bina click kiye!
```

Yeh toh waise hi hai jaise koi chai mangaye aur aap bina wait kare chai table par rakh do 😅

---

### ✅ Sahi Tarika: Arrow Function ka Jadoo

```jsx
<button onClick={() => greet('John')}>Greet</button>
```

### 🧠 Kya ho raha hai yahaan?

* `() => greet('John')` ek **arrow function** hai.
* React kehta hai: *"Button click hoga tabhi yeh function chalega!"*
* Is arrow function ke andar hum `greet('John')` call kar rahe hain — **lekin tabhi, jab click hoga.**

---

### 🎯 Example Full Code:

```jsx
import React from 'react';

function greet(name) {
  alert(`Hello, ${name}`);
}

function App() {
  return (
    <button onClick={() => greet('John')} className="bg-blue-500 text-white px-4 py-2 rounded">
      Greet
    </button>
  );
}

export default App;
```

---

### 🗣️ Real-Life Analogy:

> Jaise hi koi darwaza **knock** kare (click ho), hum andar se poochte hain:
> “Kaun hai?”
> Aur jawab milta hai: “John!”
>
> Bas waise hi, hum `greet('John')` ko **click hone par** chala rahe hain.

---

Agar aur desi examples chahiye, jaise list click pe id pass karna ya button se naam bhejna — toh bolna bhai, ready hoon 💪
