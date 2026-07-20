import React from 'react'
import image from '../assets/image.jpg'

const Contact = () => {
  return (
    <>
      <div className='h-full w-full p-3 flex items-center relative z-50'>
        
        <div className='w-[48%] h-full shrink-0 flex flex-col p-3 items-center justify-center'>
          <span className='w-[56%] h-[60%] border-none rounded-[50%] relative -left-10 shadow-gray-600 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)] bg-cover bg-center' style={{backgroundImage: `url(${image})`}}></span>
          {/* <h1 className='w-[40%] h-fit p-2 border text-2xl flex items-center justify-center font-semibold relative -left-10 mt-5'>___Anant Kore___</h1> */}
        </div>

        <div className=' w-full h-[80%] absolute shrink-0 flex flex-col p-3 border-none -rotate-45 left-70 bottom-1 bg-[#E3DDD5] shadow-gray-600 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]'></div>

      </div>
    </>
  )
}

export default Contact