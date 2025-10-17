import React from 'react'
import { useState } from 'react';
const FormRegration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    // I don't understand.....
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    // I don't understand....
    const hanldeSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };
    return (
        <div>
            <form onSubmit={hanldeSubmit}>
                <input type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name'
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                <input type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg foucus:outline-none focus:ring-2 focus:ring-indigo-500' />

                <input type="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Password'
                    className='w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' />

                <button type='submit'
                    className='w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300'>
                    Register</button>
            </form>
        </div>
    )
}

export default FormRegration;
