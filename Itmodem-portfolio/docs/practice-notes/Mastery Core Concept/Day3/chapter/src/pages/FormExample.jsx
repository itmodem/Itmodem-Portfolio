import React from 'react'
import { useState } from 'react'
const FormExample = () => {
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
                    value={name}
                    onChange={handleChange} />
                <button type='submit' className='bg-gray-500 color-red text-center font-semibold rounded  m-2 py-0 px-3 border '>Submit</button>
            </form>
        </div>
    )
}

export default FormExample
