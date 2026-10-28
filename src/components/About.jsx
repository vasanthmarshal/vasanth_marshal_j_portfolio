import Reveal from './Reveal.jsx';
import { aboutPills } from '../data/profile.js';

export default function About() {
  return (
    <section id="about">
      <Reveal className="wrap about-grid">
        <div>
          <p className="eyebrow">About me</p>
          <h2>
            Full-stack engineer who treats <span className="grad">AI as a core tool.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I'm a Senior Software Engineer at Bounteous x Accolite in Chennai, building enterprise-scale applications —
            payments, financing, title transfers, document signing and delivery workflows — on Node.js, Vue.js,
            PostgreSQL, Redis and AWS.
          </p>
          <p>
            Alongside shipping product, I design AI development workflows: <code>CLAUDE.md</code> conventions, Skills,
            Hooks, Commands, sub-agents and MCP integrations that make a whole team faster and more consistent. I focus
            on applying Generative AI to software engineering, developer productivity and workflow automation.
          </p>
          <div className="pill-grid">
            {aboutPills.map(([title, sub]) => (
              <div className="pill" key={title}>
                <strong>{title}</strong>
                <small>{sub}</small>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
