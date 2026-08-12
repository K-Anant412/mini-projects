import React from 'react'

import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";

import plant_pot1 from '../assets/plant_pot1.jpg';
import plant_pot2 from '../assets/plant_pot2.jpg';

const SubBody = () => {
  return (
    <>
        <div className='w-full h-full flex flex-col'>

          <div className='border border-[#091E12] bg-[#0a2b18] w-full h-50 flex items-center justify-center px-20 py-7 shrink-0'>

            <div className='shrink-0 border-r-2 border-[#E8F5E9] h-full w-[30%] flex items-center justify-center text-white gap-3'>
              <TbTruckDelivery className='text-7xl' />

              <div className='w-fit h-full flex flex-col items-start justify-center gap-2'>
                <h1 className='text-3xl font-semibold font-[Inter]'>Free delivery</h1>
                <p>we provide free delivery across the country, city, world.</p>
              </div>

            </div>

            <div className='shrink-0 border-r-2 border-[#E8F5E9] h-full w-[35%] pl-6 flex items-center justify-center text-white gap-3'>
              <MdPayment className='text-7xl' />

              <div className='w-fit h-full flex flex-col items-start justify-center gap-2'>
                <h1 className='text-3xl font-semibold font-[Inter]'>Safe payments</h1>
                <p>we provide safe payments option, to prevent ciber crime.</p>
              </div>

            </div>

            <div className='shrink-0 h-full w-[30%] flex pl-6 items-center justify-center text-white gap-3'>
              <LuHeartHandshake className='text-7xl' />

              <div className='w-fit h-full flex flex-col items-start justify-center gap-2'>
                <h1 className='text-3xl font-semibold font-[Inter]'>Friendly service</h1>
                <p>we provide friendly service to all users with 24/7 customer support.</p>
              </div>

            </div>

          </div>

          <div className='w-full h-full p-20 flex items-center justify-center gap-20'>

            <div className=' w-[40%] h-80 rounded-3xl flex items-center justify-center bg-[#E8F5E9] overflow-hidden shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>

              <span className='w-[50%] h-full flex flex-col items-start pl-10 justify-around shrink-0 bg-white'>

                <h3 className='text-2xl font-semibold font-[Playfair_Display] w-full h-fit pt-5'>
                  Big Sale Products
                </h3>

                  <div className='w-fit h-fit flex flex-col gap-3'>
                    <h1 className='text-5xl font-semibold font-[Inter]'>Indoor</h1>
                    <h1 className='text-5xl font-semibold font-[Inter]'>Plants</h1>
                  </div>

                <button className='w-fit h-fit flex mb-4 items-center justify-center px-4 py-2 text-xl font-semibold border rounded-3xl transition-all duration-300 hover:bg-[#0f331f] hover:text-white'>
                  Shop Now
                </button>

              </span>

              <span className='w-[50%] h-full bg-center bg-cover' style={{backgroundImage: `url(${plant_pot1})`}}>

              </span>

            </div>

            <div className=' w-[40%] h-80 rounded-3xl flex items-center justify-center bg-[#E8F5E9] overflow-hidden shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>

              <span className='w-[50%] h-full flex flex-col items-start pl-10 justify-around shrink-0 bg-white'>

                <h3 className='text-2xl font-semibold font-[Playfair_Display] w-full h-fit pt-5'>
                   Top Products
                </h3>

                  <div className='w-fit h-fit flex flex-col gap-3'>
                    <h1 className='text-5xl font-semibold font-[Inter]'>Herbal</h1>
                    <h1 className='text-5xl font-semibold font-[Inter]'>Plants</h1>
                  </div>

                <button className='w-fit h-fit flex mb-4 items-center justify-center px-4 py-2 text-xl font-semibold border rounded-3xl transition-all duration-300 hover:bg-[#0f331f] hover:text-white'>
                  Shop Now
                </button>

              </span>

              <span className='w-[50%] h-full bg-center bg-cover' style={{backgroundImage: `url(${plant_pot2})`}}>

              </span>

            </div>

          </div>

        </div>
    </>
  )
}

export default SubBody