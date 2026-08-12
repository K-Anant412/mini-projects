import { useState } from 'react'
import './App.css'

import Home from './pages/Home'

function App() {

  return (
    <>
      <section className='w-screen h-screen overflow-x-hidden overflow-y-auto scrollbar-none'>

       <Home />

        <div className='w-full h-full bg-[#E8F5E9]'>

        </div>
      </section>
    </>
  )
}

export default App
