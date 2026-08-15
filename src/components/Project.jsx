import "./Project.css";

const projects = [
  {
    title: "InCred Capital - SBBO",
    description:
      "A stock broker back-office application developed for managing client portfolios, transactions, reports and business workflows. The application supports transaction history, portfolio information and downloadable business reports.",
    technologies: [
      "C#",
      "ASP.NET",
      "SQL Server",
      "JavaScript",
      "Bootstrap",
    ],
    image: "/logo1.png",
    type: "Professional Project",
  },

  {
    title: "Nine Star - Branch Back Office",
    description:
      "A branch back-office application designed to support client management, operational activities, reports and financial business processes. It helps streamline day-to-day branch operations and business workflows.",
    technologies: [
      "C#",
      "ASP.NET",
      "SQL Server",
      "JavaScript",
      "Bootstrap",
    ],
    image: "/ninestar.png",
    type: "Professional Project",
  },

  {
    title: "Suresh Rathi - Client Back Office",
    description:
      "A client back-office application providing access to client information, transaction details, reports and portfolio-related operations. The application helps users efficiently manage and review client-related financial information.",
    technologies: [
      "C#",
      "ASP.NET",
      "SQL Server",
      "JavaScript",
      "Bootstrap",
    ],
    image: "/sureshrathi.jpg",
    type: "Professional Project",
  },

  {
    title: "MERN Portfolio",
    description:
      "A modern responsive personal portfolio developed using React and Node.js with REST API integration and MongoDB database connectivity.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
    ],
    icon: "bi bi-person-workspace",
    type: "Personal Project",
    github: "#",
    live: "#",
  },
];

function Project() {
  return (
    <section id="projects" className="projects-section py-1">

      <div className="container py-lg-5">

        {/* Heading */}
        <div className="section-heading text-center mb-5">

          <span className="section-label">
            <i className="bi bi-folder2-open me-2"></i>
            Projects
          </span>

          <h2 className="fw-bold mt-3">
            My <span>Projects</span>
          </h2>

          <p className="text-muted">
            Professional and personal projects I have worked on
          </p>

        </div>

        {/* Projects */}
        <div className="row g-4">

          {projects.map((project, index) => (

            <div
              className="col-md-6"
              key={index}
            >

              <div className="project-card h-100">

                {/* Project Visual */}
                <div className="project-visual">

                  <div className="project-number">
                    0{index + 1}
                  </div>

                  {project.image ? (

                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />

                  ) : (

                    <div className="project-icon">
                      <i className={project.icon}></i>
                    </div>

                  )}

                  <span
                    className={`project-type ${
                      project.type === "Personal Project"
                        ? "personal"
                        : ""
                    }`}
                  >
                    <i
                      className={
                        project.type === "Personal Project"
                          ? "bi bi-person"
                          : "bi bi-briefcase"
                      }
                    ></i>

                    {project.type}
                  </span>

                </div>

                {/* Content */}
                <div className="project-content">

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="project-technologies">

                    {project.technologies.map(
                      (technology, techIndex) => (

                        <span
                          className="technology-badge"
                          key={techIndex}
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                  {/* Bottom */}
                  <div className="project-footer">

                    {project.type === "Professional Project" ? (

                      <div className="project-private">
                        <i className="bi bi-lock-fill"></i>

                        <span>
                          Internal / Client Project
                        </span>
                      </div>

                    ) : (

                      <div className="project-actions">

                        <a
                          href={project.github}
                          className="btn btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-github me-2"></i>
                          GitHub
                        </a>

                        <a
                          href={project.live}
                          className="btn btn-dark"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-box-arrow-up-right me-2"></i>
                          Live Demo
                        </a>

                      </div>

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

export default Project;