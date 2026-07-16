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
    <section className='w-screen h-screen overflow-hidden flex flex-col gap-6 items-center p-10 bg-linear-to-b from-white via-zinc-50 to-zinc-200'>
      
      <Navbar />

      <section className='w-[85%] h-[85%] border-none rounded-xl  shadow-[0_0_20px_rgba(0,0,0,0.12)] border border-white/70'>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

      </section>

    </section>
    </>
  )
}

export default App
