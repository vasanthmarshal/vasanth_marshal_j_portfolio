import Reveal from './Reveal.jsx';
import { aiProjects } from '../data/profile.js';

export default function AIEngineering() {
  return (
    <section id="ai">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">GenAI &amp; AI Engineering</p>
          <h2>Building with Claude, not just using it</h2>
          <p className="muted">Anthropic-certified, with agents and tooling that run in real delivery pipelines.</p>
        </Reveal>
        <div className="ai-grid">
          {aiProjects.map((p) => (
            <Reveal as="article" className="card ai-card" key={p.title}>
              <span className="card-icon" aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <p className="impact">{p.impact}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
