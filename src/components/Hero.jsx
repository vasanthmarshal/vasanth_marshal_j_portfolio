import { useState } from 'react';
import { profile, stats } from '../data/profile.js';

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
            <p className="lead">
              I build enterprise-scale full-stack products and use AI agents to ship them faster and cleaner.
            </p>
            <p className="muted">
              2.5+ years across Node.js, Vue.js, React, PostgreSQL, Redis and AWS — plus hands-on Claude Code, MCP
              servers and reusable AI development workflows. Certified by Anthropic as a Claude Architect and Claude
              Developer.
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

      <section className="stats" aria-label="Key numbers">
        <div className="wrap stats-grid">
          {stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
