import React, { useState } from "react";

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-500">Signup</h2>

        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full mt-1 p-2 border rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full mt-1 p-2 border rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full mt-1 p-2 border rounded-md"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button className="w-full bg-blue-500 mt-2 py-2 px-2 text-white rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormExample;
