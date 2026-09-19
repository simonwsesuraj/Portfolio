import { useState } from "react";
import { certifications } from "../../data/certificationsData";
import { FaLayerGroup, FaPython, FaBrain } from "react-icons/fa";
import { Si365Datascience, SiHiveBlockchain } from "react-icons/si";
import { GiCyberEye } from "react-icons/gi";
import CertCard from "./CertCard";
import CertLightbox from "./CertLightbox";
import './Certifications.css';

export default function Certifications() {
  const [activeCertCategory, setActiveCertCategory] = useState("all");
  const [previewCert, setPreviewCert] = useState(null);

  const categories = [
    { id: "all", label: "All Credentials", icon: <FaLayerGroup /> },
    { id: "python", label: "Python", icon: <FaPython /> },
    { id: "ai", label: "AI", icon: <FaBrain /> },
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
          <div className="section-badge">Verified Achievements</div>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-subtitle">
            Industry accredited certifications and academic specializations validating technical rigor.
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
              <CertCard 
                cert={cert} 
                onPreview={setPreviewCert} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertLightbox 
        cert={previewCert} 
        onClose={() => setPreviewCert(null)} 
      />
    </section>
  );
}
