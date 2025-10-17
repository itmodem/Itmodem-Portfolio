import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen)
    return (
        <nav className='flex justify-between items-center px-8 py-4 bg-gray-900 text-white '>
            <h1 className='text-2xl font-bold'>Mr.Rupesh Lal</h1>
            <ul className='hidden  md:flex gap-6'>
                <li><a href="#home" className='hover:text-blue-400'>Home</a></li>
                <li><a href="#about" className='hover:text-blue-400'>About</a></li>
                <li><a href="#projects" className='hover:text-blue-400'>Projects</a></li>
                <li><a href="#contact " className='hover:text-blue-400'>Contact</a></li>
            </ul>

            <button className='block md:hidden text-2xl focus-outline-none'
                onClick={toggleMenu}>
                {menuOpen ? "✕" : "☰"}
            </button>

            <div className={`${menuOpen ? "block" : "hidden"
                }`} md:hidden absolute top-16 left-0 w-full bg-gray-800 text-center py-6 space-y-4 transition-all duration-300>

                <a
                    href="#home"
                    className='block text-lg hover:text-blue-400'
                    onClick={() => setMenuOpen(false)}>Home
                </a>

                <a
                    href="#about"
                    className='block text-lg hover:text-blue-400'
                    onClick={() => setMenuOpen(false)}>
                    About
                </a>

                <a
                    href="#projects"
                    className='block text-lg hover:text-blue-400'
                    onClick={() => setMenuOpen(false)}>
                    Projects
                </a>

                <a
                    href="#contact"
                    className='block text-lg hover:text-blue-400'>
                    Contact
                </a>
            </div>
        </nav>
    )
}

export default Navbar
