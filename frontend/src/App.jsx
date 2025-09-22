import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './component/landingPage/Home';
import About from './component/landingPage/About';
import Footer from './component/landingPage/Footer';
import './App.css'

function App() {
 
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
