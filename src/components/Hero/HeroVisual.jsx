import { personalInfo } from '../../data/portfolioData';

export default function HeroVisual() {
  return (
    <div className="text-center" data-aos="fade-left">
      <div className="hero-portrait-card">
        {/* Prominent, Clean Photo Frame */}
        <div className="hero-portrait-frame">
          <img 
            src={personalInfo.avatar} 
            alt={personalInfo.name} 
            className="hero-portrait-img"
            loading="eager"
          />
        </div>

        {/* 4 Clean, Visible Stat Cards */}
        <div className="hero-stats-grid">
          <div className="stat-box">
            <div className="stat-number">8.64</div>
            <div className="stat-name">M.Sc CS (CGPA)</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">8+</div>
            <div className="stat-name">Completed Projects</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">3</div>
            <div className="stat-name">Tracks (Web, DBA, AI)</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">15+</div>
            <div className="stat-name">Databases & Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
}
