import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='w-full h-30 text-3xl font-bold bg-gray-500 text-white'>Hello world</h1>
    </>
  )
}

export default App
