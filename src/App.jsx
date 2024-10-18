import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
