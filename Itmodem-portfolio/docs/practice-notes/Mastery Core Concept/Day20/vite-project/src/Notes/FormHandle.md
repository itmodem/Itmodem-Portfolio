Great 🚀 chaliye **Step 3: State Handling** karte hain.

Abhi tak aapke form ke inputs sirf UI main the, React ke control main nahin the.
Ab hum **`useState`** use karke inputs ka data React state main store karenge.

---

## 🔹 Step 3: React State with Form Inputs

👉 `App.jsx` update kijiye:

```jsx
import { useState } from "react";

export default function App() {
  // form data ke liye state banate hain
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // input ke change hone par state update karna
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // abhi sirf console par print karenge
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Signup Form
        </h2>

        <div>
          <label className="block font-medium">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium">Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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

---

## 🔍 Ab kya hoga?

1. Aap form main values type karoge → state update hogi.
2. Jab "Submit" button press karoge → console main `Form Data` print hoga.

👉 Browser console (F12 → Console tab) open karke check karo.

---

✅ Ab form ke inputs React ke **control** main aa gaye hain.
**Next step (Step 4)** main hum **basic validation** add karenge (jaise empty field error).

---

Kya aap chahte ho main abhi **Step 4: Basic Validation** ka code du?
