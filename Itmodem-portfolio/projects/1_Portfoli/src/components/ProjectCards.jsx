import React from 'react'

const ProjectCards = ({ title, desc, link }) => {
    return (
        <div className='bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition '>
            <h3 text-xl font-semibold text-blue-400>{title}</h3>
            <p text-gray-300 mt-2>{desc}</p>
            <a href={link} className='text-sm text-blue-400 hover:underline mt-3 block'>View Project</a>
        </div>
    )
}

export default ProjectCards
