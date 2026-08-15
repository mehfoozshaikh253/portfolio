import "./Experience.css";

const experiences = [
  {
    role: "Software Programmer",
    company: "Comet Info Solutions",
    duration: "June 2024 - Present",

    description:
      "Working on full-stack web application development, backend integration, database-driven solutions and business process automation.",

    responsibilities: [
      "Developed and maintained web applications using C# and ASP.NET.",
      "Designed and implemented database operations using SQL Server and stored procedures.",
      "Developed responsive and user-friendly interfaces using JavaScript, React and Bootstrap.",
      "Developed and consumed REST APIs for frontend and backend integration.",
      "Worked on application debugging, troubleshooting and performance optimization.",
      "Implemented business requirements and contributed to end-to-end application development.",
      "Worked with existing applications to enhance functionality and resolve production issues.",
    ],

    technologies: [
      "C#",
      "ASP.NET",
      "React",
      "SQL Server",
      "JavaScript",
      "Bootstrap",
      "REST API",
      "Node.js",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section py-1">

      <div className="container py-lg-5">

        {/* Heading */}
        <div className="section-heading text-center mb-5">

          <span className="section-label">
            <i className="bi bi-briefcase me-2"></i>
            Experience
          </span>

          <h2 className="fw-bold mt-3">
            My <span>Experience</span>
          </h2>

          <p className="text-muted">
            My professional experience and technical journey
          </p>

        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">

          {experiences.map((experience, index) => (

            <div className="experience-item" key={index}>

              {/* Timeline Icon */}
              <div className="experience-icon">
                <i className="bi bi-briefcase-fill"></i>
              </div>

              {/* Main Card */}
              <div className="experience-card">

                {/* Header */}
                <div className="experience-header">

                  <div className="experience-title">

                    <span className="experience-number">
                      0{index + 1}
                    </span>

                    <h3>
                      {experience.role}
                    </h3>

                    <h5>
                      {experience.company}
                    </h5>

                  </div>

                  <div className="experience-duration">
                    <i className="bi bi-calendar3 me-2"></i>
                    {experience.duration}
                  </div>

                </div>

                {/* Description */}
                <div className="experience-description">

                  <i className="bi bi-quote"></i>

                  <p>
                    {experience.description}
                  </p>

                </div>

                {/* Responsibilities */}
                <div className="experience-responsibilities">

                  <h5>
                    <i className="bi bi-check2-square me-2"></i>
                    Key Responsibilities
                  </h5>

                  <div className="responsibility-list">

                    {experience.responsibilities.map(
                      (item, itemIndex) => (

                        <div
                          className="responsibility-item"
                          key={itemIndex}
                        >
                          <span className="responsibility-icon">
                            <i className="bi bi-check"></i>
                          </span>

                          <span>{item}</span>
                        </div>

                      )
                    )}

                  </div>

                </div>

                {/* Technologies */}
                <div className="experience-technologies">

                  <h5>
                    <i className="bi bi-code-slash me-2"></i>
                    Technologies
                  </h5>

                  <div className="technology-list">

                    {experience.technologies.map(
                      (technology, techIndex) => (

                        <span
                          key={techIndex}
                          className="technology-badge"
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;