import React from "react";
import ServiceCard from "./ServiceCard";
import fullstack from "../image/FullStack.jpg";
import cloud from "../image/cloud-infra.jpg";
import marketing from "../image/digital-marketing.jpg";
import cyber from "../image/react5.jpg";
import Ai from "../image/react4.jfif";
import ui from "../image/react6.jpg";

const courses = [
  {
    title: "Full Stack Development",
    image: fullstack,
    description:
      "This course combines the best of full stack development and UI/UX design. You'll start by learning front-end development with HTML, CSS, JavaScript, and frameworks like React. On the back end, you'll explore server-side programming with Node.js, Express, and databases like MongoDB. In parallel, you'll delve into UI/UX design principles, learning to create intuitive and attractive user interfaces. The course covers user research, wireframing, prototyping, and usability testing. By the end, you'll be able to build complete, user-friendly web applications from scratch.",
  },
  {
    title: "Cloud Infrastructure",
    image: cloud,
    description:
      "Dive into the world of cloud computing with this extensive course on cloud infrastructure. Learn about various cloud service models including IaaS, PaaS, and SaaS, and get hands-on experience with leading cloud platforms like AWS, Azure, and Google Cloud. You'll understand how to design, deploy, and manage scalable and secure cloud environments. The course also covers cloud architecture, virtualization, containerization, and the use of tools like Docker and Kubernetes. By the end, you'll be proficient in leveraging cloud technologies to optimize IT resources and enhance business operations.",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    image: Ai,
    description:
      "Unlock the potential of artificial intelligence and machine learning with this comprehensive course. You'll start with the basics of AI and machine learning concepts and gradually move on to more advanced topics such as neural networks, deep learning, and natural language processing. The course includes hands-on projects using popular frameworks like TensorFlow and PyTorch. You'll learn to build, train, and deploy machine learning models, and apply AI techniques to solve real-world problems. By the end of the course, you'll be ready to create intelligent systems and applications that can learn and adapt over time.",
  },
  {
    title: "Digital Marketing",
    image: marketing,
    description:
      "Gain a deep understanding of digital marketing strategies and tactics with this extensive course. You'll learn about various aspects of digital marketing, including search engine optimization (SEO), content marketing, social media marketing, email marketing, and pay-per-click (PPC) advertising. The course also covers web analytics, conversion rate optimization, and marketing automation tools. By the end of the course, you'll be equipped with the skills to create and execute effective digital marketing campaigns that drive traffic, engagement, and conversions.",
  },
  {
    title: "UI/UX Design",
    image: ui,
    description:
      "This course provides a thorough understanding of both user interface (UI) and user experience (UX) design. You'll learn how to conduct user research, create user personas, and map out user journeys. The course covers wireframing, prototyping, and usability testing using tools like Figma, Sketch, and Adobe XD. You'll also explore the principles of interaction design and information architecture. By the end of the course, you'll be able to design user-centric products that are both visually appealing and highly functional.",
  },

  {
    title: "Full Stack Development with UI/UX Design",
    image: cyber,
    description:
      "This course combines the best of full stack development and UI/UX design. You'll start by learning front-end development with HTML, CSS, JavaScript, and frameworks like React. On the back end, you'll explore server-side programming with Node.js, Express, and databases like MongoDB. In parallel, you'll delve into UI/UX design principles, learning to create intuitive and attractive user interfaces. The course covers user research, wireframing, prototyping, and usability testing. By the end, you'll be able to build complete, user-friendly web applications from scratch.",
  },
];

const Service = () => {
  return (
    <div className="flex justify-center flex-col ">
      <div class="carousel w-2/3 mx-auto h-96">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            class="w-full"
          />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            class="w-full"
          />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            class="w-full"
          />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            class="w-full"
          />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <section className="text-black bg-white body-font overflow-hidden">
        <div className="container px-5 pt-10 mx-auto">
          <div className=" mx-auto flex flex-wrap">
            <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-24">
              <div>
                {courses?.map((course, index) => (
                  <ServiceCard course={course} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
