import React from "react";
import about1 from "../image/about1.jpg";
import jone from "../image/jone.avif";
import jonny from "../image/jonny.avif";
import Alis from "../image/asali.avif";

const Aboutus = () => {
  const data = [
    {
      name: "Raj",
      dis: "With a strong background in software development, Raj excels at building robust, scalable systems.",
      img: jone,
      role: "CTO",
    },
    {
      name: "Emily",
      dis: "Emily's expertise in marketing drives our brand forward with creative and impactful campaigns.",
      img: jonny,
      role: "CMO",
    },
    {
      name: "Asali",
      dis: "David's strategic insights and financial acumen ensure our company’s growth and sustainability.",
      img: Alis,
      role: "CFO",
    },
  ];
  return (
    <div>
      <h className="flex justify-center font-bold text-[40px]">About Us</h>
      <div className="flex justify-between p-[50px]">
        <div className="w-[60%]">
          <p>
            Go Hackathon comprises of eminent Industry professionals, educators
            and students meant to nurture talent among budding tech
            professional. Industry today is looking for talented students who
            are equipped and experience with advanced skills, software, attitude
            and updated industry best practices. We create an eco-system of
            industry academia partnership and help in continuous and sustainable
            development of innovative ideas, which are impactful for the growing
            economy and society. Go hackathon thrives to provide best nurturing,
            mentorship, skills and professional opportunities to its members and
            participants.We conduct series of events, seminars, hackathons,
            internships and Projects.{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <img className="h-[200px] rounded-3xl mr-[60px]" src={about1}></img>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          {data.map((p) => (
            <div class="card bg-base-100 w-96 shadow-xl items-center cursor-pointer text-center pt-10 pb-10">
              <figure class="px-10 pt-5">
                <img src={p.img} alt="Shoes" class=" rounded-3xl" />
              </figure>
              <h2 class="card-title font-bold text-[20px] py-4">{p.name}</h2>

              <div class="card-body items-center text-center overflow-auto">
                <p>{p.dis}</p>
                <div className="flex justify-end">
                  <p className=" font-boldt text-black">
                    {p.role}:- {p.name}
                  </p>

                  {/* <div class="card-actions mx-[80%]">
                  <p className="">
                    {p.role}:- {p.name}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
