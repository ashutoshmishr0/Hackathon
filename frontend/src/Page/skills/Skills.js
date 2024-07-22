import React from "react";
import "./skills.css";
import fullstack from "../image/FullStack.jpg";
import cloud from "../image/cloud-infra.jpg";
import marketing from "../image/digital-marketing.jpg";

const skills = () => {
  return (
    <div className="skills-all">
      <div className="skill-header">
        <h1 className=" font-bold  text-[30px]">Popular Skills</h1>
        <p className=" font-extralight text-sm">
          Learn, Practice, and Test Your Skills with Our Courses
        </p>
      </div>

      <div className="skill-card">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={fullstack} alt="card-image" />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Full Stack Development
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Students receive a thorough introduction to database and full
              stack development in this course. With the technical understanding
              of front-end and back-end programming, students will discover the
              nuances of data structures and algorithms.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] w-full focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>

        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={cloud} alt="card-image" />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Cloud Infrastructures
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Develop your knowledge of containers, deployment strategies, and
              immutable infrastructure. Create a portfolio for cloud computing
              containing labs, projects, and a capstone project. Discover AWS,
              Azure, GCP, and more.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] w-full focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>

        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={marketing} />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Digital Marketing
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Are you ready to harness the power of Digital Marketing to
              supercharge your brand's online presence? Our Comprehensive
              Digital Marketing Mastery course is designed to equip you with the
              skills, strategies, and insights needed to excel in the dynamic
              world of digital marketing.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] w-full focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
