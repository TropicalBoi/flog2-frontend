import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ProfileUser from './Components/ProfilePage/ProfileUser'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Components/Landing/Landing'


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Landing />
      <Routes>
        <Route path="/ProfileUser" element={<ProfileUser />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
