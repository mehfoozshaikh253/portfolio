import "./Hero.css";
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">

          {/* Left Content */}
          <div className="col-lg-7 text-center text-lg-start">

            {/* Badge */}
            <div className="hero-badge mb-3">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            {/* Greeting */}
            <p className="hero-greeting mb-2">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="hero-title mb-3">
              Mehfooz <span>Ahmed</span>
            </h1>

            {/* Role */}
            <h2 className="hero-role mb-3">
              Full Stack Developer
            </h2>

            {/* Description */}
            <p className="hero-description mb-4">
              I build modern, responsive and scalable web applications
              using <strong>C#, ASP.NET, React, Node.js</strong> and
              <strong> SQL Server</strong>.
            </p>

            {/* Tech Stack */}
            <div className="hero-tech mb-4">
              <span>
                <i className="bi bi-code-slash"></i> C#
              </span>

              <span>
                <i className="bi bi-window"></i> ASP.NET
              </span>

              <span>
                <i className="bi bi-braces"></i> React
              </span>

              <span>
                <i className="bi bi-server"></i> Node.js
              </span>

              <span>
                <i className="bi bi-database"></i> SQL Server
              </span>
            </div>

            {/* Buttons */}
            <div className="hero-buttons d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">

              <a href="#projects" className="btn hero-btn-primary">
                <i className="bi bi-folder2-open me-2"></i>
                View Projects
                <i className="bi bi-arrow-right ms-2"></i>
              </a>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn hero-btn-secondary"
              >
                <i className="bi bi-file-earmark-pdf me-2"></i>
                View Resume
              </a>

            </div>

            {/* Social Links */}
            <div className="hero-social mt-4">

              <a
                href="https://github.com/mehfoozshaikh253"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/mehfooz-ahmed-shaikh/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <span className="social-text">
                Connect with me
              </span>

            </div>

          </div>

          {/* Right Visual */}
          <div className="col-lg-5 mt-5 mt-lg-0">

            <div className="hero-visual">

              {/* Main Developer Card */}
              <div className="developer-card">

                <div className="window-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="code-content">

                  <div className="code-line">
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-variable">developer</span>{" "}
                    = {"{"}
                  </div>

                  <div className="code-line indent">
                    <span className="code-property">name:</span>{" "}
                    <span className="code-string">
                      "Mehfooz Ahmed"
                    </span>,
                  </div>

                  <div className="code-line indent">
                    <span className="code-property">role:</span>{" "}
                    <span className="code-string">
                      "Full Stack Developer"
                    </span>,
                  </div>

                  <div className="code-line indent">
                    <span className="code-property">backend:</span>{" "}
                    <span className="code-string">
                      "ASP.NET / Node.js"
                    </span>,
                  </div>

                  <div className="code-line indent">
                    <span className="code-property">frontend:</span>{" "}
                    <span className="code-string">
                      "React"
                    </span>,
                  </div>

                  <div className="code-line indent">
                    <span className="code-property">database:</span>{" "}
                    <span className="code-string">
                      "SQL Server / MongoDB"
                    </span>
                  </div>

                  <div className="code-line">
                    {"};"}
                  </div>

                  <div className="terminal-cursor">
                    _
                  </div>

                </div>
              </div>

              {/* Floating Cards */}

              <div className="floating-card floating-card-top">
                <i className="bi bi-database"></i>
                <div>
                  <small>Database</small>
                  <strong>SQL Server</strong>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <i className="bi bi-braces"></i>
                <div>
                  <small>Frontend</small>
                  <strong>React</strong>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="hero-circle"></div>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll Down</span>
        <i className="bi bi-chevron-down"></i>
      </a>

    </section>
  );
}

export default Hero;