import React from 'react'

const About = () => {
    return (
        <section id='about' className='py-20 px-10 bg-gray-800 text-white flex flex-col md:flex-row item-center justify-center gap-10'>
            <img
                src="/Logo.jpg"
                alt="Profile" 
                className='w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg'/>
            <div>
                <h2>About Me</h2>
                <p>Hello, I'm <span>Mr.Rupesh Lal</span>a possinate full stack developer. Who loves building user friendly and modern web application. I specialize in the MERN stack and enjoy turning ideas into digitatly.</p>

                <p>When I am not coding, I love learning new technologies, improving UI/UX design and exploring business side tech.</p>
            </div>
        </section>
    )
}

export default About
