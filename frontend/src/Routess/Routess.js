
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Header from '../component/header/Header';
import Navbar from '../component/navbar/Navbar';
import Home from '../Page/Home/Home';
import Login from '../Page/Login/Login';
import Singup from '../Page/singup/Singup';




const Routess = () => {
  return (
        
        <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        
      </Routes>
      <Navbar/>
      </div>
   
       
      
    
  )
}

export default Routess