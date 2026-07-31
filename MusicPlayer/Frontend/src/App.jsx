import React, { useState, useEffect } from 'react';
import { songService } from './service/api';

import { CiPause1 } from "react-icons/ci";
import { PiFastForwardThin } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { RxLoop } from "react-icons/rx";

export default function App() {
  
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try{
        setLoading(true);

        const response = await songService.getSongs();

        if (response.data && response.data.success) {
          setSongs(response.data.data);
        }else{
          setError("failes to parse music library data.")
        }

        console.log(response.data.data);
        
      }catch(err){
        console.error("Error fetching tracks from server:", err);
        setError("Could not connect to the music server.");
      }finally{
        setLoading(false);
      }
    };
    fetchSongs();
  }, [])
  

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
            gap-10
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
              gap-5 px-5
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
              Your Songs....
            </h1>

            <ul 
              className='
                  w-full h-full
                  border-none mb-5 
                  flex flex-col
                  items-center
                  justify-center
                  overflow-x-hidden
                  overflow-y-auto
                  scrollbar-none
                  gap-3 pt-4
                  text-white
            '>
              <li className='w-full h-13 border rounded-2xl shrink-0'> </li>
            </ul>

          </span>

          <span
            className='
              w-[55%] h-full
              border-none 
              rounded-3xl
              shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]
              p-1 flex
              flex-col
              items-center
              gap-5 px-5
          '>
            <div className='w-70 h-70 border rounded-[50%] mt-10 bg-gray-400 border-gray-400'>

            </div>

            <div className='w-[85%] h-12 border rounded-4xl'>
              <div className="w-full max-w-xl mx-auto p-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full cursor-pointer"
                />

                <p className="mt-2 text-center">not</p>
              </div>
            </div>

            <div className='w-full h-30 flex items-center justify-around text-white'>

              <button className='w-18 h-18 rounded-[50%] flex items-center justify-center'>
                <RxLoop size={50} />
              </button>

              <span className='w-[50%] h-full flex items-center justify-around'>

                <button className='w-20 h-20 rounded-[50%] flex items-center justify-center'>
                  <PiFastForwardThin size={55} className=' transform rotate-180' />
                </button>

                <button className='w-20 h-20 rounded-[50%] flex items-center justify-center'>
                  <CiPause1 size={50} />
                </button>

                <button className='w-20 h-20 rounded-[50%] flex items-center justify-center'>
                  <PiFastForwardThin size={55} />
                </button>
              </span>

              <button className='w-18 h-18 rounded-[50%] flex items-center justify-center'>
                <IoMenu size={50} />
              </button>
            
            </div>
          </span>
        </div>
      </section>
    </>
  );
}