import { useEffect, useRef, useState } from 'react';
import { navLinks, site } from '../data/content';
import { Download, Sun } from './Decor';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia('(min-width: 861px)');
    const onChange = () => mq.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="site-header__inner">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand__name">Francesco Pio</span>
          <span className="brand__name">Colacino</span>
        </a>

        <span className="site-header__rule" aria-hidden="true">
          <span />
          <Sun className="site-header__sun" />
          <span />
        </span>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-principale"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-toggle__bars" aria-hidden="true" />
          <span className="menu-toggle__label">{open ? 'Chiudi' : 'Menu'}</span>
        </button>

        <nav id="menu-principale" className="site-nav" aria-label="Navigazione principale">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn btn--small btn--dark" href={site.cv.href} download={site.cv.fileName} onClick={close}>
                <Download className="icon" />
                Scarica il CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
