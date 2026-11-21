
import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

import { personalInfo } from "../data/portfolioData";

import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
  FaArrowUp,
  FaExternalLinkAlt
} from "react-icons/fa";

import "./Contact.css";

export default function Contact() {
  const form = useRef(null);
  const feedbackTimer = useRef(null);

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const [subject, setSubject] = useState("Full-Time Job Opportunity");

  // Clear feedback timer when component unmounts
  useEffect(() => {
    return () => {
      if (feedbackTimer.current) {
        clearTimeout(feedbackTimer.current);
      }
    };
  }, []);

  // Send message using EmailJS
  const sendEmail = async (event) => {
    event.preventDefault();

    if (loading || !form.current) return;

    setLoading(true);
    setFeedback(null);

    if (feedbackTimer.current) {
      clearTimeout(feedbackTimer.current);
    }

    try {
      await emailjs.sendForm(
        "service_hdn752s",
        "template_qe00rqh",
        form.current,
        "cR_zydqSjV1jiQNiG"
      );

      setFeedback({
        type: "success",
        msg: "Your message has been sent successfully. Thank you for reaching out!"
      });

      form.current.reset();
      setSubject("Full-Time Job Opportunity");

      feedbackTimer.current = setTimeout(() => {
        setFeedback(null);
      }, 6000);

    } catch (error) {
      console.error("EmailJS Error:", error);

      setFeedback({
        type: "error",
        msg: "Unable to send your message right now. Please contact me directly through email or WhatsApp."
      });

    } finally {
      setLoading(false);
    }
  };

  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${
    personalInfo.whatsappNumber
  }?text=${encodeURIComponent(
    personalInfo.whatsappMessage || "Hello, I would like to connect with you."
  )}`;

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">

        {/* ==============================
            SECTION HEADING
        ============================== */}

        <div className="contact-heading" data-aos="fade-up">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="contact-heading-description">
            I'm open to discussing software development opportunities,
            technical collaborations and interesting projects.
            Feel free to get in touch.
          </p>
        </div>

        {/* ==============================
            CONTACT CONTENT
        ============================== */}

        <div className="row g-4 align-items-stretch">

          {/* LEFT: CONTACT INFORMATION */}

          <div className="col-12 col-lg-5" data-aos="fade-right">

            <div className="contact-info-panel h-100">

              <div className="contact-info-heading">
                <h3>Contact Information</h3>

                <p>
                  Choose your preferred way to reach me.
                </p>
              </div>

              {/* Email */}

              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-info-item"
              >
                <div className="contact-info-icon email">
                  <FaEnvelope />
                </div>

                <div className="contact-info-content">
                  <span className="contact-info-label">
                    Email
                  </span>

                  <span className="contact-info-value">
                    {personalInfo.email}
                  </span>
                </div>

                <FaExternalLinkAlt className="contact-info-arrow" />
              </a>

              {/* WhatsApp */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <div className="contact-info-icon whatsapp">
                  <FaWhatsapp />
                </div>

                <div className="contact-info-content">
                  <span className="contact-info-label">
                    WhatsApp
                  </span>

                  <span className="contact-info-value">
                    {personalInfo.phone || "Start a conversation"}
                  </span>
                </div>

                <FaExternalLinkAlt className="contact-info-arrow" />
              </a>

              {/* Location */}

              <div className="contact-info-item location-item">
                <div className="contact-info-icon location">
                  <FaMapMarkerAlt />
                </div>

                <div className="contact-info-content">
                  <span className="contact-info-label">
                    Location
                  </span>

                  <span className="contact-info-value">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Availability */}

              <div className="contact-availability">
                <span className="availability-indicator"></span>

                <span>
                  Open to Full-Time Opportunities
                </span>
              </div>

              {/* Social Profiles */}

              <div className="contact-social-section">
                <h4>Connect with me</h4>

                <div className="contact-social-links">

                  {personalInfo.socials?.linkedin && (
                    <a
                      href={personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label="LinkedIn Profile"
                      title="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  )}

                  {personalInfo.socials?.github && (
                    <a
                      href={personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label="GitHub Profile"
                      title="GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}

                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}

          <div className="col-12 col-lg-7" data-aos="fade-left">

            <div className="contact-form-panel h-100">

              <div className="contact-form-heading">
                <h3>Send Me a Message</h3>

                <p>
                  Fill out the form below and I'll get back to you.
                </p>
              </div>

              {/* Feedback Message */}

              {feedback && (
                <div
                  className={`contact-feedback ${feedback.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {feedback.type === "success" ? (
                    <FaCheckCircle />
                  ) : (
                    <FaExclamationCircle />
                  )}

                  <span>{feedback.msg}</span>
                </div>
              )}

              {/* Email Form */}

              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form"
              >

                {/* Name and Email */}

                <div className="row g-3">

                  <div className="col-12 col-md-6">
                    <label
                      htmlFor="contact-name"
                      className="contact-form-label"
                    >
                      Your Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="contact-name"
                      name="user_name"
                      className="contact-form-control"
                      placeholder="Enter your name"
                      autoComplete="name"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label
                      htmlFor="contact-email"
                      className="contact-form-label"
                    >
                      Email Address <span>*</span>
                    </label>

                    <input
                      type="email"
                      id="contact-email"
                      name="user_email"
                      className="contact-form-control"
                      placeholder="Enter your email"
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </div>

                </div>

                {/* Subject */}

                <div className="contact-form-group">
                  <label
                    htmlFor="contact-subject"
                    className="contact-form-label"
                  >
                    Subject
                  </label>

                  <select
                    id="contact-subject"
                    name="subject"
                    className="contact-form-control"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  >
                    <option value="Full-Time Job Opportunity">
                      Full-Time Job Opportunity
                    </option>

                    <option value="Software Development">
                      Software Development
                    </option>

                    <option value="Oracle Database">
                      Oracle Database
                    </option>

                    <option value="AI and Machine Learning">
                      AI & Machine Learning
                    </option>

                    <option value="Technical Collaboration">
                      Technical Collaboration
                    </option>

                    <option value="General Inquiry">
                      General Inquiry
                    </option>
                  </select>
                </div>

                {/* Hidden Inquiry Type */}

                <input
                  type="hidden"
                  name="inquiry_type"
                  value={subject}
                />

                {/* Message */}

                <div className="contact-form-group">
                  <label
                    htmlFor="contact-message"
                    className="contact-form-label"
                  >
                    Your Message <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    className="contact-form-control contact-message-field"
                    placeholder="Write your message here..."
                    rows="5"
                    maxLength={3000}
                    required
                  ></textarea>
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <FaSpinner className="contact-spinner" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>

                <p className="contact-form-note">
                  <span>*</span> Required fields
                </p>

              </form>

            </div>
          </div>

        </div>

        {/* ==============================
            FOOTER
        ============================== */}

        <footer className="portfolio-footer">

          <div className="footer-main">

            {/* Brand */}

            <div className="footer-brand">
              <a href="#home" className="footer-brand-name">
                {personalInfo.name}
              </a>

              <p>
                Full Stack Developer · Oracle DBA · AI & ML
              </p>
            </div>

            {/* Footer Social Links */}

            <div className="footer-social-links">

              {personalInfo.socials?.linkedin && (
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="footer-social-link"
                >
                  <FaLinkedin />
                </a>
              )}

              {personalInfo.socials?.github && (
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="footer-social-link"
                >
                  <FaGithub />
                </a>
              )}

            </div>

            {/* Back to Top */}

            <button
              type="button"
              className="footer-back-top"
              onClick={scrollToTop}
            >
              Back to Top
              <FaArrowUp />
            </button>

          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} {personalInfo.name}.
              All rights reserved.
            </p>

            <p>
              Built with React & Bootstrap.
            </p>
          </div>

        </footer>

      </div>
    </section>
  );
}
