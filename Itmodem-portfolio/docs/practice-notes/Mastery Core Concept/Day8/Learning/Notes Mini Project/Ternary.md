That's awesome, Rupesh bhai! 💻 You're learning **conditional rendering** in React — very important concept 🔥

Let me give you some **React-style exercises** that not only sharpen your mind but also **boost confidence** in logic-building and decision-making (exactly like your example).

---

## ✅ Exercise 1: Show Greeting Based on Time

**Goal:** Practice conditional logic based on real-world data (like time)

```jsx
import React from 'react';

const Greeting = () => {
  const hour = new Date().getHours();
  let message;

  if (hour < 12) {
    message = 'Good Morning ☀️';
  } else if (hour < 18) {
    message = 'Good Afternoon ☕';
  } else {
    message = 'Good Evening 🌙';
  }

  return <h2>{message}</h2>;
};

export default Greeting;
```

---

## ✅ Exercise 2: Show Profile if Logged In

```jsx
import React from 'react';

const isLoggedIn = true;

const UserProfile = () => {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back, Rupesh!</h2> : <h2>Please login to continue.</h2>}
    </div>
  );
};

export default UserProfile;
```

---

## ✅ Exercise 3: Change Button Text After Click

**Goal:** Improve UI logic using condition rendering

```jsx
import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '💖 Liked' : 'Like 👍'}
    </button>
  );
};

export default LikeButton;
```

---

## ✅ Exercise 4: Conditional Component Rendering

**Goal:** Show different components using condition

```jsx
import React from 'react';

const Dashboard = () => <h2>Welcome to Dashboard 🧠</h2>;
const Login = () => <h2>Please Login 🔒</h2>;

const App = () => {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
};

export default App;
```

---

## ✅ Exercise 5: Multiple Conditions (Nested Ifs)

**Goal:** Deep thinking with nested conditions

```jsx
import React from 'react';

const StatusMessage = ({ score }) => {
  let message;

  if (score >= 90) {
    message = '🌟 Excellent';
  } else if (score >= 75) {
    message = '✅ Good Job';
  } else if (score >= 50) {
    message = '📝 Needs Improvement';
  } else {
    message = '❌ Failed - Try Again';
  }

  return <h3>{message}</h3>;
};

export default StatusMessage;
```

---

### 🧠 BONUS BRAIN SHARPENER:

Write a small React component that:

* Takes a user's age as prop
* Shows different messages:

  * Below 13: "You're a child"
  * 13–19: "You're a teenager"
  * 20+: "You're an adult"

---

Would you like a full **practice sheet with tasks and solutions** on this topic to boost React logic even more?
