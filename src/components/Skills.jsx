import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { skills } from '../data/profile.js';

const ICON = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

function SkillIcon({ name, icon, badge }) {
  const [failed, setFailed] = useState(false);
  if (!icon || failed) {
    return <div className="skill-ico text">{badge || name.slice(0, 2).toUpperCase()}</div>;
  }
  return (
    <div className="skill-ico">
      <img src={ICON(icon)} alt="" width="28" height="28" loading="lazy" onError={() => setFailed(true)} />
    </div>
  );
}

export default function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="alt">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>Technologies I work with</h2>
          <p className="muted">
            Production experience across the stack, from UI components to cloud infrastructure and AI tooling.
          </p>
        </Reveal>

        <Reveal className="tabs" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              className="tab"
              aria-selected={cat === active}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="skill-grid" key={active}>
          {skills[active].map(([name, sub, icon, badge]) => (
            <div className="skill" key={name}>
              <SkillIcon name={name} icon={icon} badge={badge} />
              <div>{name}</div>
              <small>{sub}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
