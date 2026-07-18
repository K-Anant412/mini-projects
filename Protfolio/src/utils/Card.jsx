import React from 'react'

const Card = ({name, image, sub="just info"}) => {
  return (
    <>
        <div className="hover-3d">

            <figure className="w-80 h-100 rounded-2xl shadow-2xl border border-white/70 bg-linear-to-b from-gray-400 via-gray-300 to-gray-200">
                <div className='p-3 w-full h-full flex flex-col items-center pt-10'>
                    <span className='w-[80%] h-[60%] shadow-black shadow-inner rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${image})`}}></span>
                      <h1 className='w-[80%] h-10 border-none flex items-center justify-center text-2xl font-bold mt-4 rounded-2xl bg-[#F4F4F1] shadow-gray-500 shadow-inner text-gray-600'>{name}</h1>
                    <span className='w-[80%] h-16 mt-4 rounded-2xl bg-[#F4F4F2] shadow-gray-500 shadow-inner text-gray-600 p-2'>{sub}</span>
                </div>
            </figure>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </>
  )
}

export default Card