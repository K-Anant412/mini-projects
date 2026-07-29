import React, { useState } from 'react';

export default function App() {
  return (
    <>
      <section className='h-screen w-screen flex items-center justify-center p-10 lg:p-20 bg-linear-to-t from-[#403d88ee] via-[#8B639B] to-[#AF719D]'>

        <div 
          className='
            w-full h-full 
            border-none 
            rounded-3xl 
            bg-[#8B639B]/30 
            flex
            items-center
            p-5 
            shadow-[8px_8px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(255,255,255,0.15)]
        '>
          
          <span 
            className='
              w-[40%] h-full
              border-none 
              rounded-3xl
              shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]
              p-1 flex
              flex-col
              items-center
              gap-5
          '>

            <h1 
              className='
                w-full h-fit 
                text-2xl 
                font-semibold
                pl-8 pt-3
                text-gray-700
                font-serif
                shrink-0
            '>
              Your Playlists....
            </h1>

            <ul 
              className='

            '>
              
            </ul>

          </span>

        </div>

      </section>
    </>
  );
}