import React from 'react'
import image from '../assets/image.jpg'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div className='h-full w-full p-3 flex items-center relative z-50'>
        
        <div className='w-[48%] h-full shrink-0 flex flex-col p-3 items-center justify-center'>
          <span className='w-[56%] h-[60%] border-none rounded-[50%] relative -left-10 shadow-gray-600 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)] bg-cover bg-center' style={{backgroundImage: `url(${image})`}}></span>
          {/* <h1 className='w-[40%] h-fit p-2 border text-2xl flex items-center justify-center font-semibold relative -left-10 mt-5'>___Anant Kore___</h1> */}
        </div>

        <div className='z-10 w-full h-[80%] absolute shrink-0 flex flex-col p-3 border-none -rotate-45 left-70 bottom-1 bg-[#E3DDD5] shadow-gray-600 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]'></div>
        
        <div className='z-20 h-50 w-100 text-gray-500 relative -left-20 top-60 flex flex-col p-3'>
          <h1 className='w-full h-fit text-2xl font-serif font-semibold '>Contact me:</h1>

          <ul className='w-full h-fit p-1 flex flex-col items-center justify-around gap-2'>
            
            <div className='w-full flex gap-5'>
              
              <Link 
                to="https://www.linkedin.com/in/anant-kore/" 
                className='flex h-fit items-center gap-1.5 text-xl font-semibold transition-all duration-200 hover:text-blue-500 transitions-colors hover:underline'
              >
                <FaLinkedin />
                <h1> Linkedin </h1>
              </Link>

              <Link 
                to="https://instagram.com/your-handle"
                className='flex h-fit items-center gap-1.5 text-xl font-semibold transition-all duration-200 hover:text-pink-500 transitions-colors hover:underline'
                >
                <AiFillInstagram />
                <h1>Instgram</h1>
              </Link>

              <Link 
                to="/" 
                className='flex h-fit items-center gap-1.5 text-xl font-semibold transition-all duration-200 hover:text-green-400 transitions-colors hover:underline'
                >
                <FaWhatsapp />
                <h1> Whatsapp</h1>
              </Link>

              <Link 
                to="/" 
                className='flex h-fit items-center gap-1.5 text-xl font-semibold transition-all duration-200 hover:text-gray-600 hover:underline'
                >
                <IoMailOpenOutline />
                <h1> Email</h1>
              </Link>

            </div>

          </ul>
        </div>

        <div className='z-20 w-120 h-fit absolute left-180 font-medium text-gray-600'>
          "Driven by a passion for data science and full-stack development, I build web applications that are both highly functional and analytically sound. I thrive on understanding the core mechanics of software, breaking down complex technical challenges, and turning raw logic into seamless user experiences."
        </div>
      </div>
    </>
  )
}

export default Contact