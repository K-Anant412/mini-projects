import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='w-screen h-screen flex items-center justify-center p-10 bg-linear-to-b from-[#6367FF] via-[#8494FF] to-[#C9BEFF]'>
        <Login />
      </section>
    </>
  )
}

export default App
