import { about, timeline } from '../data/content';
import { Sparkle, Sunburst } from './Decor';

export default function About() {
  return (
    <section className="about" id="chi-sono" aria-labelledby="chi-sono-title">
      <Sunburst className="about__burst" rays={24} />
      <div className="container about__grid">
        <div className="about__text reveal">
          <header className="section-head section-head--plain">
            <Sparkle className="section-head__icon section-head__icon--spark" />
            <h2 id="chi-sono-title">Chi sono</h2>
          </header>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="about__p">
              {p}
            </p>
          ))}

          <div className="about__meta">
            <div>
              <h3 className="mini-title">Punti di forza</h3>
              <ul className="tags tags--outline">
                {about.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
            <div className="about__pair">
              <div>
                <h3 className="mini-title">Lingue</h3>
                <ul className="about__langs">
                  {about.languages.map((l) => (
                    <li key={l.name}>
                      <strong>{l.name}</strong> {l.level}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mini-title">Interessi</h3>
                <ul className="about__langs">
                  {about.interests.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="about__timeline reveal">
          <h3 className="timeline__title">Percorso</h3>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.title} className="timeline__item">
                <p className="timeline__period">{item.period}</p>
                <h4>{item.title}</h4>
                <p className="timeline__place">{item.place}</p>
                <p className="timeline__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
