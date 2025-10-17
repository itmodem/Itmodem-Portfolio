Great step forward, Rupesh bhai! 🔥
Using a **unique `id`** as a key instead of `index` is best practice ✅ — it makes React rendering **faster and safer**, especially when data changes dynamically.

---

### ✅ Refactored Version with Unique `id` as `key`:

```jsx
import React from 'react';

const UserInfo = () => {
  const users = [
    { id: 1, name: "Rakesh", role: "Admin" },
    { id: 2, name: "Riya", role: "User" },
    { id: 3, name: "Muskan", role: "Guest" }
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Role: {user.role}</p>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
```

---

### ✅ What Changed?

| Before                      | After                   | Why?                                    |
| --------------------------- | ----------------------- | --------------------------------------- |
| `key={index}`               | `key={user.id}`         | `index` can cause bugs if items reorder |
| No `id` in user objects     | Added `id` to each user | Unique `id` is reliable and stable      |
| `map((user, index) => ...)` | `map((user) => ...)`    | No need for `index` now                 |

---

### 💡 Why `key={user.id}` is Better:

| `key={index}` (BAD for dynamic data) | `key={id}` (BEST)           |
| ------------------------------------ | --------------------------- |
| Can confuse React when reordering    | Stable across updates       |
| Can cause **duplicate keys**         | Always unique               |
| Only works reliably for static lists | Works for **all use cases** |

---

Want to add a **delete button** for each user? Or edit their roles? I can show `.map()` + interactivity next! ⚡
