import { useEffect, useState } from 'react';
import { navLinks } from '../data.js';

function Links({ onNavigate }) {
  return (
    <>
      <ul className="nav__links">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={onNavigate}>{l.label}</a>
          </li>
        ))}
      </ul>
      <div className="nav__auth">
        <a href="#signup" onClick={onNavigate}>Sign in</a>
        <a className="btn" href="#signup" onClick={onNavigate}>Sign up</a>
      </div>
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="nav">
      <a className="nav__logo" href="#home" aria-label="GPT-3 home">GPT-3</a>
      <nav className="nav__desktop" aria-label="Main">
        <Links onNavigate={close} />
      </nav>
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>
      {open && (
        <nav id="mobile-menu" className="nav__mobile" aria-label="Mobile">
          <Links onNavigate={close} />
        </nav>
      )}
    </header>
  );
}
