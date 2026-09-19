import ContactInfoCards from "./ContactInfoCards";
import ContactForm from "./ContactForm";
import './Contact.css';

export default function Contact() {
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
        <ContactInfoCards />

        {/* Interactive Message Form */}
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-12 col-lg-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
