import React from "react";
import "./about.css";
import about_img from "../image/about_img.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="text">
        <h1 className=" font-bold text-[40px]">About GoHackathon</h1>
        <p className="text-[15px]">
          Go Hackathon comprises of eminent Industry professionals, educators
          and students meant to nurture talent among budding tech professional.
          Industry today is looking for talented students who are equipped and
          experience with advanced skills, software, attitude and updated
          industry best practices. We create an eco-system of industry academia
          partnership and help in continuous and sustainable development of
          innovative ideas, which are impactful for the growing economy and
          society. Go hackathon thrives to provide best nurturing, mentorship,
          skills and professional opportunities to its members and
          participants.We conduct series of events, seminars, hackathons,
          internships and Projects.
        </p>
      </div>
      <div className="image">
        <img src={about_img} className="about-img h-[225px]"></img>
      </div>
    </div>
  );
};

export default About;
