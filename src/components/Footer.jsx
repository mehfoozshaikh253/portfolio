import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container py-5">

        <div className="row g-5">

          {/* About */}
          <div className="col-lg-5 text-center text-lg-start">

            <div className="footer-brand">
              Mehfooz <span>Ahmed</span>
            </div>

            <p className="footer-description">
              Full Stack Developer passionate about building modern,
              responsive and scalable web applications.
            </p>

            {/* Social Links */}
            <div className="footer-social">

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

            </div>

          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">

            <h5 className="footer-title">
              Quick Links
            </h5>

            <ul className="footer-links">

              <li>
                <a href="#home">
                  <i className="bi bi-chevron-right"></i>
                  Home
                </a>
              </li>

              <li>
                <a href="#about">
                  <i className="bi bi-chevron-right"></i>
                  About
                </a>
              </li>

              <li>
                <a href="#skills">
                  <i className="bi bi-chevron-right"></i>
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects">
                  <i className="bi bi-chevron-right"></i>
                  Projects
                </a>
              </li>

              <li>
                <a href="#experience">
                  <i className="bi bi-chevron-right"></i>
                  Experience
                </a>
              </li>

              <li>
                <a href="#education">
                  <i className="bi bi-chevron-right"></i>
                  Education
                </a>
              </li>

              <li>
                <a href="#contact">
                  <i className="bi bi-chevron-right"></i>
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6 text-center text-lg-start">

            <h5 className="footer-title">
              Contact
            </h5>

            <div className="footer-contact">

              <a href="mailto:azadshaikh253@gmail.com">
                <span className="footer-contact-icon">
                  <i className="bi bi-envelope"></i>
                </span>

                <span>
                  <small>Email</small>
                  azadshaikh253@gmail.com
                </span>
              </a>

              <a href="tel:+918097409934">
                <span className="footer-contact-icon">
                  <i className="bi bi-phone"></i>
                </span>

                <span>
                  <small>Phone</small>
                  +91 8097409934
                </span>
              </a>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <i className="bi bi-code-slash"></i>
                </span>

                <span>
                  <small>Role</small>
                  Full Stack Developer
                </span>
              </div>

            </div>

          </div>

        </div>

        <hr className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">

          <div>
            <small>
              © {new Date().getFullYear()} Mehfooz Ahmed.
              All Rights Reserved.
            </small>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;