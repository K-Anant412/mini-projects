import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import SubBody from './pages/SubBody'
import Products from './pages/Products'

import plant_pot3 from './assets/plant_pot3.jpg'
import plant_pot6 from './assets/plant_pot6.jpg'
import restock from './assets/restock.jpg'

import { IoWater } from "react-icons/io5";
import { GiSpray } from "react-icons/gi";
import { FaScissors } from "react-icons/fa6";

function App() {

  return (
    <>
      <section className='w-screen h-screen overflow-x-hidden overflow-y-auto scrollbar-none bg-[#E8F5E9]'>

      <Home />
      <SubBody />
      <Products />
       <div className='w-full h-full bg-[#E8F5E9] flex flex-col'>

        <div className='w-full h-70 border relative top-2 flex items-center justify-center bg-[#0f331f] shrink-0'>

          <div className='shrink-0 h-full w-[60%] flex items-center justify-center gap-4'>

            <div className='w-fit h-fit flex flex-col items-center justify-center gap-3'>
                <h1 className='text-6xl text-white font-semibold font-[Playfair_Display]'>Grow Plant For</h1>
                <h1 className='text-6xl text-white font-semibold font-[Playfair_Display]'>A Better Life</h1>
            </div>

            <div className='w-fit h-fit flex items-center relative -left-15'>

              <span className='w-40 h-40 rounded-[50%] bg-amber-50 border-4 border-[#0f331f] relative top-9 left-15 bg-center bg-cover' style={{backgroundImage: `url(${plant_pot3})`}}></span>
              <span className='w-52 h-52 rounded-[50%] bg-amber-50 bg-center bg-cover' style={{backgroundImage: `url(${plant_pot6})`}}></span>
    
            </div>

          </div>
          <div className='shrink-0 h-full w-[30%] flex flex-col items-center justify-center gap-3'>

            <p className='text-xl font-[Inter] font-semibold text-white'>
              Cultivating plants enhances well-being
              and contributes to a healthier environment,
              fostering a more fulfilling life
            </p>

            <button className='w-fit h-fit px-4 p-2 relative -left-40 border rounded-3xl flex items-center justify-center text-[20px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0f331f]'>
              Read More
            </button>

          </div>

        </div>
        <div className='w-full h-fit p-10 flex items-center flex-col shrink-0'>
            <h1 className='shrink-0 w-full h-20 flex items-center justify-center text-5xl font-semibold font-[Playfair_Display] text-[#0f331f]'>
                Steps to start taking care of your plant.
            </h1>
            <h1 className='shrink-0 w-full h-20 flex items-center justify-center text-[25px] relative -top-5 font-semibold font-[Inter] text-[#0f331f]'>
                The right solution for the care of green and smart plants.
            </h1>
        </div>
        <div className='w-full h-fit flex items-center justify-center p-4 gap-3 shrink-0'>

          <span className='w-[30%] h-fit flex flex-col items-center justify-center p-2 border-r-2'>

            <div className='w-25 h-25 flex items-center justify-center rounded-[50%] border-[#0f331f] bg-[#0f331f]'>
              <IoWater className='text-7xl text-white' />
            </div>

            <h1 className='w-full h-fit flex items-center justify-center p-2 text-3xl font-[Playfair_Display] font-semibold'>
              Humidity Control
            </h1>

            <p className='w-[60%] pl-4 h-fit text-[#0f331f] font-[Inter] font-semibold mt-3'>
              Effective humidity control is essential for properly caring for plants, ensuring optimal growth and overall health
            </p>

          </span>
          <span className='w-[30%] h-fit flex flex-col items-center justify-center p-2 border-r-2'>

            <div className='w-25 h-25 flex items-center justify-center rounded-[50%] border-[#0f331f] bg-[#0f331f]'>
              <GiSpray className='text-7xl text-white' />
            </div>

            <h1 className='w-full h-fit flex items-center justify-center p-2 text-3xl font-[Playfair_Display] font-semibold'>
              Pest Anticipation
            </h1>

            <p className='w-[60%] pl-4 h-fit text-[#0f331f] font-[Inter] font-semibold mt-3'>
            Implementing proactive pest anticipation measures is essential to safeguard and nurture the well-being of plants.
            </p>

          </span>
          <span className='w-[30%] h-fit flex flex-col items-center justify-center p-2 '>

            <div className='w-25 h-25 flex items-center justify-center rounded-[50%] border-[#0f331f] bg-[#0f331f]'>
              <FaScissors className='text-7xl text-white' />
            </div>

            <h1 className='w-full h-fit flex items-center justify-center p-2 text-3xl font-[Playfair_Display] font-semibold'>
              Pruning Weeds
            </h1>

            <p className='w-[60%] pl-4 h-fit text-[#0f331f] font-[Inter] font-semibold mt-3'>
              Taking care of plants involves diligently managing unwanted growth to ensure their well-being
            </p>

          </span>

        </div>

       </div>
       <div className='w-full h-full bg-[#E8F5E9] flex flex-col items-center justify-center '>

          <span className='w-[70%] h-110 border-none rounded-3xl flex overflow-hidden shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] bg-[#0f331f]'>

            <div className='w-[40%] shrink-0 h-full border-none bg-cover bg-center' style={{backgroundImage: `url(${restock})`}}>

            </div>


          <div className='w-[50%] h-full text-white flex flex-col items-center justify-center pl-10 gap-10'>

            <h1 className='w-full h-fit text-3xl font-[Inter] font-semibold relative'>
              Come with us how to grow your plants to be better and healthier
            </h1>

            <p className='w-full h-fit text-xl font-[Inter] font-semibold'>
              Join us on a journey to learn the art of growing healthier and more vibrant plants. We're here to share tips and insights that will help you nurture your garden to its fullest potential. Come along with us, and let's explore the simple yet effective ways to make your plants thrive, naturally.
            </p>

            <button className='w-fit h-fit px-4 p-2 relative -left-45 -top-3 border rounded-3xl flex items-center justify-center text-[20px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0f331f]'>
              Read More
            </button>

          </div>

          </span>

       </div>
      </section>
    </>
  )
}

export default App
