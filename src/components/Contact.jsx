import { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setError(false);

    try {
      const response = await axios.post(
        "https://portfolio-backend-8zbp.onrender.com/api/contact",
        formData,
      );

      setStatus(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setError(true);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section py-1">
      <div className="container py-lg-5">
        {/* Heading */}
        <div className="section-heading text-center mb-5">
          <span className="section-label">
            <i className="bi bi-envelope me-2"></i>
            Contact
          </span>

          <h2 className="fw-bold mt-3">
            Let's <span>Connect</span>
          </h2>

          <p className="text-muted">
            Have a project, opportunity or just want to say hello? I'd love to
            hear from you.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">
          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info">
              <span className="contact-small-title">GET IN TOUCH</span>

              <h3 className="fw-bold mt-2 mb-3">
                Let's talk about your next project.
              </h3>

              <p className="text-muted mb-4">
                I'm always interested in discussing new projects, development
                opportunities and interesting ideas.
              </p>

              {/* Email */}
              <a
                href="mailto:azadshaikh253@gmail.com"
                className="contact-info-item"
              >
                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>

                <div>
                  <small>Email</small>
                  <strong>azadshaikh253@gmail.com</strong>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+918097409934" className="contact-info-item">
                <div className="contact-icon">
                  <i className="bi bi-telephone"></i>
                </div>

                <div>
                  <small>Phone</small>
                  <strong>+91 8097409934</strong>
                </div>
              </a>

              {/* Role */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="bi bi-code-slash"></i>
                </div>

                <div>
                  <small>Role</small>
                  <strong>Full Stack Developer</strong>
                </div>
              </div>

              {/* Social */}
              <div className="contact-social mt-4">
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
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-card">
              <div className="contact-card-header">
                <div>
                  <h4 className="fw-bold mb-1">Send Me a Message</h4>

                  <p className="text-muted mb-0">
                    Fill out the form and I'll get back to you.
                  </p>
                </div>

                <div className="contact-card-icon">
                  <i className="bi bi-send"></i>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Name</label>

                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>

                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="form-label">Message</label>

                  <div className="input-group">
                    <span className="input-group-text align-items-start pt-3">
                      <i className="bi bi-chat-left-text"></i>
                    </span>

                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="btn contact-submit w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="bi bi-arrow-right ms-2"></i>
                    </>
                  )}
                </button>
              </form>

              {/* Status */}
              {status && (
                <div
                  className={`alert ${
                    error ? "alert-danger" : "alert-success"
                  } mt-4 mb-0`}
                  role="alert"
                >
                  <i
                    className={`bi ${
                      error ? "bi-exclamation-circle" : "bi-check-circle"
                    } me-2`}
                  ></i>

                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
