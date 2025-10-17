import React from 'react'

const Home = () => {
    return (
        <section id='home' className='h-screen flex flex-col justify-center items-center bg-gradient-to-t from-gray-900 to-gray-800 text-white '>
            <h2 className='text-4xl font-bold'>I'm <span className='text-blue-400'>Mr.Rupesh Lal</span></h2>
            <p className='mt-4 text-lg'>Full Stack Developer | MERN | Problem Solution Provider</p>
            <a href="#projects" className='mt-6 bg-blue-500 px-4 py-2 hover:text-blue-600 rounded-lg '>View my work</a>
        </section>
    )
}

export default Home
