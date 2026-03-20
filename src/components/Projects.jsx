import { useState } from "react";
import { projects } from "../data/projectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import './Projects.css';

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold project-title">Projects</h2>
          <p style={{color: '#c084fc'}}>Some of my recent work</p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4" data-aos="zoom-in">
              
              <div className="card project-card shadow-sm h-100">

                {/* Image */}
                <div className="img-wrapper">
                  <img
                    src={project.image}
                    className="card-img-top project-img"
                    alt={project.title}
                  />
                </div>

                {/* Tech Stack */}
                <div className="d-flex justify-content-between align-items-center px-3 py-3">
                 {project.tech.map((tech,index) =>
                <span key={index} className="badge bg-success text-white">
                  {tech}
                </span>)}
                </div>
                <div className="card-body d-flex flex-column">
                  
                  {/* Project Title */}
                  <h5 className="card-title animated-title">{project.title}</h5>

                  {/* Description */}
                  <p className={`card-text flex-grow-1 ${expandedId === project.id ? "expanded" : "clamp"}`}>
                    {project.description}
                  </p>

                  {/* Read More */}
                  <span
                    className="read-more"
                    onClick={() => toggleReadMore(project.id)}
                  >
                    {expandedId === project.id ? "Show Less" : "Read More..."}
                  </span>

                  {/* Buttons */}
                  <div className="mt-3 d-flex justify-content-between">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark custom-btn">
                      <FaGithub className="me-2" /> GitHub
                    </a>

                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary custom-btn">
                      <FaExternalLinkAlt className="me-2" /> Live Demo
                    </a>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}