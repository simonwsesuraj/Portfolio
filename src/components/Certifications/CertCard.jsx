import { FaAward, FaSearchPlus, FaExternalLinkAlt } from "react-icons/fa";

export default function CertCard({ cert, onPreview }) {
  return (
    <div className="cert-card glass-card h-100">
      {/* Image Wrap with Preview Click */}
      <div 
        className="cert-img-wrap" 
        onClick={() => onPreview(cert)}
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
        <div className="mt-auto d-flex gap-2 pt-3 border-top border-secondary border-opacity-25">
          <button 
            className="btn-cert-inspect"
            onClick={() => onPreview(cert)}
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
  );
}
