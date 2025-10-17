Samjhata hoon step by step 👇

मान लो तुम्हारे पास ek form hai jisme multiple inputs hain (jaise name, email, password). Har input ka **name** attribute alag-alag diya gaya hai. Example:

```html
<input type="text" name="username" />
<input type="email" name="email" />
<input type="password" name="password" />
```

### Ab React code:

```jsx
const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;  // input se "name" aur "value" nikal rahe

  setFormData((prev) => ({
    ...prev,            // pehle ka sara data as it is rakho
    [name]: value       // jis input ka name match kare, uski value update kar do
  }));
};
```

---

### Breakdown:

1. **`const { name, value } = e.target;`**

   * Agar user `email` input me type kare, toh

     * `name = "email"`
     * `value = "abc@gmail.com"`

2. **`setFormData((prev) => ({ ...prev, [name]: value }))`**

   * `prev` = pehle ka formData (state)
   * `...prev` = purana data copy karo
   * `[name]: value` = dynamic key update (object ke andar jo bhi key `name` ke barabar hogi uski value change ho jaegi)

   Example:
   Agar `prev` tha:

   ```js
   { username: "", email: "", password: "" }
   ```

   Aur user `email` input me likhta hai `"abc@gmail.com"`

   Update hone ke baad `formData` banega:

   ```js
   { username: "", email: "abc@gmail.com", password: "" }
   ```

---

### Simple Hindi Example:

* `name` = "password"
* `value` = "1234"
* State update karega:

```js
prev = { username: "Rupesh", email: "test@mail.com", password: "" }

new = { username: "Rupesh", email: "test@mail.com", password: "1234" }
```

---

👉 Iska fayda ye hai ki ek hi `handleChange` function se **multiple inputs** handle kar sakte ho.

---

Chaho toh main ek **mini working React form example** bana ke dikhau jisme tum isko action me dekh pao?
