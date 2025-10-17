import React from 'react'
import { useState } from 'react'
const Practice = () => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted name: ${name}`);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
         type="text"
         onChange={handleChange} />
         <button type='submit' className='bg-gray-200 color-red rounded py-1 m-2 px-2'>Submit</button>
      </form>
    </div>
  )
}

export default Practice
