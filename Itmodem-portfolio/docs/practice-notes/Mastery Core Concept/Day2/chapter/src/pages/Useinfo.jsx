import React from 'react'
import { useState } from 'react'
const Useinfo = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const handleClick = () => {
        console.log("Name:", name);
        console.log("Age:", age);
    }
    return (
        <div>
            <h2>User Info</h2>
            <input
            className='bg-gray-900'
                type="text" placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
            className='bg-slate-400 '
                type="number"
                placeholder='Enter your age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <button className="bg-yellow-500 text-center font-bold rounded m-2 py-2 px-4 "onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Useinfo;
