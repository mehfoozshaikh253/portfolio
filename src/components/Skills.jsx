import "./Skills.css";

const skills = [
  {
    name: "C#",
    icon: "bi bi-code-slash",
    category: "Backend",
  },
  {
    name: ".NET",
    icon: "bi bi-braces",
    category: "Backend",
  },
  {
    name: "React",
    icon: "bi bi-filetype-jsx",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: "bi bi-node-plus",
    category: "Backend",
  },
  {
    name: "JavaScript",
    icon: "bi bi-filetype-js",
    category: "Frontend",
  },
  {
    name: "SQL Server",
    icon: "bi bi-database",
    category: "Database",
  },
  {
    name: "MongoDB",
    icon: "bi bi-database-fill",
    category: "Database",
  },
  {
    name: "Bootstrap",
    icon: "bi bi-bootstrap",
    category: "Frontend",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section py-5">

      <div className="container py-lg-5">

        {/* Heading */}
        <div className="section-heading text-center mb-5">

          <span className="section-label">
            <i className="bi bi-code-square me-2"></i>
            Skills
          </span>

          <h2 className="fw-bold mt-3">
            My <span>Technical Skills</span>
          </h2>

          <p className="text-muted">
            Technologies and tools I use to build modern web applications
          </p>

        </div>

        {/* Skills */}
        <div className="row g-4 justify-content-center">

          {skills.map((skill, index) => (

            <div
              className="col-6 col-md-4 col-lg-3"
              key={index}
            >

              <div className="skill-card">

                {/* Number */}
                <span className="skill-number">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>

                {/* Name */}
                <h5 className="skill-name">
                  {skill.name}
                </h5>

                {/* Category */}
                <span className="skill-category">
                  {skill.category}
                </span>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Summary */}
        <div className="skills-summary mt-5">

          <div className="row g-3 justify-content-center">

            <div className="col-md-4">
              <div className="skill-summary-card">
                <i className="bi bi-window"></i>

                <div>
                  <strong>Frontend</strong>
                  <small>React · JavaScript · Bootstrap</small>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="skill-summary-card">
                <i className="bi bi-server"></i>

                <div>
                  <strong>Backend</strong>
                  <small>C# · .NET · Node.js</small>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="skill-summary-card">
                <i className="bi bi-database"></i>

                <div>
                  <strong>Database</strong>
                  <small>SQL Server · MongoDB</small>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;