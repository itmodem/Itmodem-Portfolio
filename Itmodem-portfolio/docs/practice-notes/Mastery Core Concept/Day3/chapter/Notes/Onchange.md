Bilkul bhai! 👇
Yeh raha ek **onChange event** ka **desi-style exercise** jo aapko React ke input handling mein confident banayega 💪

---

## 📚 **Exercise: "Live Typing" – Jo Likho, Wahi Dikhe!**

### 🎯 Goal:

Jab aap input field mein kuch bhi likho, **turant screen par wahi text dikhna chahiye**.

---

### 🤔 Real Life Example:

> Jaise aap WhatsApp pe kisi ko message likhte ho aur screen par turant dikhta hai — bas waisa hi banana hai! 😄

---

### 🛠️ Starter Code:

```jsx
import React, { useState } from 'react';

const TypingPractice = (event) => {
  const [text, setText] = useState(''); // 🔡 State to hold user input

  const handleChange = (event) => {
    // 🧠 Yahan likhna hai: input value ko state mein set karo
    setText(event.target.value);
  };

  return (
    <div className='p-4'>
      <input 
        type="text" 
        placeholder="Yahan kuch likho..." 
        onChange={handleChange} 
        className='border border-gray-400 px-3 py-2 rounded'
      />

      <p className='mt-4 text-xl font-semibold'>
        Aapne likha: {/* 🔁 Yahan dikhana hai jo user ne likha */}
      </p>
    </div>
  );
};

export default TypingPractice;
```

---

### 🧠 Aapka Task:

1. `handleChange` function ko complete karo:

   * Jo user type kare usse `setText()` mein daalo.
   * `event.target.value` use karo.

2. `{text}` ko `<p>` tag ke andar render karo.

---

### ✅ Expected Output:

> Aap input box mein likhoge:
>
> **"Mujhe React seekhna hai"**
>
> Toh niche dikhna chahiye:
> **"Aapne likha: Mujhe React seekhna hai"**

---

Karke bhejo, main turant check karke feedback dunga ✅
Aur agar chaho toh next level task bhi ready hai 🔥
