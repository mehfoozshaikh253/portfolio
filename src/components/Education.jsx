import "./Education.css";

const education = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Engineering",
    institute: "Metropolitan Institute of Technology and Management",
    duration: "2021 - 2025",
    description:
      "Completed Bachelor of Engineering in Computer Engineering.",
    icon: "bi-mortarboard-fill",
  },
  {
    degree: "Diploma in Computer Engineering",
    field: "Computer Engineering",
    institute: "A. R. Kalsekar Polytechnic",
    duration: "2016 - 2020",
    description:
      "Completed Diploma in Computer Engineering.",
    icon: "bi-award-fill",
  },
];

function Education() {
  return (
    <section id="education" className="education-section py-1">

      <div className="container py-lg-5">

        {/* Heading */}
        <div className="section-heading text-center mb-5">

          <span className="section-label">
            <i className="bi bi-mortarboard me-2"></i>
            Education
          </span>

          <h2 className="fw-bold mt-3">
            My <span>Education</span>
          </h2>

          <p className="text-muted">
            My academic background and educational journey
          </p>

        </div>

        {/* Timeline */}
        <div className="education-timeline">

          {education.map((item, index) => (

            <div
              className="education-item"
              key={index}
            >

              {/* Timeline Icon */}
              <div className="education-icon">
                <i className={`bi ${item.icon}`}></i>
              </div>

              {/* Card */}
              <div className="education-card">

                <div className="education-card-header">

                  <div>

                    <span className="education-number">
                      0{index + 1}
                    </span>

                    <h3 className="education-degree">
                      {item.degree}
                    </h3>

                    <h5 className="education-field">
                      {item.field}
                    </h5>

                  </div>

                  <span className="education-duration">
                    <i className="bi bi-calendar3 me-2"></i>
                    {item.duration}
                  </span>

                </div>

                {/* Institute */}
                <div className="education-institute">
                  <i className="bi bi-building me-2"></i>
                  {item.institute}
                </div>

                {/* Description */}
                <p className="education-description mb-0">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;