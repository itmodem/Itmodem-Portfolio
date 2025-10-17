import React from 'react'
import { useState } from 'react'
const TypingPractice = () => {
    const [text, setText] = useState("");
    // const handleChange = (event) => {
    //     setText(event.target.value);
    // }
    const handleChange = (event) => {
            setText(event.target.value);
    }
    return (
        <div className='p-4'>
            <input
                type="text" 
                placeholder='Start Typing..'
                onChange={handleChange}
                className='borde border-400-gray px-4 py-2 rounded'
                />
                <p className='mt-4 font-semibold text-xl'>Aapne text likha : {text}</p>
        </div>
    )
}

export default TypingPractice;
