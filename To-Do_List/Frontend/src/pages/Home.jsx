import { useEffect, useState } from "react";
import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { taskService, authService } from "../service/api";
import bg1 from '../assets/bg1.jpg'
import profile1 from '../assets/profile1.jpg'

const Home = () => {

  // const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      const response = async() =>{
        setLoading(true);

        try {
          console.log(response.data.data);
          
        } catch (error) {
          console.log(error);
          
        }
        
      }

  }, [])
  
  const tasks = [
    "making notes",
    "cooking food",
    "reading book",
    "preparing for exams",
    "mathematics",
    "computer networks",
    "DBMS",
    "statistics",
    "environmental science"
  ]

  return(
    <>
        <section className="w-full h-full flex flex-col md:flex-row items-center border border-white rounded-xl md:rounded-2xl overflow-hidden">
          {/* navbar */}
          <div className="shrink-0 md:h-full md:w-[20%] flex flex-col items-center justify-center gap-6 border-r py-10 border-white shadow-gray-400 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]">
            {/* profile card */}
            <div 
              className="border w-[80%] h-53 rounded-t-3xl bg-center bg-cover shrink-0 border-none  shadow-[8px_8px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(255,255,255,0.15)]"
              style={{backgroundImage: `url(${profile1})`}}
            >
            </div>
            {/* task manager */}
            <div className="border w-[80%] h-full flex flex-col items-center justify-center bg-white/20 backdrop-blur-3xl rounded-b-3xl border-none gap-5 shadow-[8px_8px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(255,255,255,0.15)] ">
              <button className="border w-[85%] h-20 rounded-3xl flex items-center justify-center text-2xl font-semibold cursor-pointer shadow-gray-500 shadow-[inset_0_0_6px_2px_rgba(0,0,0,0.02)] border-none text-gray-700 transition-all duration-200 hover:bg-white/10 ">
                create new task
              </button>

              <button className="border w-[85%] h-10 rounded-3xl flex items-center justify-center text-2xl font-semibold cursor-pointer shadow-gray-500 shadow-[inset_0_0_6px_2px_rgba(0,0,0,0.02)] border-none text-gray-700 transition-all duration-200 hover:bg-white/10 ">
                ongoing
              </button>

              <button className="border w-[85%] h-10 rounded-3xl flex items-center justify-center text-2xl font-semibold cursor-pointer shadow-gray-500 shadow-[inset_0_0_6px_2px_rgba(0,0,0,0.02)] border-none text-gray-700 transition-all duration-200 hover:bg-white/10 ">
                upcoming
              </button>

              <button className="border w-[85%] h-10 rounded-3xl flex items-center justify-center text-2xl font-semibold cursor-pointer shadow-gray-500 shadow-[inset_0_0_6px_2px_rgba(0,0,0,0.02)] border-none text-gray-700 transition-all duration-200 hover:bg-white/10 ">
                completed
              </button>

              
            </div>

          </div>
          {/* right side task panel */}
          <div className="w-full h-full border-none shadow-gray-400 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)] p-10">
            {/* main dashboard */}
            <ul className="border flex overflow-x-hidden overflow-y-auto scrollbar-none flex-col gap-8 p-10 w-full h-full rounded-3xl shadow-[8px_8px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(255,255,255,0.15)] border-none bg-white/20">
              
              {/* task list */}
              {tasks.map(
                (task, index) => {
                  return(
                    <li key={index} className="shrink-0 border w-full h-18 flex items-center p-2 justify-end rounded-3xl border-none shadow-gray-600 shadow-[0_0_6px_2px_rgba(0,0,0,0.08)]">
                      {/* title */}
                      <h1 className="w-full h-full flex items-center truncate text-2xl px-5 font-semibold">{task}</h1>
                      {/* buttons for control */}
                      <div className="w-fit h-full flex items-center justify-center gap-4 mx-3">

                        <button className="border w-26 h-10 text-xl font-medium rounded-2xl flex items-center justify-center pb-1 transition-all duration-200 bg-amber-400/40 hover:bg-amber-600/40  text-gray-700 hover:text-gray-100">
                          details
                        </button>
                        <button className="border w-26 h-10 text-xl font-medium rounded-2xl flex items-center justify-center pb-1 transition-all duration-200 bg-green-400/40 hover:bg-green-600/40  text-gray-700 hover:text-gray-100">
                          complete
                        </button>

                      </div>
                    </li>
                  )
                }
              )}

            </ul>
          </div>
        </section>
    </>
  )
}

export default Home