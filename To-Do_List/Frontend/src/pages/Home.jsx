import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

const Home = () => {
  return (
    <>
        <section className='h-full w-full bg-amber-100 rounded-3xl p-4 flex flex-col'>
          
          {/*  Profile Header  */}
          <div className='w-[30%] h-[30%] border-gray-500 rounded-2xl shadow-gray-400 shadow-[0_0_8px_2px_rgba(0,0,0,0.06)] flex items-center justify-center gap-3'>
            
            {/* Profile Image Circle */}
            <span className='w-30 h-30 border border-gray-400 rounded-[50%] relative'>
              {/* User Image Here */}
            </span>

            <span className='w-50 border p-3'>
              <h1 className='text-2xl font-semibold'>Anant Kore</h1>
              <h1 className='text-sm font-semibold'>B.C.A student</h1>

              {/* Links */}

            </span>
          </div>


          <div className='w-full h-fit p-3 flex gap-8 relative'>

            {/* Left Section */}
              <span className='w-[20%] h-100 shrink-0 border-gray-400 rounded-2xl flex flex-col items-center justify-center bg-linear-to-b from-[#6367FF] via-[#8494FF] to-[#C9BEFF] shadow-gray-600 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)] mt-10'>

                <div className='w-full flex flex-col items-center relative -top-9'>
                  
                  <h1 className='w-[80%] pl-4 font-bold text-gray-700' >Create Task</h1>
                  
                  <button className='w-[75%] h-20 rounded-2xl border border-amber-50 flex items-center justify-center gap-2 text-2xl font-semibold transition-all duration-200 text-amber-50 hover:text-gray-500 hover:bg-amber-50'>
                    <FaPlusCircle className='relative mt-0.5 ' />
                    Add New Task
                  </button>

                </div>

                <div className='w-full h-fit flex items-center flex-col justify-center gap-2 '>
                
                  <button className='w-[75%] h-fit p-1.5 border border-amber-50 rounded-2xl text-xl font-bold transition-all duration-200 bg-none text-amber-50 hover:text-gray-500 hover:bg-amber-50'>
                    Today
                  </button>
                  <button className='w-[75%] h-fit p-1.5 border border-amber-50 rounded-2xl text-xl font-bold transition-all duration-200 bg-none text-amber-50 hover:text-gray-500 hover:bg-amber-50'>
                    Upcoming
                  </button>
                  <button className='w-[75%] h-fit p-1.5 border border-amber-50 rounded-2xl text-xl font-bold transition-all duration-200 bg-none text-amber-50 hover:text-gray-500 hover:bg-amber-50'>
                    Completed
                  </button>

                </div>

              </span>

              <div className='w-[19.5%] h-16 border rounded-2xl absolute bottom-3 border-gray-400'>
                <button className='w-full h-full flex items-center justify-center text-2xl font-semibold cursor-pointer'>Remove All Task's</button>
              </div>

            {/* Right Section */}
              <span className='w-full h-120 p-4 border-gray-400 rounded-2xl bg-linear-to-b from-[#6367FF] via-[#8494FF] to-[#C9BEFF] shadow-gray-600 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)] mt-10'>
                  <ul className='w-full h-full flex flex-col items-center gap-5 p-4'>
                    
                    <li className='flex items-center justify-between w-full h-fit p-3 border border-gray-600 rounded-2xl bg-amber-50 text-xl font-semibold shadow-gray-600 shadow-[3px_3px_12px_2px_rgba(0,0,0,0.06)]'>
                      Making notes

                      <span className='w-fit h-full flex items-center justify-between max-w-100 gap-4'>
                        <button className='w-30 h-8 border rounded-sm font-bold transition-all duration-200 hover:bg-gray-500 bg-gray-400 text-white'>shedule</button>
                        <button className='w-30 h-8 border rounded-sm font-bold transition-all duration-200 hover:bg-orange-500 bg-orange-400 text-white'>details</button>
                        <button className='w-30 h-8 border rounded-sm font-bold transition-all duration-200 hover:bg-green-500 bg-green-400 text-white'>complete</button>
              
                      </span>
                    </li>

                  </ul>
              </span>
          </div>
        </section>
    </>
  )
}

export default Home