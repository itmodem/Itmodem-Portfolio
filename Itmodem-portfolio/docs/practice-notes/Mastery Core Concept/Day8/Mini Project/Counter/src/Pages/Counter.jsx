import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white-500 p-8 rounded-lg shadow-lg text-center'>
               <h1 className='text-2xl font-bold'>Simple Counter App</h1>
                <p className='texth1 cla-4xl font-bold'>{count}</p>
            </div>
            <div className='space-x-4'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600 m-1' onClick={() => setCount(count + 1)}>Icrement</button>

                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-500 m-1 ' onClick={() => setCount(count - 1)}>Decrement</button>

                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-yellow-500 m-1' onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
