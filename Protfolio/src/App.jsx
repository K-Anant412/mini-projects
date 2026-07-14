import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'

import { CgProfile } from "react-icons/cg";
import { SiHyperskill } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='w-screen h-screen overflow-hidden flex flex-col gap-6 items-center p-10'>
      
      <nav className='w-[65%] h-15 border rounded-3xl p-2 flex items-center justify-around'>
        <ul className='w-[80%] flex h-full items-center justify-around'>
          <li className='text-[23px] font-semibold flex items-center gap-1'>
            <CgProfile size={23} />
            About
          </li>
          <li className='text-[23px] font-semibold flex items-center gap-1'>
            <SiHyperskill size={23} />
            Skills
          </li>
          <li className='text-[23px] font-semibold flex items-center gap-1'>
            <FaRegFolderOpen size={23} />
            Projects
          </li>
          <li className='text-[23px] font-semibold flex items-center gap-1'>
            <RiContactsFill size={23} />
            Contact
          </li>
        </ul>
      </nav>

      <section className='w-[85%] h-[85%] border-2 overflow-hidden rounded-xl'>
        <div className='h-full w-full p-3 flex items-center'>
          
          <div className='w-[50%] h-full p-15 flex flex-col gap-5'>
            <a href="#" className='w-40 h-7 border rounded-2xl font-medium text-white bg-black flex items-center justify-center'>open to work</a>
            
            <div className='w-full h-fit p-1'>
              <h1 className='text-5xl font-semibold font-["Roboto"]'>Hello,</h1>
              <h1 className='text-7xl font-semibold font-["Roboto"]'>
                I'm Anant
              </h1>
              <h1 className='text-7xl font-semibold font-["Roboto"]'>
                Kore
              </h1>

              <h2 className='font-["SN-Pro"] text-3xl mt-5 ml-1 '>
                Backend Developer|
              </h2>

              <p>
                With a solid year of experience designing robust APIs and optimizing database logic, I focus on turning complex technical requirements into stable, high-performing code that powers seamless user experiences.
              </p>
              
              <h1 className='w-fit h-fit p-2 flex items-center gap-1.5 text-xl font-semibold'>
                <FaLocationDot size={18} />
                Kolhapur
              </h1>

              <hr className='mt-3' />
            
              <h1 className='w-fit h-fit flex gap-4 px-2 py-3 items-center font-medium'>
                Follow me: 
                < FaGithub size={21}/>
                < FaLinkedin size={21}/>
                < FaDiscord size={21}/>
                < AiFillInstagram size={21}/>
              </h1>
            </div>

          </div>

        </div>
      </section>
    </section>
    </>
  )
}

export default App
