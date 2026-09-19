import { FaSearch, FaTimes, FaLayerGroup, FaCode, FaDatabase, FaBrain } from "react-icons/fa";

export default function ProjectFilter({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) {
  const categories = [
    { id: "all", label: "All Projects", icon: <FaLayerGroup /> },
    { id: "fullstack", label: "Full Stack Web", icon: <FaCode /> },
    { id: "dba", label: "Oracle DBA", icon: <FaDatabase /> },
    { id: "ai", label: "AI & Machine Learning", icon: <FaBrain /> }
  ];

  return (
    <div className="projects-controls-container mb-5" data-aos="fade-up">
      {/* Category Filter Pills */}
      <div className="role-pills-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`role-pill ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.icon}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-bar-wrap">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search by tech or keyword (e.g. React, FastAPI, Oracle, Django)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button 
            className="search-clear-btn" 
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
}
