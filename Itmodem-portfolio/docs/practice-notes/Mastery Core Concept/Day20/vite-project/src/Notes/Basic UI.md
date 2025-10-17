Samajh gaya 👍
Aap beginner ho, isliye hum is **form validation project** ko chhote–chhote step main divide karenge. Har step main aapko code bhi milta rahega jisse aap copy–paste karke test kar sako.

---

## 🔹 Step 1: Project Setup (Vite + React + TailwindCSS)

1. Terminal open karo aur likho:

   ```bash
   npm create vite@latest form-validation --template react
   cd form-validation
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
2. `tailwind.config.js` main add karo:

   ```js
   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
   ```
3. `src/index.css` main likho:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

✅ Abhi tak sirf project setup hai. Browser main default Vite React app run hona chahiye (`npm run dev`).

---

## 🔹 Step 2: Basic Form UI

Abhi validation nahin karenge, sirf form banayenge.

👉 `App.jsx` replace karo:

```jsx
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Signup Form
        </h2>

        <div>
          <label className="block font-medium">Full Name *</label>
          <input
            type="text"
            name="name"
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium">Email *</label>
          <input
            type="email"
            name="email"
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium">Password *</label>
          <input
            type="password"
            name="password"
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
```

✅ Ab aapke pass ek clean form UI ready ho gaya hai, bina validation ke.

---

## 🔹 Step 3: State Handle Karna (React `useState`)

* Ab input ke values ko React state ke andar store karenge.

👉 Iske baad aapko samajh aayega ki user jo type karta hai, wo kaha save hota hai.

---

Kya aap chahte ho main **Step 3 ka code abhi de du** (state handling), ya pehle aap **Step 1 & Step 2 run karke confirm** karna chahte ho ki sab sahi chal raha hai?
