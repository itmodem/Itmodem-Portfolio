import React from "react";

const StatePractice = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen space-y-6">

      {/* 🔵 Hover State */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        {/* hover:bg-blue-700 → Changes background on hover */}
        Hover Me
      </button>

      <button className="bg-red-500 text-white px-1 py-1 rounded-md hover:bg-red-900 m-2 mt-5">My Hover Button</button>

      <button className="bg-green-600 text-black px-1 py-1 rounded-md hover:bg-yellow-600 m-3 mt-3 gap-4 ">Hover</button>

      {/* 🔵 Focus State */}
      <input
        type="text"
        placeholder="Focus me"
        className="border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      // focus:outline-none → Removes default blue outline
      // focus:ring → Adds custom ring on focus
      />

      <input
        type="text"
        placeholder="Email"
        name="email"
        required
        className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 m-3 " />

      {/* 🔵 Active State */}
      <button className="bg-green-500 text-white px-4 py-2 rounded active:scale-95">
        {/* active:scale-95 → Slight shrink when button is clicked */}
        Click Me
      </button>

      <button className="bg-yellow-500 text-white px-1 py-1 rounded-md active:scale-95 m-2">
        Click
      </button>

      {/* 🔵 Disabled State */}
      <button
        className="bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled
      >
        {/* disabled:opacity-50 → Fades out when disabled */}
        Disabled Button
      </button>

      <button className="bg-gray-300 text-white px-2 py-2 rounded-md disabled:opacity-50 m-5">Disabled</button>

      {/* 🔵 Group Hover */}
      <div className="group bg-white p-4 shadow rounded">
        {/* group → Enables group-hover inside */}
        <h2 className="text-lg font-bold">Group Hover Example</h2>
        <p className="text-gray-600 group-hover:text-black">
          {/* group-hover:text-black → Turns black when parent is hovered */}
          Hover over this box to change my color!
        </p>
      </div>

      <div className="group bg-white p-4 shadow rounded">
        <h2 className="text-lg font-bold">Hover Example</h2>
        <p className="text-red-500 group-hover:text-red">Hover over this box to change my color</p>
      </div>
    </div>
  );
};

export default StatePractice;
