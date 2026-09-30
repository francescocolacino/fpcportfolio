import { site } from '../data/content';
import { ArrowRight, Download, Mail, Phone, Pin, Sparkle, Sun, Sunburst } from './Decor';

export default function Contact() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Contatto dal portfolio')}`;
  return (
    <section className="contact" id="contatti" aria-labelledby="contatti-title">
      <div className="container contact__grid">
        <div className="contact__cta reveal">
          <Sunburst className="contact__burst" rays={20} />
          <p className="contact__kicker">Hai una posizione aperta o un progetto?</p>
          <h2 id="contatti-title">
            Costruiamo qualcosa <span>di solido</span>
          </h2>
          <p className="contact__lead">
            Sto cercando opportunità come Junior Software Engineer. Scrivimi: rispondo volentieri a colloqui, domande
            sui progetti o proposte di collaborazione.
          </p>
          <a className="btn btn--dark" href={mailto}>
            Scrivimi un’email <ArrowRight className="icon" />
          </a>
        </div>

        <div className="contact__info reveal">
          <h3 className="contact__info-title">
            <Sparkle className="icon icon--tiny" /> Contatti
          </h3>
          <ul className="contact__list">
            <li>
              <Mail className="icon" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Phone className="icon" />
              <a href={site.phone.href}>{site.phone.display}</a>
            </li>
            <li>
              <Pin className="icon" />
              <span>
                {site.location}
                <span className="contact__mobility">{site.mobility}</span>
              </span>
            </li>
          </ul>

          <div className="contact__card">
            <Sun className="contact__card-sun" />
            <p>Il curriculum completo in PDF</p>
            <a className="btn btn--yellow btn--small" href={site.cv.href} download={site.cv.fileName}>
              <Download className="icon" /> Scarica il CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
