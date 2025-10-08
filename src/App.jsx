import React from 'react'
import Navbar from './Navbar';
import Work from './Work';
import Stripes from './Components/Stripes';
import Products from './Components/Products';
import Marques from './Components/Marques';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Project from './Page/project';
import ResumeDownload from './Components/ResumeDawonload';
import Certificate from './Components/Certificate';
function App() {
  return (
    <div className='w-full h-screen text-white  bg-img font-["satoshi"]'>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="project" element={<Project/>}/>
        <Route path="/Resume-Dawonload" element={<ResumeDownload />} />
        <Route path="/Certificate" element={<Certificate />} />

       </Routes>     
      </div>
  )
}

export default App;