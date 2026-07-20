import React from 'react'

const ProjectCard = ({ title, sub, frontend_framework, backend_framework, database, repo_link, repo_title}) => {
  return (
    <>
      <div className='relative flex items-center w-[90%] h-[90%] gap-10 border shrink-0 rounded-2xl border-none bg-[#F4F4F2] shadow-gray-500 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)] text-gray-600 p-4'>
        
        <h1 className='w-100 h-15 flex items-center justify-center rounded-4xl absolute left-9 top-8 text-2xl font-semibold shadow-xl border border-white/70 bg-gray-300'>
          {title}
        </h1>

        <div className='w-[48%] h-fit p-2 flex flex-col items-center relative top-10 left-5'>

          <h2 className='relative w-full h-fit p-1 font-medium'>{sub}</h2>
          
          <h1 className='relative border-t-2 mt-2 pt-1 text-[19px] font-semibold w-full'>Key Specs:</h1>
            <div className='flex flex-col gap-1 pl-2'>
              <p>-Secure user authentication and role-based access control.</p>
              <p>-Full CRUD (Create, Read, Update, Delete) capabilities for managing comprehensive employee profiles.</p>
            </div>
          
          <div className='w-full flex flex-col border-t-2 mt-2 pt-2 gap-2'>
            <h1 className='relative text-[19px] font-semibold flex gap-1.5'>
              Frontend: <p className='font-normal'>{frontend_framework}</p>
            </h1>
            <h1 className='relative text-[19px] font-semibold flex gap-1.5'>
              Backend: <p className='font-normal'>{backend_framework}</p>
            </h1>
            <h1 className='relative text-[19px] font-semibold flex gap-1.5'>
              Database: <p className='font-normal'>{database}</p>
            </h1>
          </div>
          
        </div>

        <div className='w-[48%] h-full flex flex-col gap-4'>

          <div className='p-3 w-full h-[70%] border-none rounded-2xl bg-gray-300'>
            <div className='w-full h-full bg-[#F4F4F2] rounded-2xl shadow-black shadow-inner'></div>
          </div>

          <div className='p-3 w-full h-[25%] border-none rounded-2xl bg-gray-300'>
            <div className='w-full h-full bg-[#F4F4F2] rounded-2xl shadow-gray-800 shadow-inner flex items-center gap-3 p-3'>
              <h1 className='text-2xl font-bold'>Repo Link: <a href={repo_link} className='font-normal text-blue-400 transition-all duration-200 hover:text-blue-500 italic'>{repo_title}</a> </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard