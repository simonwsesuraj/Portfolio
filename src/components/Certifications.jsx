import { FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../data/certificationsData";
import './Certifications.css';

export default function Certifications() {
  return (
    <section className="certifications-section py-5" id="certifications">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-5 fade-in" data-aos="fade-up">
          <h2 className="fw-bold cert-title">Certifications</h2>
          <p className="text-gradient">My professional certifications and courses</p>
        </div>

        {/* Certification Cards */}
        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index*100}>
              <div className="card h-100 cert-card shadow-sm border-0 hover-card">
                <div className="img-wrapper">
                  <img src={cert.image} className="card-img-top cert-img" alt={cert.title} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{cert.title}</h5>
                  <p className="card-text text-info">{cert.issuer} | {cert.year}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-auto hover-btn">
                    View Certificate <FaExternalLinkAlt className="ms-1"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}