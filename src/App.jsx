import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ProfileUser from './Components/ProfilePage/ProfileUser'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Components/Landing/Landing'
import Activities from './Components/Activities/Activities'


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ProfileUser" element={<ProfileUser />} />
        <Route path="/Activities" element={<Activities />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
