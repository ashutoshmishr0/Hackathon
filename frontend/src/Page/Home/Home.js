import React from "react";
import "./home.css";
import Skills from "../skills/Skills";
import pic1 from "../image/MERN.jpg";
import coer from "../image/coer.jpg";
import graficera from "../image/graficera.png";
import gennext from "../image/gennext.png";
import app from "../image/app.jpg";
import migra from "../image/migra.png";

import About from "../About/About";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* first componet of banners */}
      <div className="fisrt-component">
        <div className="left">
          <h1 className=" font-bold text-[50px]">WEBINAR</h1>
          <h6 className="text-[20px]">on</h6>
          <h1 className=" font-serif text-[30px]">
            MERN full stack Development
          </h1>
          <h2>collaborate,innovate,and Hack Your Way to Success</h2>
          <p>a collection of technologies that help developers build </p>
          <Link to="/signup">
            <button className="register-button">Register Now</button>
          </Link>
        </div>
        <div className="right ">
          <img
            className="home-img box-shadow: 10px 10px 40px; rounded-2xl h-60"
            src={pic1}
            alt="External Image"
          />
        </div>
      </div>

      {/* skills */}
      <Skills />

      {/* second component of corporate and educational Partners */}

      <div className="corporate-partners">
        <div className="top-bar py-5">
          <h1 className=" font-bold text-[30px]">
            Corporate And Educational Partners
          </h1>
          <p className=" font-sans">
            Some of our collection with top industrries and Educational
            Institutes.
          </p>
        </div>
        <div class="gridcontainer">
          <div className="box1">
            <div class="item">
              <img className=" h-16" src={coer}></img>
            </div>
            <div class="item">
              <img className="h-12" src={graficera}></img>
            </div>
            <div class="item">
              <img className="h-14 " src={gennext}></img>
            </div>
          </div>
          <div className="box1">
            <div class="item">
              <img className=" h-16" src={app}></img>
            </div>
            <div class="item">
              <img className="h-16" src={migra}></img>
            </div>
            <div class="item">
              <img className="h-16 " src={coer}></img>
            </div>
          </div>
        </div>
      </div>

      <About />
    </div>
  );
};

export default Home;
