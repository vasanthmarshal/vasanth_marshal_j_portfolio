import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React &amp; Vite</span>
      </div>
    </footer>
  );
}
