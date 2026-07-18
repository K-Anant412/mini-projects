import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'

import Home from './pages/Home'; 
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='w-screen h-screen overflow-hidden flex flex-col gap-6 items-center p-10 bg-linear-to-t from-gray-100 via-gray-200 to-gray-300'>
      
      <Navbar />

      <section className='relative w-[85%] h-[85%] border-none rounded-xl  shadow-[0_0_20px_rgba(0,0,0,0.12)] border border-white/70 overflow-hidden bg-[#F4F4F2]'>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

        {/* <div className='w-full h-30 absolute bg-linear-to-l from-gray-500 via-gray-400 to-gray-300 bottom-0.5 z-10'></div> */}

      </section>

    </section>
    </>
  )
}

export default App
