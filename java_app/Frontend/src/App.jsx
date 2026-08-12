import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import SubBody from './pages/SubBody'

function App() {

  return (
    <>
      <section className='w-screen h-screen overflow-x-hidden overflow-y-auto scrollbar-none'>

      <Home />
      <SubBody />

      <div className='w-full h-full'>

      </div>
        
      </section>
    </>
  )
}

export default App
