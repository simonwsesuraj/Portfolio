import { personalInfo } from "../../data/portfolioData";
import { FaFileDownload } from "react-icons/fa";
import EducationTimeline from "./EducationTimeline";
import CompetencyHighlights from "./CompetencyHighlights";
import SkillsMatrix from "./SkillsMatrix";
import './Resume.css';

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-badge">Verified Credentials</div>
          <h2 className="section-title">Skills & Qualifications</h2>
          <p className="section-subtitle">
            Comprehensive breakdown of software proficiencies, enterprise database competencies, and academic background.
          </p>

          <div className="mt-4">
            <a
              href={personalInfo.resumePdf}
              download="Simon_Sesuraj_Resume.pdf"
              className="btn-download-resume"
              title="Download Full Resume PDF"
            >
              <FaFileDownload className="me-2" /> Download Complete Resume
            </a>
          </div>
        </div>

        {/* Education & Experience Timeline Grid */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-lg-6" data-aos="fade-right">
            <EducationTimeline />
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-left">
            <CompetencyHighlights />
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <SkillsMatrix />
      </div>
    </section>
  );
}
