import React from 'react'
import ProjectCards from '../ProjectCards';

const Projects = () => {
    const Projects = [
        { title: 'Portfolio Website', desc: 'Using React and Tailwindcss', link: '#' },
        { title: 'Todo App', desc: 'Using MongoDB, Express , React and Node', link: "#" },
        {title: "Notes Taking App", desc: "Using MongoDB, Express, React and Node", link: "#"}
    ];
    return (
        <section id='projects' className='py-20 px-10 bg-gray-900 text-white'>
            <h2 className='text-3xl font-bold mt-12 text-center m-3'>My Projects</h2>
            <div className='grid sm-grid-cols-2 md:grid-cols-3 gap-8'>
                {Projects.map((p, i) => <ProjectCards key={i} {...p} />)}
            </div>
        </section>
    )
}

export default Projects
