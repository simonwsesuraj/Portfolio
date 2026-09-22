import { useState } from "react";
import { certifications } from "../data/certificationsData";
import { 
  FaExternalLinkAlt, 
  FaAward, 
  FaTimes, 
  FaCheckCircle, 
  FaSearchPlus,
  FaDatabase,
  FaBrain,
  FaCode,
  FaLayerGroup,
  FaPython
} from "react-icons/fa";
import './Certifications.css';
import { Si365Datascience,SiHiveBlockchain } from "react-icons/si";
import { GiCyberEye } from "react-icons/gi";

export default function Certifications() {
  const [activeCertCategory, setActiveCertCategory] = useState("all");
  const [previewCert, setPreviewCert] = useState(null);

  const categories = [
    { id: "all", label: "All Credentials", icon: <FaLayerGroup /> },
    { id: "python", label: "Python", icon: <FaPython /> },
    { id: "ai", label: "AI", icon: <FaBrain /> },
    // { id: "fullstack", label: "Web Engineering", icon: <FaCode /> },
    { id: "cybersecurity", label: "Cybersecurity", icon: <GiCyberEye /> },
    { id: "datascience", label: "DataScience", icon: <Si365Datascience /> },
    { id: "blockchain", label: "Blockchain", icon: <SiHiveBlockchain /> }
  ];

  const filteredCerts = certifications.filter((c) => {
    if (activeCertCategory === "all") return true;
    return c.category === activeCertCategory;
  });

  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-badge">Certifications & Training</div>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-subtitle">
            Technical certifications and training programs covering Python, AI, cybersecurity, data science, and blockchain.
          </p>
        </div>

        {/* Category Pills */}
        <div className="role-pills-container mb-5" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`role-pill ${activeCertCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCertCategory(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="row g-4">
          {filteredCerts.map((cert, index) => (
            <div 
              key={cert.id || index} 
              className="col-12 col-md-6 col-lg-4" 
              data-aos="fade-up" 
              data-aos-delay={(index % 3) * 100}
            >
              <div className="cert-card glass-card h-100 d-flex flex-column">
                
                {/* Image Wrap with Preview Click */}
                <div 
                  className="cert-img-wrap" 
                  onClick={() => setPreviewCert(cert)}
                  title="Click to view full certificate"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="cert-img" 
                    loading="lazy"
                  />
                  <div className="cert-img-overlay">
                    <span className="overlay-preview-btn">
                      <FaSearchPlus /> Preview Certificate
                    </span>
                  </div>
                  <span className="cert-year-badge">{cert.year}</span>
                </div>

                {/* Content */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <FaAward className="text-cyan" />
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>

                  <h4 className="cert-card-title font-heading mb-3">
                    {cert.title}
                  </h4>

                  {cert.skills && (
                    <div className="d-flex flex-wrap gap-1 mb-4">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="cert-skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-auto d-flex gap-2 pt-3 cert-actions-row">
                    <button 
                      className="btn-cert-inspect"
                      onClick={() => setPreviewCert(cert)}
                    >
                      Inspect
                    </button>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cert-verify"
                      >
                        Verify <FaExternalLinkAlt className="ms-1" size={12} />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Lightbox / Modal */}
      {previewCert && (
        <div className="cert-lightbox-backdrop" onClick={() => setPreviewCert(null)}>
          <div className="cert-lightbox-box glass-card" onClick={(e) => e.stopPropagation()}>
            
            <div className="cert-lightbox-header">
              <div>
                <h4 className="cert-lightbox-title font-heading m-0">{previewCert.title}</h4>
                <small className="cert-lightbox-sub">{previewCert.issuer} · {previewCert.year}</small>
              </div>
              <button 
                className="modal-close-btn"
                onClick={() => setPreviewCert(null)}
                aria-label="Close certificate preview"
              >
                <FaTimes />
              </button>
            </div>

            <div className="cert-lightbox-body">
              <img 
                src={previewCert.image} 
                alt={previewCert.title} 
                className="cert-lightbox-img" 
              />
            </div>

            <div className="cert-lightbox-footer">
              {previewCert.credentialId && (
                <div className="cert-cred-id font-mono">
                  Credential ID: <span>{previewCert.credentialId}</span>
                </div>
              )}
              {previewCert.link && (
                <a
                  href={previewCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lightbox-verify"
                >
                  Open Official Verification Link <FaExternalLinkAlt className="ms-2" size={13} />
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}