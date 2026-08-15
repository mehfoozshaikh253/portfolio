import { useState } from "react";
import { Collapse } from "bootstrap";

function Navbar() {
  const [active, setActive] = useState("home");

  const handleClick = (section) => {
    setActive(section);

    // Close mobile navbar after clicking a menu item
    const navbar = document.getElementById("navbarNav");

    if (navbar && navbar.classList.contains("show")) {
      const bsCollapse = Collapse.getInstance(navbar);

      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">

        {/* Logo / Name */}
        <a
          className="navbar-brand fw-bold"
          href="#home"
          onClick={() => handleClick("home")}
        >
          Mehfooz Ahmed
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* Home */}
            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "home" ? "active" : ""
                }`}
                href="#home"
                onClick={() => handleClick("home")}
              >
                <i className="bi bi-house me-1"></i>
                Home
              </a>
            </li>

            {/* About */}
            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "about" ? "active" : ""
                }`}
                href="#about"
                onClick={() => handleClick("about")}
              >
                <i className="bi bi-person me-1"></i>
                About
              </a>
            </li>

            {/* Skills */}
            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "skills" ? "active" : ""
                }`}
                href="#skills"
                onClick={() => handleClick("skills")}
              >
                <i className="bi bi-code-slash me-1"></i>
                Skills
              </a>
            </li>

            {/* Projects */}
            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "projects" ? "active" : ""
                }`}
                href="#projects"
                onClick={() => handleClick("projects")}
              >
                <i className="bi bi-folder me-1"></i>
                Projects
              </a>
            </li>

            {/* Experience */}
            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "experience" ? "active" : ""
                }`}
                href="#experience"
                onClick={() => handleClick("experience")}
              >
                <i className="bi bi-briefcase me-1"></i>
                Experience
              </a>
            </li>

            {/* Education */}
            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "education" ? "active" : ""
                }`}
                href="#education"
                onClick={() => handleClick("education")}
              >
                <i className="bi bi-mortarboard me-1"></i>
                Education
              </a>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "contact" ? "active" : ""
                }`}
                href="#contact"
                onClick={() => handleClick("contact")}
              >
                <i className="bi bi-envelope me-1"></i>
                Contact
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;