import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../component/header/Header";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Singup from "../Page/singup/Singup";
import Footer from "../component/footer/Footer";

const Routess = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Routess;
