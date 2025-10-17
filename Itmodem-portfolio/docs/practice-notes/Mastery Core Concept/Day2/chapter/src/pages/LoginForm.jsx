import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState("");          // 1st state variable
  const [password, setPassword] = useState("");    // 2nd state variable
  const [showPassword, setShowPassword] = useState(false); // 3rd state variable

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-md bg-white rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        className="border p-2 w-full mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        className="border p-2 w-full mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
          className="mr-2"
        />
        Show Password
      </label>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
};

export default LoginForm;
