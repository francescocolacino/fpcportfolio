import { site } from '../data/content';
import { ArrowRight, Download, Pin, Sparkle, Sun, Sunburst } from './Decor';

export default function Hero() {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__disc" aria-hidden="true" />
      <Sunburst className="hero__burst" />

      <div className="container hero__head">
        <p className="hero__mega" aria-hidden="true">
          Portfolio
        </p>
        <ul className="hero__tags" aria-label="Ambiti">
          {site.heroTags.map((tag, i) => (
            <li key={tag}>
              {i > 0 && <span aria-hidden="true">•</span>}
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="container hero__grid">
        <div className="hero__intro">
          <p className="eyebrow">
            <Sparkle className="eyebrow__icon" /> Ciao, sono
          </p>
          <h1 id="hero-title" className="hero__name">
            Francesco Pio <span>Colacino</span>
          </h1>
          <p className="hero__role">{site.role}</p>
          <p className="hero__lead">{site.tagline}</p>

          <ul className="hero__chips">
            <li className="chip chip--outline">
              <Pin className="icon" /> {site.location}
            </li>
            <li className="chip chip--blue">{site.mobility}</li>
            <li className="chip chip--yellow">{site.openTo}</li>
          </ul>

          <div className="hero__ctas">
            <a className="btn btn--dark" href="#progetti">
              Esplora i progetti <ArrowRight className="icon" />
            </a>
            <a className="btn btn--outline" href={site.cv.href} download={site.cv.fileName}>
              <Download className="icon" /> Scarica il CV
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__panel">
            <Sparkle className="hero__spark" />
            <span className="hero__sunset" aria-hidden="true" />
            {/* Foto originale scontornata in locale: la figura esce dal blocco azzurro. */}
            <picture className="hero__cutout">
              <source
                type="image/webp"
                srcSet={`${base}img/francesco-cutout-460.webp 460w, ${base}img/francesco-cutout-680.webp 680w`}
                sizes="(min-width: 861px) 22vw, 60vw"
              />
              <img
                src={`${base}img/francesco-cutout-680.png`}
                srcSet={`${base}img/francesco-cutout-460.png 460w, ${base}img/francesco-cutout-680.png 680w`}
                sizes="(min-width: 861px) 22vw, 60vw"
                width={680}
                height={1604}
                alt={site.photo.alt}
              />
            </picture>
            <div className="stamp" aria-hidden="true">
              <span>Laurea</span>
              <Sun className="stamp__sun" />
              <span>2026</span>
            </div>
            <div className="orbit" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="orbit-path" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
                </defs>
                <text>
                  <textPath href="#orbit-path" textLength="272" lengthAdjust="spacing">
                    Interfacce · API · Dati · Codice ·
                  </textPath>
                </text>
              </svg>
              <Sun className="orbit__sun" rays={8} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="facts">
          {site.heroFacts.map((fact) => (
            <div key={fact.label} className="facts__item">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
