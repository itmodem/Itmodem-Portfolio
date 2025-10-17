import React from 'react'
import { useState } from 'react'
const ClickButton = () => {
    const [text, setText] = useState("Click Me");

    const handleClick = () => {
        setText(prev => prev === "Click Me" ? "You Clicked " : "Click Me" );
    }
  return (
    <div>
      <button onClick={handleClick} className='bg-green-500 text-center text-white py-2 px-2 m-6 rounded'>
        {text}
      </button>
    </div>
  )
}

export default ClickButton;
