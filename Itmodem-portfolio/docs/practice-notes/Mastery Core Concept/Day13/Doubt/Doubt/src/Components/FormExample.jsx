import React from 'react'
import { useState } from 'react'
const FormExample = () => {
    const [form, setForm] = useState('');
    const handleChange = (e) => {
        setForm(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted form: ${form}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={form}
                onChange={handleChange}
                placeholder='Enter your name' 
                className='m-2 mt-1'/>

            <button type='submit'>Submit</button>
        </form>

    )
}

export default FormExample
