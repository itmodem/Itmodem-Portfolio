Perfect 👌 ab aate hain **Step 4: Basic Validation** par.
Abhi tak form sirf state update kar raha tha, lekin validation nahin tha.
Is step main hum **simple rule** lagayenge → agar koi field empty ho to error message show ho.

---

## 🔹 Step 4: Basic Validation (Required Fields)

👉 `App.jsx` update kijiye:

```jsx
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({}); // errors ke liye alag state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    // agar error object empty hai to true return karega
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Form Data Submitted:", formData);
      alert("Form Submitted Successfully!");
    } else {
      console.log("❌ Validation Failed:", errors);
    }
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

        {/* Name */}
        <div>
          <label className="block font-medium">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium">Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {/* Submit */}
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

1. Agar form submit karte ho aur koi field empty hai → uske niche **red error message** dikhega.
2. Agar sab fill hai → `console.log` aur ek **alert** aayega.

---

✅ Ab aapka form **basic required field validation** kar raha hai.
**Next Step (Step 5)** main hum **advance validation** karenge (email format, password rules, confirm password).

---

👉 Kya aap chahte ho main **Step 5: Advance Validation (Email + Password rules + Confirm Password)** abhi du?
