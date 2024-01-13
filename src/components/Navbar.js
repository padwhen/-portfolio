import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaLink } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'> 
        <div className='w-[150px] mt-2'>
            <img src={Logo} alt="Logo Image" />
        </div>
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>Courses / Classes / Skills</Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>Projects</Link>    
                </li>
            </ul>
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/*mobile */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Courses / Classes / Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="https://www.linkedin.com/in/phat-nguyen-591588249/" target="_blank" className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33333]'>
                    <a href="https://github.com/padwhen" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Gmail <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href="https://haagahelia-my.sharepoint.com/:w:/g/personal/bha657_myy_haaga-helia_fi/ESVBs0Zi1t5KittlAKBSRJsBeDBt9MIOBiNPZMlRgZdVlQ?e=nnf2lk" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar