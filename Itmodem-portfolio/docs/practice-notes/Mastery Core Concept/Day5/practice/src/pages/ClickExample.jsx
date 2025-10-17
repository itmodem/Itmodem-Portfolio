import React, { useState } from 'react'

const ClickExample = () => {
    const [message, setMessage] = useState("");

    const handleClick = () => {
        setMessage('You clicked the message');
        alert(`You clicked `);
    }
  return (
    <div>
      <h1>Message: {message}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ClickExample;
