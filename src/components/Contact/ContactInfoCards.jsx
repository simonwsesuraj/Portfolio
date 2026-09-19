import { personalInfo } from "../../data/portfolioData";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfoCards() {
  return (
    <div className="row g-4 mb-5" data-aos="fade-up">
      {/* Email */}
      <div className="col-12 col-md-4">
        <div className="contact-card glass-card p-4 h-100">
          <div className="contact-icon-circle email mb-3">
            <FaEnvelope size={22} />
          </div>
          <h5 className="fw-bold text-white mb-1">Email Inquiry</h5>
          <p className="text-muted small mb-3">{personalInfo.email}</p>
          <a 
            href={personalInfo.socials.gmailCompose}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-action email"
          >
            Compose in Gmail
          </a>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="col-12 col-md-4">
        <div className="contact-card glass-card p-4 h-100">
          <div className="contact-icon-circle whatsapp mb-3">
            <FaWhatsapp size={22} />
          </div>
          <h5 className="fw-bold text-white mb-1">Direct Chat</h5>
          <p className="text-muted small mb-3">{personalInfo.phone}</p>
          <a 
            href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-action whatsapp"
          >
            WhatsApp Message
          </a>
        </div>
      </div>

      {/* Location & Relocation */}
      <div className="col-12 col-md-4">
        <div className="contact-card glass-card p-4 h-100">
          <div className="contact-icon-circle location mb-3">
            <FaMapMarkerAlt size={22} />
          </div>
          <h5 className="fw-bold text-white mb-1">Location & Availability</h5>
          <p className="text-muted small mb-2">{personalInfo.location}</p>
          <span className="availability-chip">Available for On-site & Remote Roles</span>
        </div>
      </div>
    </div>
  );
}
