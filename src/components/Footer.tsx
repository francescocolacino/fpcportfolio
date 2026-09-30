import { site } from '../data/content';
import { Sun } from './Decor';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {year} {site.name}
        </p>
        <Sun className="site-footer__sun" />
        <a href="#top">Torna su ↑</a>
      </div>
    </footer>
  );
}
