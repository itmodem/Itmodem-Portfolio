import React from 'react'

import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className='p-4 text-center'>
            <h2 className='text-xl font-bold'>Counter : {count}</h2>

            <button className="bg-green-500 text-white rounded m-2 py-2 px-4"onClick={handleIncrement}>Increment</button>

            <button className='bg-red-500 text-black rounded m-2 py-2 px-4 ' onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;
