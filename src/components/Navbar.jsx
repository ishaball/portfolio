import { useEffect, useMemo, useState } from 'react';

import myImage from '../assets/myimage.jpeg';

const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 10);

      const sections = items
        .map((it) => document.getElementById(it.id))
        .filter(Boolean);

      const current = sections
        .map((sec) => {
          const r = sec.getBoundingClientRect();
          return { id: sec.id, top: r.top };
        })
        .sort((a, b) => Math.abs(a.top - 90) - Math.abs(b.top - 90))[0];

      if (current?.id) setActive(current.id);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = useMemo(() => items, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? 'nav nav--scrolled' : 'nav'}>
      <div className="nav__inner">

        <div
          className="brand"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            className="brand__avatar"
            src={myImage}
            alt="Your photo"
            loading="lazy"
          />
          <span className="brand__name">Isha Ball</span>

          
        </div>

        <nav className={menuOpen ? 'navlinks navlinks--open' : 'navlinks'}>
          {links.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={active === it.id ? 'navlink navlink--active' : 'navlink'}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(it.id);
              }}
            >
              {it.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}