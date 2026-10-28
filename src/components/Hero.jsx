import { useState } from 'react';
import { profile } from '../data/profile.js';

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <>
      <section className={`hero ${photoOk ? 'has-photo' : ''}`} id="home">
        {photoOk && (
          <img
            className="hero-art"
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fetchPriority="high"
            onError={() => setPhotoOk(false)}
          />
        )}
        <div className="wrap">
          <div className="hero-copy">
            <p className="eyebrow">{profile.role}</p>
            <h1>
              Hi, I'm <span className="grad">{profile.name}.</span>
            </h1>
            <p className="lead">Full-stack engineer leveraging AI to build smarter software.</p>
            <p className="muted">
              Senior Software Engineer with 2.5+ years of experience building enterprise-scale full-stack applications
              with Node.js, Vue.js, React.js, PostgreSQL, Redis and AWS. I integrate enterprise platforms, optimize
              backend systems, and use AI-assisted development — Claude Code, Cursor, GitHub Copilot, prompt
              engineering and the Model Context Protocol (MCP) — to accelerate delivery and boost developer
              productivity. Certified by Anthropic as a Claude Architect and Claude Developer.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#experience">
                View My Work <span aria-hidden="true">→</span>
              </a>
              <a className="btn" href={profile.resume} download>
                Download Resume
              </a>
            </div>
            <div className="social">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${profile.email}`}>Email</a>
              <span>Chennai, India</span>
            </div>
          </div>
        </div>
        {photoOk && (
          <div className="hero-badges" aria-label="Certifications">
            <div className="float-chip"><b>CCA-F</b> Claude Certified Architect</div>
            <div className="float-chip"><b>CCDV-F</b> Claude Certified Developer</div>
          </div>
        )}
      </section>
    </>
  );
}
