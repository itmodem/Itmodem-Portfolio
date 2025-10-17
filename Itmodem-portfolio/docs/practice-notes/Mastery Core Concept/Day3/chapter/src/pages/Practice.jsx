import React from 'react'
import { useState } from 'react';
const Practice = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div className='p-4'>
            <input
                type="text"
                placeholder='Start Typing...'
                onChange={handleChange}
                className='border border-gray-500 m-2 py-2 rounded'
            />
            <p className='mt-4 text-xl font-semibold'>Your typing: {text}</p>
        </div>
    )
}

export default Practice;
