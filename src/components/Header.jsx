import { useState } from 'react';
import { profile, navLinks } from '../data/profile.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="wrap nav" aria-label="Main navigation">
        <a className="brand" href="#home">
          <span className="brand-mark">{profile.initials}</span> {profile.shortName}
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="navlinks"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navlinks ${open ? 'open' : ''}`} id="navlinks" onClick={() => setOpen(false)}>
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <a className="btn btn-primary nav-cta" href="#contact">Let's Connect</a>
      </nav>
    </header>
  );
}
