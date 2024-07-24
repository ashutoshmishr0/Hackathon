import React, { useState } from "react";
const ServiceCard = ({ course, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start space-x-4 px-6 mt-24">
        {index % 2 === 0 && (
          <img src={course.image} alt="" className="md:w-1/3" />
        )}

        <div key={course.title} className="mb-8">
          <h1 className="text-black text-3xl title-font font-medium mb-4">
            {course.title}
          </h1>
          <div className="flex mb-4">
            <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">
              Description
            </a>
          </div>
          <p className="leading-relaxed mb-4">
            {isExpanded
              ? course.description
              : `${course.description.substring(0, 250)}...`}
            <span
              className="read-more text-blue-700 cursor-pointer"
              onClick={toggleReadMore}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </span>
          </p>
        </div>
        {index % 2 !== 0 && (
          <img src={course.image} alt="" className="md:w-1/3 text-blue-700" />
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
