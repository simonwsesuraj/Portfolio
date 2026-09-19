import { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { FaCheck } from 'react-icons/fa';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';
import './Hero.css';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7">
            <HeroContent 
              onCopyEmail={handleCopyEmail}
              copied={copied}
            />
          </div>
          <div className="col-12 col-lg-5">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Floating Copied Toast */}
      {copied && (
        <div className="custom-toast">
          <FaCheck className="text-emerald" />
          <span>Email copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
