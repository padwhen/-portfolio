import React, { useState } from 'react'
import WorkImg from '../assets/projects/Airbnb.png'
import JavaImg from '../assets/projects/JavaProjects.png'
import { useAppContext } from '../AppContext'
import AirbnbAnalysis from './AirbnbAnalysis'
import JavaAnalysis from './JavaAnalysis'

const Projects = () => {
    const {isVisible, toggleAirbnbAnalysis, javaVisible, toggleJavaVisible} = useAppContext()
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>Check out some of my recent works. I am still currently working on some 
                and will update immediately once it is completed!
                </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                <div style={{backgroundImage: `url(${WorkImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Airbnb MERN
                        </span>
                        <div className='pt-8 text-center'>
                                <button onClick={toggleAirbnbAnalysis} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    {isVisible ? 'Hide analysis' : 'Show analysis'}
                                </button>

                            <a href="https://github.com/padwhen/airbnb" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Source code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${JavaImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Java Projects
                        </span>
                        <div className='pt-8 text-center'>
                                <button onClick={toggleJavaVisible} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    {javaVisible ? 'Hide analysis' : 'Show analysis'}
                                </button>
                            <a href="https://github.com/padwhen/JavaProjects" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Source code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isVisible && (
            <div>
                <AirbnbAnalysis />
            </div>
        )}
        {javaVisible && (
            <div>
                <JavaAnalysis />
            </div>
        )}
    </div>
  )
}

export default Projects