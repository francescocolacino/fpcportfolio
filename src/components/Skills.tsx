import { skillGroups } from '../data/content';
import { Sparkle, Sun } from './Decor';

export default function Skills() {
  return (
    <section className="skills" id="competenze" aria-labelledby="competenze-title">
      <div className="container">
        <header className="section-head section-head--plain reveal">
          <Sparkle className="section-head__icon section-head__icon--spark" />
          <h2 id="competenze-title">Competenze</h2>
          <span className="section-head__rule" aria-hidden="true" />
          <p className="section-head__meta">Tecnologie usate nei progetti e nel percorso di studi</p>
        </header>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <section
              key={group.id}
              className={`skill-block skill-block--${group.tone} skill-block--${group.id} reveal`}
              aria-labelledby={`skill-${group.id}`}
            >
              {group.tone === 'blue' && <Sun className="skill-block__sun" rays={16} />}
              <h3 id={`skill-${group.id}`}>{group.title}</h3>
              <p className="skill-block__caption">{group.caption}</p>
              <ul className="skill-block__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
