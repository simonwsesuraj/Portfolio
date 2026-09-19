import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
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

  return (
    <div className="contact-form-card glass-card p-4 p-md-5">
      <div className="mb-4 text-center">
        <h3 className="font-heading fw-bold text-white mb-2">Send a Direct Message</h3>
        <p className="text-muted small">Select your inquiry type to route your message appropriately</p>
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
  );
}
