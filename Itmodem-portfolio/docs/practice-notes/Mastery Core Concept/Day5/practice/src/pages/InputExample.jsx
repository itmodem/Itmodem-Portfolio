import React, { useState } from 'react'

const InputExample = () => {
    const[name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }
  return (
    <div>
      <input 
      type="text"
      placeholder='Enter your name' 
      onChange={handleChange}
      />
      {/* <button onChange={handleChange}>onChange</button> */}
      <p>Name: {name}</p>
    </div>
  )
}

export default InputExample;
