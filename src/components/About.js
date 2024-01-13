import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>Hi, I'm Phat Nguyen, nice to meet you. Please take a look around!</p>
                        </div>
                        <div>
                            <p>
                            <b>Enthusiastic</b> and <b>dedicated software development student</b> at Haaga-Helia University of Applied Sciences. 
                            <b>Eager to apply my coding skill</b>s in a real-world setting and <b>contribute to innovative projects</b>. 
                            Proficient in <b>building responsive full-stack web applications</b>, 
                            I bring <b>a passion for problem-solving</b> and <b>a commitment to continuous learning</b>. 
                            Excited about the opportunity to contribute and grow as a software developer intern.. and more!
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About