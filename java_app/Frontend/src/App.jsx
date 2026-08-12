import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import SubBody from './pages/SubBody'
import Products from './pages/Products'

function App() {

  return (
    <>
      <section className='w-screen h-screen overflow-x-hidden overflow-y-auto scrollbar-none bg-[#E8F5E9]'>

      <Home />
      <SubBody />
      <Products />
       <div className='w-full h-full bg-[#E8F5E9] flex flex-col'>

        <div className='w-full h-70 border'>

        </div>

       </div>
      </section>
    </>
  )
}

export default App
