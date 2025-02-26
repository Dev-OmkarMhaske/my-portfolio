import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-justify">
          Hello, I'm Omkar, a passionate Software Developer with expertise in
          Core Java, Spring Boot, and React.js. With a strong background in
          full-stack development, I enjoy crafting scalable, high-performance
          applications that deliver seamless user experiences. My goal is to
          develop innovative software solutions that solve real-world problems
          efficiently.
          <br />
          Strong expertise in relational (MySQL) and NoSQL (MongoDB, Firebase)
          databases, ensuring efficient data management and seamless application
          performance. Adept at developing and optimizing full-stack
          applications, integrating REST APIs, and working with cloud-based
          services. <br />
          Passionate about problem-solving and performance optimization, with a
          track record of collaborating with cross-functional teams to deliver
          high-quality, user-centric solutions. Wellversed in Agile
          methodologies and best coding practices, continuously improving and
          adapting to emerging technologies.
        </p>
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          [Degree/Certification], [Institution], [Year] [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year]
        </span> */}
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          <br />
          <p>✅ Proficient in Core Java, Spring Boot, React.js</p>
          <p>
            ✅ Experienced with RESTful APIs, Microservices, and SQL/NoSQL
            Databases
          </p>
          <p>
            ✅ Strong understanding of backend development, system architecture,
            and performance optimization
          </p>
          <p>
            ✅ Familiar with front-end development using React.js and state
            management
          </p>
          <p>
            ✅ Excellent problem-solving skills and ability to debug complex
            issues
          </p>
          <p>
            ✅ Strong collaborator and effective communicator in
            cross-functional teams
          </p>
        </span>
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          Software Developer, XYZ (Month/Year – Present) Develop and maintain
          RESTful APIs using Spring Boot for scalable and high-performance
          applications. Implement microservices architecture to enhance
          modularity and scalability. Work with React.js to create dynamic and
          interactive front-end components. Optimize database queries and ensure
          efficient data handling using SQL/NoSQL databases. Collaborate with
          cross-functional teams to deliver high-quality software solutions.
          Write clean, maintainable, and efficient code following best
          practices. Conduct unit testing and implement CI/CD pipelines for
          smooth deployment.
        </span>
        <br /> */}
        {/* <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p> */}
      </div>
    </div>
  );
}

export default About;
