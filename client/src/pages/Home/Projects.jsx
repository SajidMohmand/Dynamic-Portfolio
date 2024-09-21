import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'

const Projects = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)
    const { portfolioData } = useSelector(state => state.root);

    const { projects} = portfolioData;


    return (
        <div className="p-6">
            <SectionTitle title={"Projects"} />

            <div className="flex py-10 gap-20 sm:flex-col">
                <div className='flex flex-col gap-4 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-auto sm:w-full'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id} // Changed _id to id for consistency
                            onClick={() => setSelectedItemIndex(index)}
                            className={`cursor-pointer px-5 py-3 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 bg-[#1a7f5a31]' : 'text-white'} hover:bg-[#1a7f5a20] transition duration-300`}
                            aria-selected={selectedItemIndex === index}
                        >
                            <h1 className='text-xl'>{project.title}</h1>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col sm:items-center gap-10 sm:flex-col'>
                    <img 
                        src={projects[selectedItemIndex].image} 
                        alt={projects[selectedItemIndex].title} // Descriptive alt text
                        className='h-60 w-72 object-cover rounded-lg shadow-lg'
                    />
                    <div className='flex flex-col gap-4'>
                        <h1 className="text-secondary text-2xl font-bold">{projects[selectedItemIndex].title}</h1>
                        <div className="flex flex-wrap gap-2 mt-2 text-white">
                            Technologies:
                            {projects[selectedItemIndex].technologies.map((tech, index) => (
                                <div key={index} className='border border-tertiary py-1 px-3 rounded-full'>
                                    <h1 className='text-tertiary'>{tech}</h1>
                                </div>
                            ))}
                        </div>
                        <p className="text-white">{projects[selectedItemIndex].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
