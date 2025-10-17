import React from 'react'
import { useState } from 'react'
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='bg-blue-500 p-4 text-white flex justify-between items-center relative'>
      <div className='text-xl font-bold'>Itmodem Pvt. Ltd.</div>

      <ul className='hidden md:flex gap-6'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <div className='md:hidden' onClick={() => setOpen(!open)}>
        <svg>
          <path d={open ? "X icon" : "Humberger Icon"} />
        </svg>
      </div>

      <ul className='absolute top-16 left-0 w-full bg-blue-500 flex flex-col items-center md:hidden'>
        <li className='p-2'>Home</li>
        <li className='p-2'>About</li>
        <li className='p-2'>Services</li>
        <li className='p-2'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
