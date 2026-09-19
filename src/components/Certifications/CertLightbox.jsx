import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

export default function CertLightbox({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="cert-lightbox-backdrop" onClick={onClose}>
      <div className="cert-lightbox-box glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="cert-lightbox-header">
          <div>
            <h4 className="text-white font-heading m-0">{cert.title}</h4>
            <small className="text-muted">{cert.issuer} · {cert.year}</small>
          </div>
          <button 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close certificate preview"
          >
            <FaTimes />
          </button>
        </div>

        <div className="cert-lightbox-body">
          <img 
            src={cert.image} 
            alt={cert.title} 
            className="cert-lightbox-img" 
          />
        </div>

        <div className="cert-lightbox-footer">
          {cert.credentialId && (
            <div className="cert-cred-id font-mono">
              Credential ID: <span>{cert.credentialId}</span>
            </div>
          )}
          {cert.link && (
            <a
              href={cert.link}
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
  );
}
