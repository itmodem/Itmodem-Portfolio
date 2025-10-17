import React, { useState } from 'react'

const Counter = () => {
    const [count, setCounter] = useState(0);

    const handleChange = () => {
        setCounter(count +  1);
    }
    return (
        <div className='border border-opacity-40 color-red'>
            <h2 className=' w-full bg-red-500  px-1   color-black text-center items-center '>count: {count}</h2>
            <button onClick={handleChange} className='bg-green-500 py-1 m-1 px-1 mt-1 text-center items-center rounded' >Increment</button>


        </div>
    )
}

export default Counter
