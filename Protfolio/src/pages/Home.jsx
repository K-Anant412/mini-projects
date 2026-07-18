import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import image from '../assets/image.jpg'

const Home = () => {
  return (
    <>
        <div className='h-full w-full p-3 flex items-center relative z-50'>
          
          <div className='w-[50%] h-full p-15 flex flex-col gap-5 relative left-4'>
            <a href="#" className='w-40 h-7 border rounded-2xl font-medium text-white bg-black flex items-center justify-center'>open to work</a>
            
            <div className='w-full h-fit p-1'>
              <h1 className='text-5xl font-semibold font-["Roboto"]'>Hello,</h1>
              <h1 className='text-7xl font-semibold font-["Roboto"]'>
                I'm Anant
              </h1>
              <h1 className='text-7xl font-semibold font-["Roboto"]'>
                Kore
              </h1>

              <h2 className='font-["SN-Pro"] text-4xl font-semibold mt-5 ml-1 '>
                Backend Developer|
              </h2>

              <p className='max-w-md'>
                With a solid year of experience designing robust APIs and optimizing database logic, I focus on turning complex technical requirements into stable, high-performing code that powers seamless user experiences.
              </p>
              
              <h1 className='w-fit h-fit p-2 flex items-center gap-1.5 text-xl font-semibold'>
                <FaLocationDot size={18} />
                Kolhapur
              </h1>

              <hr className='mt-3' />
            
              <h1 className='w-fit h-fit flex gap-4 px-2 py-3 items-center font-medium'>
                Follow me: 
                <a href="https://github.com/K-Anant412" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transitions-colors">
                  <FaGithub size={21}/>
                </a>
                <a href="https://www.linkedin.com/in/anant-kore/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transitions-colors">
                  <FaLinkedin size={21}/>
                </a>
                <a href="https://discord.gg/your-invite-code" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transitions-colors">
                  <FaDiscord size={21}/>
                </a>
                <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transitions-colors">
                  <AiFillInstagram size={21}/>
                </a>
              </h1>
            </div>

          </div>
      
          <div className=' absolute w-30 h-30 border-none rounded-[50%] left-140  transition-all duration-200 hover:scale-110'>

          </div>
   
          <div className='relative w-[50%] h-full border-none bg-cover bg-center rounded-2xl shadow-gray-600 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]' style={{backgroundImage: `url(${image})`}}>

          </div>
            {/* <div class="w-20 h-40 bg-gray-100 rounded-r-full absolute top-[60%] shadow-2xl"></div> */}
          

        </div>
    </>
  )
}

export default Home