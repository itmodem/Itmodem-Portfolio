import React, { useEffect, useState } from 'react'

const CounterLogger = () => {
    const [count, setCount] = useState(0);
    useEffect(() =>{
        console.log('Counte is update',{count})
    },[count]);
  return (
    <div>
      <h1>Counter :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default CounterLogger
