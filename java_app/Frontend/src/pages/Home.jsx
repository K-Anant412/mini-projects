import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { BiLeaf } from "react-icons/bi";

import plant from '../assets/plant.png'

const Home = () => {
  return (
    <>
        <div className='w-full h-full shrink-0 flex overflow-hidden flex-col bg-[radial-gradient(ellipse_at_center,#18522D_0%,#091E12_100%)]'>

          <nav className=' w-full h-20 flex items-center justify-center shrink-0'>

            <h1 className=' w-[25%] shrink-0 h-full flex items-center gap-2 justify-center text-3xl font-[Playfair_Display] font-semibold text-white'>
              <BiLeaf className='mt-1' />
              Plants Avenue
            </h1>

            <ul className=' w-[45%] shrink-0 h-full flex items-center gap-9 justify-center'>
              <li className='text-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:text-white/60'>Home</li>
              <li className='text-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:text-white/60'>Shop</li>
              <li className='text-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:text-white/60'>About</li>
              <li className='text-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:text-white/60'>Blog</li>
              <li className='text-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:text-white/60'>Contact</li>
            </ul>

            <div className=' w-[30%] h-full shrink-0 flex items-center justify-center gap-6 text-white'>

                <FaRegHeart className='text-3xl' />
                <MdOutlineShoppingBag className='text-3xl' />
                <FaRegUser className='text-3xl' />

            </div>

          </nav>

          <div className='w-full h-full flex items-center justify-around'>

            <div className='relative w-[50%] h-full '>

              <div className=' w-fit h-fit p-5 flex flex-col gap-4 absolute top-[20%] left-[20%] '>
                <h1 className='text-6xl text-white font-semibold font-[Playfair_Display]'>Bring The Nature</h1>
                <h1 className='text-6xl text-white font-semibold font-[Playfair_Display]'>Close To You</h1>
              
                <p className="font-[Inter] relative text-sm md:text-base font-normal text-[#EFECE1]/80 max-w-md leading-relaxed">
                  Enhance your space with our indoor and herb plants. Experience the calming effect of greenery, right at home.
                </p>

                <button className='mt-4 w-fit h-fit px-4 py-2 pb-2 border rounded-3xl font-semibold flex items-center justify-center gap-3 text-xl text-white font-[Inter] transition-all duration-300 hover:bg-white hover:text-[#091E12]'>
                  Discover Now
                  <FaArrowCircleRight className='relative mt-0.5' />
                </button>
              </div>

            </div>

            <div className='w-[40%] h-full flex items-end justify-center relative '>
                <div className='border border-white overflow-hidden w-[80%] h-full rounded-tl-[240px] rounded-tr-[240px] relative right-22 bg-[#EFECE1] bg-center bg-cover'>
                  <img src={plant} alt="" className='' />  
                </div>
                <h1 className='border border-white rounded-[50%] bg-[#18522D] w-30 h-30 absolute z-30 top-[40%] -left-20 flex items-center justify-center text-3xl font-[Playfair_Display] font-semibold text-white'>
                    200 Rs
                </h1>
            </div>

          </div>

        </div>
    </>
  )
}

export default Home