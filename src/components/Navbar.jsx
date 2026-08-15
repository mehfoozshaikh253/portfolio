import { useState } from "react";
import { Collapse } from "bootstrap";

function Navbar() {
  const [active, setActive] = useState("home");

  const handleClick = (e, section) => {
    e.preventDefault();

    setActive(section);

    const navbar = document.getElementById("navbarNav");

    const scrollToSection = () => {
      const target = document.getElementById(section);

      if (!target) return;

      const navbarHeight = 70;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    };

    // Mobile menu open hai
    if (navbar && navbar.classList.contains("show")) {
      const bsCollapse = Collapse.getInstance(navbar);

      if (bsCollapse) {
        bsCollapse.hide();

        // Navbar close hone ke baad scroll
        setTimeout(() => {
          scrollToSection();
        }, 350);
      } else {
        scrollToSection();
      }
    } else {
      // Desktop
      scrollToSection();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">

        {/* Logo / Name */}
        <a
          className="navbar-brand fw-bold"
          href="#home"
          onClick={(e) => handleClick(e, "home")}
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

            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "home" ? "active" : ""
                }`}
                href="#home"
                onClick={(e) => handleClick(e, "home")}
              >
                <i className="bi bi-house me-1"></i>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "about" ? "active" : ""
                }`}
                href="#about"
                onClick={(e) => handleClick(e, "about")}
              >
                <i className="bi bi-person me-1"></i>
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "skills" ? "active" : ""
                }`}
                href="#skills"
                onClick={(e) => handleClick(e, "skills")}
              >
                <i className="bi bi-code-slash me-1"></i>
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "projects" ? "active" : ""
                }`}
                href="#projects"
                onClick={(e) => handleClick(e, "projects")}
              >
                <i className="bi bi-folder me-1"></i>
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "experience" ? "active" : ""
                }`}
                href="#experience"
                onClick={(e) => handleClick(e, "experience")}
              >
                <i className="bi bi-briefcase me-1"></i>
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "education" ? "active" : ""
                }`}
                href="#education"
                onClick={(e) => handleClick(e, "education")}
              >
                <i className="bi bi-mortarboard me-1"></i>
                Education
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link px-3 ${
                  active === "contact" ? "active" : ""
                }`}
                href="#contact"
                onClick={(e) => handleClick(e, "contact")}
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