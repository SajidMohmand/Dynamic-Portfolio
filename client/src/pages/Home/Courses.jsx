import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Courses = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const { portfolioData } = useSelector(state => state.root);

    const { courses} = portfolioData;


    return (
        <div className="p-6 min-h-screen">
            <SectionTitle title={"Courses"} />

            <div className="flex py-10 gap-20 sm:flex-col sm:gap-4">
                <div className='flex flex-col gap-5 border-l-1 border-[#135e4c82] w-2/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {courses.map((course, index) => (
                        <div
                            key={course.id}
                            onClick={() => setSelectedItemIndex(index)}
                            className={`cursor-pointer px-6 py-4 transition-transform transform ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 bg-[#1a7f5a31] translate-x-1' : 'text-white hover:bg-[#1a7f5a20]'} rounded-lg shadow-md hover:shadow-lg`}
                            aria-selected={selectedItemIndex === index}
                        >
                            <h1 className='text-lg font-semibold'>{course.title}</h1>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    <div className='flex items-center gap-6'>
                        <img
                            src={courses[selectedItemIndex].image}
                            alt={courses[selectedItemIndex].title}
                            className='h-52 w-80'
                        />
                        <div className='flex flex-col gap-5'>
                            <h2 className="text-secondary text-xl">{courses[selectedItemIndex].title}</h2>
                            <p className="text-white">{courses[selectedItemIndex].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
