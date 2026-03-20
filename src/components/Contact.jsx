import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import './Contact.css';

export default function Contact() {

  const form = useRef();

  const phoneNumber = "919597964813";
  const message = "Hello Simon, I want to connect with you";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // ✅ Send Email Function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hdn752s",     
      "template_qe00rqh",    
      form.current,
      "cR_zydqSjV1jiQNiG"       
    )
    .then(() => {
      alert("Message sent successfully ✅");
      form.current.reset();
    })
    .catch(() => {
      alert("Failed to send ❌");
    });
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold contact-title">Contact Me</h2>
          <p className="text-gradient">Get in touch for projects or collaborations</p>
        </div>

        <div className="row g-4">

          {/* Email */}
          <div className="col-12 col-md-4">
            <div className="contact-card text-center p-4 h-100 shadow-sm">
              <FaEnvelope size={30} className="mb-3 text-primary"/>
              <h5>Email</h5>
              <p className="text-gradient">simonwsesuraj@gmail.com</p>

              {/* ✅ Gmail Open */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=simonwsesuraj@gmail.com&su=Portfolio Contact&body=Hello Simon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm mt-2"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="col-12 col-md-4">
            <div className="contact-card text-center p-4 h-100 shadow-sm">
              <FaPhone size={30} className="mb-3 text-success"/>
              <h5>WhatsApp</h5>
              <p className="text-gradient">+91 9597964813</p>

              {/* ✅ WhatsApp */}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm mt-2"
              >
                <FaWhatsapp className="me-2"/> Message
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="col-12 col-md-4">
            <div className="contact-card text-center p-4 h-100 shadow-sm">
              <FaMapMarkerAlt size={30} className="mb-3 text-danger"/>
              <h5>Location</h5>
              <p className="text-gradient">Trichy, India</p>
            </div>
          </div>

        </div>

        <div className="row mt-5">
          <div className="col-12 d-flex gap-5 justify-content-center align-items-center">
            <a
            href="https://www.linkedin.com/in/simonwsesuraj"
            target="_blank" 
            rel="noopener noreferrer" 
            className=" social-icon social-icon-linkedin">
            <FaLinkedin/>
            </a>

            <a
            href="https://github.com/simonwsesuraj"
            target="_blank" 
            rel="noopener noreferrer" 
            className=" social-icon social-icon-github">
            <FaGithub/>
            </a>

            <a
            href="https://www.instagram.com/p/DK7ppqABxT3/?igsh=MWlkbXQxYmJmZmJlaw%3D%3D"
            target="_blank" 
            rel="noopener noreferrer" 
            className=" social-icon social-icon-instagram">
            <FaInstagram/>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}