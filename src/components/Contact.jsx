import Reveal from './Reveal.jsx';
import { profile } from '../data/profile.js';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact-box">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let's build something great.</h2>
            <p className="muted">
              Open to conversations about full-stack engineering, GenAI tooling and AI-assisted development. The
              quickest way to reach me is email.
            </p>
            <ul className="contact-list">
              <li><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><span>Phone</span><a href={profile.phoneHref}>{profile.phone}</a></li>
              <li>
                <span>LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedinLabel}</a>
              </li>
              <li><span>Location</span>{profile.location}</li>
            </ul>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}?subject=Hello%20Vasanth`}>Send an Email</a>
            <a className="btn" href={profile.resume} download>Download Resume</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
