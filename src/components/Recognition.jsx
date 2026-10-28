import Reveal from './Reveal.jsx';
import { awards, certs } from '../data/profile.js';

export default function Recognition() {
  return (
    <section id="recognition">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Recognition &amp; Certifications</p>
          <h2>Awards and credentials</h2>
        </Reveal>

        <div className="award-grid">
          {awards.map(([icon, title, text]) => (
            <Reveal className="award" key={title}>
              <span className="award-ico" aria-hidden="true">{icon}</span>
              <b>{title}</b>
              <small>{text}</small>
            </Reveal>
          ))}
        </div>

        <div className="cert-grid">
          {certs.map((c) => (
            <Reveal className={`cert ${c.highlight ? 'hl' : ''}`} key={c.title}>
              <b>{c.title}</b>
              <small>{c.sub}</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
