import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../component/header/Header";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Singup from "../Page/singup/Singup";
import Skills from "../Page/skills/Skills";
import Footer from "../component/footer/Footer";
import Aboutus from "../Page/Aboutus/Aboutus";
import Service from "../Page/Service/Service";
import Contect from "../Page/Contact/Contect";
import Training from "../Page/Training/training";

const Routess = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Contact" element={<Contect />} />
        <Route path="/training" element={<Training />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Routess;
