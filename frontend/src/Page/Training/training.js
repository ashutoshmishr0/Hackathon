import React from "react";

const Training = () => {
  return (
    <div className="mb-28">
      <div>
        <h1 className="font-bold text-[40px] mb-4 text-black text-center">
          4P Program
        </h1>

        <div className=" hidden lg:flex items-start">
          <ul className="steps steps-vertical w-1/6">
            <a href="#prep" className="step step-primary">
              Preparation
            </a>
            <a href="#pro" className="step step-primary">
              Project
            </a>
            <a href="#prof" className="step">
              Professional
            </a>
            <a href="#plac" className="step">
              Placement
            </a>
          </ul>

          <div className="w-5/6 flex flex-col space-y-10 pr-10 text-justify">
            <hr />
            <div id="prep">
              <h3 className="font-bold text-[30px] ">Preparation</h3>
              <p className="text-justify">
                Familiarizing oneself with software environments and mastering
                essential project management tools while gaining technical
                skills in HTML, CSS, JavaScript, Figma, Git, and GitHub are
                crucial steps towards becoming proficient in the digital
                landscape. Understanding software environments involves grasping
                the intricacies of development, testing, and deployment
                platforms, essential for managing software projects effectively.
                Project management tools like Trello, Asana, or Jira play a
                pivotal role in organizing tasks, tracking progress, and
                ensuring team collaboration, vital for delivering projects on
                time and within budget. Technical skills in HTML, CSS, and
                JavaScript form the foundation of front-end web development,
                enabling the creation of visually appealing and interactive user
                interfaces. Mastery of design tools like Figma enhances
                proficiency in UI/UX design, facilitating the creation of
                wireframes, prototypes, and polished designs. Git and GitHub
                proficiency is indispensable for version control, enabling
                developers to track changes, collaborate seamlessly, and
                maintain code integrity across projects. Continuous training and
                hands-on practice in these areas are essential for staying
                current with industry standards and advancing one's career in
                software development and design.
              </p>
            </div>
            <div id="pro">
              <h3 className="font-bold text-[30px] ">Project</h3>
              <p>
                Implementing a small project using the MERN (MongoDB,
                Express.js, React, Node.js) stack involves a comprehensive
                approach to full-stack development, addressing both front-end
                and back-end requirements. This integrated approach allows
                developers to build robust web applications by leveraging the
                strengths of each technology. On the front-end, utilizing React
                facilitates the creation of dynamic user interfaces with
                reusable components, managed states, and efficient rendering.
                Meanwhile, on the back-end, Node.js and Express.js provide a
                scalable server environment for handling HTTP requests, defining
                API routes, and integrating with MongoDB using Mongoose for data
                modeling and management. The project implementation typically
                begins with setting up the development environment, where
                Node.js and MongoDB are configured locally or on a cloud
                platform like MongoDB Atlas. Developers then design and
                implement the application's architecture, focusing on features
                such as user authentication, data manipulation through RESTful
                APIs or GraphQL, and integrating third-party services if needed.
              </p>
            </div>
            <div id="prof">
              <h3 className="font-bold text-[30px] ">Professional </h3>
              <p>
                {" "}
                Engaging in a real application live project with collaboration
                from clients in the tech industry or pursuing your own startup
                idea entails a transformative journey in software development
                and entrepreneurship. Collaborating with clients provides
                invaluable opportunities to apply technical skills in a
                real-world context, gaining insights into client requirements,
                project management, and delivering solutions that meet business
                objectives. This experience fosters skills in communication,
                project scoping, and agile development methodologies, essential
                for navigating the complexities of client expectations and
                industry standards.
              </p>
            </div>
            <div id="plac" className="mb-10">
              <h3 className="font-bold text-[30px] ">Placement</h3>
              <p>
                Preparing for aptitude tests and honing communication and
                interpersonal skills through GDPI (Group Discussion and Personal
                Interview) sessions are essential for succeeding in competitive
                job markets and academic pursuits. Aptitude tests typically
                encompass logical reasoning, quantitative aptitude, and verbal
                ability sections. Logical reasoning tests assess problem-solving
                abilities and critical thinking skills, often presenting
                candidates with puzzles, syllogisms, and logical sequences to
                analyze and solve under time constraints. Quantitative aptitude
                evaluates numerical ability, including topics like arithmetic,
                algebra, geometry, and data interpretation, requiring
                proficiency in mathematical concepts and quick calculations.
                Verbal ability tests gauge language comprehension, grammar,
                vocabulary, and reading comprehension skills through passages,
                sentence correction, and verbal reasoning exercises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
