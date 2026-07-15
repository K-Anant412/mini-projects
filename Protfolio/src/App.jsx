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
    <section className='w-screen h-screen overflow-hidden flex flex-col gap-6 items-center p-10'>
      
      <Navbar />

      <section className='w-[85%] h-[85%] border-2 overflow-hidden rounded-xl'>
        
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
