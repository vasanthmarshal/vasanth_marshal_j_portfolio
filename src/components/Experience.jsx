import Reveal from './Reveal.jsx';
import { career, jobBullets, education } from '../data/profile.js';

export default function Experience() {
  return (
    <section id="experience" className="alt">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Bounteous x Accolite</h2>
          <p className="muted">Global Infocity Park, Chennai · Feb 2024 – Present</p>
        </Reveal>

        <Reveal as="ol" className="career" aria-label="Role progression">
          {career.map((r) => (
            <li key={r.title} className={r.current ? 'current' : ''}>
              <span className="career-dot" />
              <b>{r.title}</b>
              <small>{r.dates}</small>
            </li>
          ))}
        </Reveal>

        <Reveal className="job">
          <ul className="bullets">
            {jobBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="edu">
          <div>
            <p className="eyebrow">Education</p>
            <h3>{education.school}</h3>
            <p className="muted">{education.degree}</p>
          </div>
          <div className="edu-meta">
            {education.place}
            <br />
            {education.dates}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
