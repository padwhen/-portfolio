import React from 'react'

import Experience from './Experience';
import CompletedCourse from './CompletedCourse';
import OngoingCourse from './OngoingCourse';


const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
        <Experience />
        <CompletedCourse />
        <OngoingCourse />
    </div>
  )
}

export default Skills