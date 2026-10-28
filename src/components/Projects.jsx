import Reveal from './Reveal.jsx';
import { featuredProject as fp, otherProjects } from '../data/profile.js';

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((t) => (
        <span className="tag" key={t}>{t}</span>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="alt">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Projects</p>
          <h2>Selected work</h2>
        </Reveal>

        <Reveal as="article" className="project featured">
          <p className="project-kicker">{fp.kicker}</p>
          <h3>{fp.title}</h3>
          <p className="muted">{fp.summary}</p>
          <ul className="bullets two-col">
            {fp.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <Tags tags={fp.tags} />
        </Reveal>

        <div className="project-grid">
          {otherProjects.map((p) => (
            <Reveal as="article" className="card" key={p.title}>
              <p className="project-kicker">{p.kicker}</p>
              <h3>{p.title}</h3>
              <p className="muted">{p.summary}</p>
              <ul className="bullets">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Tags tags={p.tags} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
