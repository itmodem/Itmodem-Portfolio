import { useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    if (!dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleDark}
      className="px-4 py-2 bg-gray-800 text-white rounded"
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
