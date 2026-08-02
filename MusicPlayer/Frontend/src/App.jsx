import React, { useState, useEffect, useRef } from 'react';
import { songService } from './service/api';

import { CiPause1 } from "react-icons/ci";
import { PiFastForwardThin } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { RxLoop } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const API_BASE_URL = "http://localhost:5000"; 

  useEffect(() => {
    if (!currentSong || !currentSong.id || !audioRef.current) return;

    let isCurrent = true;
    let playPromise = null;

    try {

      const streamUrl = songService.getStreamUrl(currentSong.id);
      console.log("🎯 Streaming audio from URL:", streamUrl);

      audioRef.current.src = `${API_BASE_URL}/api/stream/${currentSong.id}`;
      
      playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (isCurrent) setIsPlaying(true);
          })
          .catch((error) => {
            if (error.name !== "AbortError") {
              console.error("Playback failed:", error);
            }
          });
      }
    } catch (e) {
      console.error("Error setting audio source:", e);
    }

    return () => {
      isCurrent = false;
      if (playPromise !== null && audioRef.current) {
        playPromise.then(() => {
          audioRef.current.pause();
        }).catch(() => {});
      }
    };
  }, [currentSong]);

  const togglePlay = () => {
    if (!currentSong || !audioRef.current) return;
   
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("Play failed via toggle:", err));
    }
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        setLoading(true);
        const response = await songService.getSongs();

        // console.log("response data:", response.data);
        
        if (response.data && response.data.success) {
          setSongs(response.data.data);
        } else {
          setError("Failed to parse music library data.");
        }
      } catch (err) {
        console.error("Error fetching tracks from server:", err);
        setError("Could not connect to the music server.");
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, []);

  return (
    <>
    <audio ref={audioRef} preload="none" />
      <section className='h-screen w-screen flex items-center justify-center p-5 md:p-10 lg:p-20 bg-linear-to-t from-[#403d88ee] via-[#8B639B] to-[#AF719D]'>

        <div 
          className='
            w-full h-full 
            border-none 
            rounded-3xl 
            bg-[#8B639B]/30 
            flex
            flex-col md:flex-row
            items-center
            p-5 
            gap-6 md:gap-10
            shadow-[8px_8px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(255,255,255,0.15)]
            overflow-y-auto md:overflow-visible
        '>
          
          <div 
            className='
              w-full md:w-[40%] 
              h-[45%] md:h-full
              border-2 md:border
              border-none
              rounded-3xl
              shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]
              p-1 flex
              flex-col
              items-center
              gap-3 md:gap-5 px-5
              shrink-0 md:shrink
          '>

            <h1 
              className='
                w-full h-fit 
                text-xl md:text-2xl 
                font-semibold
                pl-4 md:pl-8 pt-3
                text-gray-700
                font-serif
                shrink-0
            '>
              Your Songs....
            </h1>

            <ul 
              className='
                  w-full h-full
                  border-none mb-3 md:mb-5 
                  flex flex-col
                  items-center
                  justify-center
                  overflow-x-hidden
                  overflow-y-auto
                  scrollbar-none
                  gap-3 pt-2 md:pt-4
                  text-white
            '>
              {songs.map(
                (song)=>{
                  const isSelected = currentSong?.id === song.id;

                  return(
                    <li
                      key={song.id}
                      onClick={() => setCurrentSong(song)}
                      className={`
                        w-full h-13 border rounded-2xl shrink-0 flex items-center gap-5 p-1 px-3 cursor-pointer transition-all
                        ${isSelected ? 'bg-white/20 border-white font-bold' : 'border-white/40 hover:bg-white/10'}
                      `}
                    >
                      <div className={`h-full w-11 border rounded-[50%] shrink-0 ${isSelected ? 'animate-spin [animation-duration:5s]' : ''}`}></div>
                      <h1 className='text-lg md:text-xl font-semibold w-full truncate'>{song.title}</h1>

                      <button 
                        className='h-full w-11 shrink-0 flex items-center justify-center'
                        onClick={(e) => {
                          e.stopPropagation(); 
                          console.log("Liked:", song.title);
                        }}
                      >
                        <CiHeart size={30} />
                      </button>
                    </li>
                  )
                }
              )}
            </ul>

          </div>

          <div
            className='
              border md:border-2
              w-full h-[50%]
              md:w-[55%] md:h-full
              border-none 
              rounded-3xl
              shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]
              p-1 flex
              flex-col
              items-center
              gap-3 md:gap-5 px-5
              shrink-0 md:shrink
          '>
            <div className='w-36 h-36 md:w-70 md:h-70 border rounded-[50%] md:mt-10 bg-gray-400 border-gray-400 shrink-0'>
              {currentSong?.coverUrl && <img src={currentSong.coverUrl} alt={currentSong.title} className="w-full h-full object-cover" />}
            </div>

            <div className='w-[85%] h-fit border text-white rounded-4xl shrink-0'>
              <div className="w-full max-w-xl mx-auto p-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full cursor-pointer"
                />

                <p className="mt-1 text-center text-xs md:text-sm">
                  {currentSong ? currentSong.title : "Select a song"}
                </p>
              </div>
            </div>

            <div className='w-full h-20 md:h-30 flex items-center justify-around text-white mt-2 md:mt-0 shrink-0'>

              <button className='w-12 h-12 md:h-18 md:w-18 rounded-[50%] flex items-center justify-center'>
                <RxLoop className='text-[30px] md:text-[50px]' />
              </button>

              <div className='w-[60%] md:w-[50%] h-full flex items-center justify-around'>

                <button className='w-14 h-14 md:w-20 md:h-20 rounded-[50%] flex items-center justify-center'>
                  <PiFastForwardThin className=' transform rotate-180 text-[35px] md:text-[55px]' />
                </button>

                <button className='w-14 h-14 md:w-20 md:h-20 rounded-[50%] flex items-center justify-center' 
                onClick={togglePlay}>
                  <CiPause1 className='text-[30px] md:text-[50px]' />
                </button>

                <button
                  onClick={()=>{console.log("Current song:",audioRef);
                  }}
                  className='w-14 h-14 md:w-20 md:h-20 rounded-[50%] flex items-center justify-center'>
                  <PiFastForwardThin className='text-[35px] md:text-[55px]' />
                </button>
              </div>

              <button className='w-12 h-12 md:w-18 md:h-18 rounded-[50%] flex items-center justify-center'>
                <IoMenu className='text-[30px] md:text-[50px]' />
              </button>
            
            </div>
          </div>
        </div>
      </section>
      </>
  );
}