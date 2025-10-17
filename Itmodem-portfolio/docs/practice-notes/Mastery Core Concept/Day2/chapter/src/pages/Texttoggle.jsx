import React from 'react'
import { useState } from 'react'

const Texttoggle = () => {
    const [show, setShow] = useState(true);
  return (
    <div>
      <button className="bg-red-500 text-white rounded py-2 px-4 m-2 p-1 transition-all duration-300 ease-in-out mt-2"onClick={() => setShow (!show)}>
        {show ? "Hide": "Show"} Text
      </button>
      {show && <p>This is a toggleable paragraph.</p>}
    </div>
  )
}

export default Texttoggle;
