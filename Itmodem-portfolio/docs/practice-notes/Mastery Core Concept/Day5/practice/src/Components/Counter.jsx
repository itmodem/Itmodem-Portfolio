import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter;
