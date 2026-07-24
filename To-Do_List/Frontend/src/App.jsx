import { useContext, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import './App.css'

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext( AuthContext );

  console.log(user);

  return user ? children : <Navigate to='/login' replace />
}

function App() {

  return (
    <>
      <section className='w-screen h-screen flex items-center justify-center p-10 bg-linear-to-b from-[#6367FF] via-[#8494FF] to-[#C9BEFF]'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </section>
    </>
  )
}

export default App;
