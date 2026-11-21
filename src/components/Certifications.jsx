
import { useEffect, useState } from "react";

import { certifications } from "../data/certificationsData";

import {
  FaAward,
  FaExternalLinkAlt,
  FaTimes,
  FaLayerGroup,
  FaPython,
  FaBrain
} from "react-icons/fa";

import {
  Si365Datascience,
  SiHiveBlockchain
} from "react-icons/si";

import { GiCyberEye } from "react-icons/gi";

import "./Certifications.css";

const categories = [
  { id: "all", label: "All", icon: <FaLayerGroup /> },
  { id: "python", label: "Python", icon: <FaPython /> },
  { id: "ai", label: "AI & ML", icon: <FaBrain /> },
  { id: "cybersecurity", label: "Cybersecurity", icon: <GiCyberEye /> },
  { id: "datascience", label: "Data Science", icon: <Si365Datascience /> },
  { id: "blockchain", label: "Blockchain", icon: <SiHiveBlockchain /> }
];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [previewCert, setPreviewCert] = useState(null);

  const filteredCerts = certifications.filter((cert) => {
    return (
      activeCategory === "all" ||
      cert.category === activeCategory
    );
  });

  // Close preview with Escape key
  useEffect(() => {
    if (!previewCert) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPreviewCert(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewCert]);

  return (
    <section className="certifications-section" id="certifications">
      <div className="container">

        {/* Section Header */}
        <div className="cert-heading text-center" data-aos="fade-up">
          <span className="cert-eyebrow">LEARNING & DEVELOPMENT</span>

          <h2 className="section-title">Certifications</h2>

          <p className="cert-subtitle">
            Professional training and certifications that reflect
            my continuous learning in technology.
          </p>
        </div>

        {/* Category Filters */}
        <div className="cert-filters" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`cert-filter ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Certificate Count */}
        <div className="cert-results-info">
          <span>
            {filteredCerts.length}{" "}
            {filteredCerts.length === 1 ? "credential" : "credentials"}
          </span>
        </div>

        {/* Certificate Grid */}
        <div className="row g-4">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.id || index}
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 80}
            >
              <article className="cert-card">

                {/* Certificate Image */}
                <button
                  type="button"
                  className="cert-image-button"
                  onClick={() => setPreviewCert(cert)}
                  aria-label={`Preview ${cert.title}`}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="cert-image"
                    loading="lazy"
                  />

                  <span className="cert-preview-label">
                    View certificate
                  </span>
                </button>

                {/* Certificate Details */}
                <div className="cert-content">

                  <div className="cert-meta">
                    <span className="cert-issuer">
                      <FaAward />
                      {cert.issuer}
                    </span>

                    {cert.year && (
                      <span className="cert-year">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  <h3 className="cert-title">
                    {cert.title}
                  </h3>

                  {cert.skills?.length > 0 && (
                    <div className="cert-skills">
                      {cert.skills.slice(0, 4).map((skill, i) => (
                        <span key={i} className="cert-skill">
                          {skill}
                        </span>
                      ))}

                      {cert.skills.length > 4 && (
                        <span className="cert-skill-more">
                          +{cert.skills.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="cert-footer">
                    <button
                      type="button"
                      className="cert-view-btn"
                      onClick={() => setPreviewCert(cert)}
                    >
                      View Details
                    </button>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-verify-link"
                      >
                        Verify
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>

                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <div className="cert-empty">
            <FaAward />
            <h3>No certificates found</h3>
            <p>There are no certificates in this category yet.</p>
          </div>
        )}

      </div>

      {/* Certificate Preview Modal */}
      {previewCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setPreviewCert(null)}
        >
          <div
            className="cert-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="cert-modal-header">
              <div>
                <h3 id="cert-modal-title">
                  {previewCert.title}
                </h3>

                <p>
                  {previewCert.issuer}
                  {previewCert.year && ` · ${previewCert.year}`}
                </p>
              </div>

              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setPreviewCert(null)}
                aria-label="Close preview"
              >
                <FaTimes />
              </button>
            </div>

            <div className="cert-modal-image-wrap">
              <img
                src={previewCert.image}
                alt={`${previewCert.title} certificate`}
                className="cert-modal-image"
              />
            </div>

            <div className="cert-modal-footer">
              {previewCert.credentialId && (
                <p className="cert-credential-id">
                  Credential ID: {previewCert.credentialId}
                </p>
              )}

              {previewCert.link && (
                <a
                  href={previewCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-verify"
                >
                  Verify Credential
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
