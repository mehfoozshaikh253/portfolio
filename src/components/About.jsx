import "./About.css";
function About() {
  return (
    <section id="about" className="about-section py-1">
      <div className="container py-lg-5">

        {/* Section Heading */}
        <div className="section-heading text-center mb-5">
          <span className="section-label">
            <i className="bi bi-person me-2"></i>
            About Me
          </span>

          <h2 className="fw-bold mt-3">
            Get to know <span>me</span>
          </h2>

          <p className="text-muted">
            My background, experience and technical expertise
          </p>
        </div>

        <div className="row align-items-center g-5">

          {/* Profile Image */}
          <div className="col-lg-5">

            <div className="about-image-wrapper">

              <div className="about-image-card">
                <img
                  src="/profile2.png"
                  alt="Mehfooz Ahmed - Full Stack Developer"
                  className="about-image"
                />

                {/* Experience Badge */}
                <div className="experience-badge">
                  <i className="bi bi-code-square"></i>

                  <div>
                    <strong>Full Stack</strong>
                    <small>Developer</small>
                  </div>
                </div>

              </div>

              {/* Decorative Elements */}
              <div className="about-decoration about-decoration-one"></div>
              <div className="about-decoration about-decoration-two"></div>

            </div>

          </div>

          {/* About Content */}
          <div className="col-lg-7">

            <div className="about-content">

              <span className="about-small-title">
                WHO I AM
              </span>

              <h3 className="fw-bold mt-2 mb-3">
                I'm Mehfooz Ahmed
              </h3>

              <h5 className="text-primary fw-semibold mb-4">
                Full Stack Developer
              </h5>

              <p className="about-text">
                I am a Full Stack Developer focused on building modern,
                responsive and database-driven web applications. I enjoy
                solving real-world business problems through clean and
                maintainable code.
              </p>

              <p className="about-text">
                I have hands-on experience with{" "}
                <strong>
                  C#, .NET, ASP.NET, React, Node.js, JavaScript,
                  SQL Server
                </strong>{" "}
                and <strong>MongoDB</strong>.
              </p>

              <p className="about-text">
                I also work with REST APIs, database operations,
                responsive UI development and backend integration.
              </p>

              {/* Quick Information */}
              <div className="row g-3 mt-4">

                <div className="col-sm-6">
                  <div className="about-info-card">
                    <div className="about-info-icon">
                      <i className="bi bi-person-badge"></i>
                    </div>

                    <div>
                      <small>Role</small>
                      <strong>Full Stack Developer</strong>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="about-info-card">
                    <div className="about-info-icon">
                      <i className="bi bi-briefcase"></i>
                    </div>

                    <div>
                      <small>Experience</small>
                      <strong>Software Development</strong>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="about-info-card">
                    <div className="about-info-icon">
                      <i className="bi bi-server"></i>
                    </div>

                    <div>
                      <small>Backend</small>
                      <strong>Node.js / .NET</strong>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="about-info-card">
                    <div className="about-info-icon">
                      <i className="bi bi-database"></i>
                    </div>

                    <div>
                      <small>Database</small>
                      <strong>SQL Server / MongoDB</strong>
                    </div>
                  </div>
                </div>

              </div>

              {/* Resume */}
              <div className="mt-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn about-resume-btn"
                >
                  <i className="bi bi-file-earmark-pdf me-2"></i>
                  Download Resume
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;