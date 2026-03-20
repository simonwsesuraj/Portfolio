import { FaCode, FaDatabase, FaBrain } from "react-icons/fa";
import './About.css';
export default function About() {
  return (
    <section className="py-5 about-section" id="about">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold about-title">About Me</h2>
          <p style={{color: '#c084fc'}}>Get to know me</p>
        </div>

        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-12 col-lg-6" data-aos="fade-right">
            <h3 className="fw-bold mb-3">Hi, I'm Simon 👋</h3>

            <p>
              I’m a full-stack developer specializing in React and Django, 
              building scalable and responsive web applications.
            </p>

            <p>
              I also work with Machine Learning using Pandas, Scikit-learn, 
              and Matplotlib to create intelligent solutions.
            </p>

            {/* 🔥 Progress Bars */}
            <div className="mt-4">

              <p className="mb-1">React</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-primary" style={{width: "85%"}}>85%</div>
              </div>

              <p className="mb-1">Django</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" style={{width: "80%"}}>80%</div>
              </div>

              <p className="mb-1">Machine Learning</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger" style={{width: "75%"}}>75%</div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-6" data-aos="fade-left">
            <div className="row g-4">

              <div className="col-12 col-md-6">
                <div className="card about-card text-center p-3">
                  <FaCode size={30} className="text-primary mb-2"/>
                  <h5>Web Development</h5>
                  <p className="text-info fw-bold">React, Django</p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card about-card text-center p-3">
                  <FaDatabase size={30} className="text-success mb-2"/>
                  <h5>Database</h5>
                  <p className="text-info fw-bold">Oracle, MongoDB</p>
                </div>
              </div>

              <div className="col-12">
                <div className="card about-card text-center p-3">
                  <FaBrain size={30} className="text-danger mb-2"/>
                  <h5>Machine Learning</h5>
                  <p className="text-info fw-bold">Pandas, Scikit-learn</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}