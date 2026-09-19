import { useState, useMemo } from "react";
import { projects } from "../../data/projectsData";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import './Projects.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Instant filtering based on Category and Search Query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-badge">Case Studies & Production Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore web applications, enterprise database optimizations, and intelligent AI models engineered with industry best practices.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <ProjectFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.length === 0 ? (
            <div className="col-12 text-center py-5">
              <div className="glass-card p-5">
                <p className="fs-5 text-muted mb-3">No projects found matching your search criteria.</p>
                <button
                  className="btn-clear-filters"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          ) : (
            filteredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className="col-12 col-md-6 col-lg-4" 
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
              >
                <ProjectCard 
                  project={project}
                  onOpenModal={setActiveModalProject}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Project Case-Study Modal */}
      <ProjectModal 
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
