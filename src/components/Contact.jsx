import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { personalInfo } from "../data/portfolioData";
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaSpinner,
  FaArrowUp
} from "react-icons/fa";
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', msg: string }
  const [subjectIntent, setSubjectIntent] = useState("Full-Time Role Opportunity");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    emailjs.sendForm(
      "service_hdn752s",     
      "template_qe00rqh",    
      form.current,
      "cR_zydqSjV1jiQNiG"       
    )
    .then(() => {
      setLoading(false);
      setFeedback({
        type: "success",
        msg: "Thank you! Your message has been sent successfully. Simon will get back to you shortly."
      });
      form.current.reset();
      setTimeout(() => setFeedback(null), 6000);
    })
    .catch(() => {
      setLoading(false);
      setFeedback({
        type: "error",
        msg: "Unable to dispatch message directly right now. Please reach out via Email or WhatsApp directly!"
      });
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-badge">Let's Connect</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether you have a full-time role, a database engineering challenge, an AI initiative, or just want to say hi—my inbox is always open.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="row g-4 mb-5" data-aos="fade-up">
          
          {/* Email */}
          <div className="col-12 col-md-4">
            <div className="contact-card glass-card p-4 text-center h-100">
              <div className="contact-icon-circle email mb-3">
                <FaEnvelope size={24} />
              </div>
              <h5 className="fw-bold text-white mb-1">Email Inquiry</h5>
              <p className="text-light-emphasis small mb-3">{personalInfo.email}</p>
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
            <div className="contact-card glass-card p-4 text-center h-100">
              <div className="contact-icon-circle whatsapp mb-3">
                <FaWhatsapp size={24} />
              </div>
              <h5 className="fw-bold text-white mb-1">Direct Chat</h5>
              <p className="text-light-emphasis small mb-3">{personalInfo.phone}</p>
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
            <div className="contact-card glass-card p-4 text-center h-100">
              <div className="contact-icon-circle location mb-3">
                <FaMapMarkerAlt size={24} />
              </div>
              <h5 className="fw-bold text-white mb-1">Location & Availability</h5>
              <p className="text-light-emphasis small mb-2">{personalInfo.location}</p>
              <span className="availability-chip">Available for On-site & Remote Roles</span>
            </div>
          </div>

        </div>

        {/* Interactive Message Form */}
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-12 col-lg-8">
            <div className="contact-form-card glass-card p-4 p-md-5">
              
              <div className="mb-4 text-center">
                <h3 className="font-heading fw-bold text-white mb-2">Send a Direct Message</h3>
                <p className="text-light-emphasis small">  Select an inquiry type to help organize your message</p>
              </div>

              {/* Inquiry Intent Selector */}
              <div className="intent-pills-row mb-4">
                {[
                  "Full-Time Role Opportunity",
                  "Database / Oracle Consultation",
                  "AI & Web Project",
                  "General Inquiry"
                ].map((intent) => (
                  <button
                    key={intent}
                    type="button"
                    className={`intent-pill ${subjectIntent === intent ? "active" : ""}`}
                    onClick={() => setSubjectIntent(intent)}
                  >
                    {intent}
                  </button>
                ))}
              </div>

              {feedback && (
                <div className={`form-feedback-alert ${feedback.type} mb-4`}>
                  {feedback.type === 'success' ? (
                    <FaCheckCircle className="text-emerald fs-5 flex-shrink-0" />
                  ) : (
                    <FaExclamationCircle className="text-danger fs-5 flex-shrink-0" />
                  )}
                  <span>{feedback.msg}</span>
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="contact-form">
                
                <input type="hidden" name="inquiry_type" value={subjectIntent} />

                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label-custom">Your Name *</label>
                    <input 
                      type="text" 
                      name="user_name" 
                      required 
                      className="form-control-custom" 
                      placeholder="e.g. Jane Doe"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label-custom">Your Email *</label>
                    <input 
                      type="email" 
                      name="user_email" 
                      required 
                      className="form-control-custom" 
                      placeholder="e.g. recruiter@company.com"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label-custom">Subject / Topic</label>
                  <input 
                    type="text" 
                    name="subject" 
                    defaultValue={subjectIntent}
                    key={subjectIntent}
                    className="form-control-custom" 
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label-custom">Message *</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required 
                    className="form-control-custom" 
                    placeholder="Hello Simon, we would love to speak with you about an engineering position..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading} 
                  className="btn-submit-message w-100"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="spinner-icon me-2" /> Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="me-2" /> Send Message
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="portfolio-footer mt-5 pt-5 border-top border-secondary border-opacity-25">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
            
            <div className="text-center text-md-start">
              <h5 className="font-heading fw-bold text-white mb-1">{personalInfo.name}</h5>
              <p className="text-light-emphasis small m-0">
                Full Stack Developer · Oracle Database Administrator · AI & Machine Learning Developer
              </p>
            </div>

            {/* Social Icons */}
            <div className="d-flex gap-3">
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link github"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>

            {/* Back to top */}
            <button 
              onClick={scrollToTop} 
              className="btn-back-to-top"
              aria-label="Scroll back to top"
            >
              Back to top <FaArrowUp size={12} className="ms-1" />
            </button>

          </div>

          <div className="text-center mt-4 text-light-emphasis small">
            © {new Date().getFullYear()} {personalInfo.name}. Engineered with React, Vite & Modern CSS.
          </div>
        </footer>

      </div>
    </section>
  );
}