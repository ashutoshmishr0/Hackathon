import React from "react";
import "./skills.css";
import fullstack from "../image/FullStack.jpg";
import cloud from "../image/cloud-infra.jpg";
import marketing from "../image/digital-marketing.jpg";
import cyber from "../image/react5.jpg";
import Ai from "../image/react4.jfif";
import ui from "../image/react6.jpg";

const skills = () => {
  const data = [
    {
      heading: "Full Stack Development",
      discription:
        "This course thoroughly introduces database and full stack development, covering front-end and back-end programming, and exploring the nuances of data structures and algorithms.",
      Img: fullstack,
    },
    {
      heading: "Cloud Infrastructures",
      discription:
        "Develop your knowledge of containers, deployment strategies, and immutable infrastructure. Create a portfolio for cloud computing containing labs, projects, and a capstone project. Discover AWS, Azure, GCP, and more.",
      Img: cloud,
    },
    {
      heading: "Digital Marketing",
      discription:
        "Are you ready to harness the power of Digital Marketing to supercharge your brand's online presence? Our Comprehensive Digital Marketing Mastery course is designed to equip you with the skills, strategies, and insights needed to excel in the dynamic world of digital marketing.",
      Img: marketing,
    },
    {
      heading: "AI-ML",
      discription:
        "Unlock the potential of Artificial Intelligence and Machine Learning with our intensive AI-ML Masterclass. Whether you're a seasoned professional or just starting out, our course offers a deep dive into the latest AI algorithms, machine learning techniques, and practical applications across diverse industries.",
      Img: Ai,
    },
    {
      heading: "Cyber Security",
      discription:
        "Secure your digital future with our Cybersecurity Essentials course. Whether you're safeguarding personal data or protecting critical infrastructure, our comprehensive program equips you with the latest strategies and tools to defend against cyber threats.",
      Img: cyber,
    },
    {
      heading: "UI/UX Design",
      discription:
        "Transform user experiences with our UI/UX Design Mastery course. Whether you're crafting intuitive interfaces or optimizing user interactions, our comprehensive program empowers you with essential skills and cutting-edge techniques to create impactful designs",
      Img: ui,
    },
  ];
  return (
    <div className="skills-all">
      <div className="skill-header">
        <h1 className=" font-bold  text-[30px]">Popular Skills</h1>
        <p className=" font-extralight text-sm">
          Learn, Practice, and Test Your Skills with Our Courses
        </p>
      </div>
      <div className="skill-card grid grid-cols-3 gap-4 ">
        {data.map((p) => (
          <div class="card bg-base-100 w-96 shadow-xl items-center text-center pt-10">
            <h2 class="card-title font-bold text-[20px]">{p.heading}</h2>
            <figure class="px-10 pt-5">
              <img src={p.Img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <p>{p.discription}</p>
              {/* <div class="card-actions">
                <button class="btn btn-primary">Read More</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default skills;
