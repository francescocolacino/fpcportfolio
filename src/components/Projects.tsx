import { useRef, useState } from 'react';
import { projects, type Project } from '../data/content';
import { ArrowUpRight, Sparkle, Sunrise } from './Decor';
import ProjectDialog from './ProjectDialog';

/** Pannello grafico tipografico: illustrativo, non una schermata del prodotto. */
function ProjectPanel({ project }: { project: Project }) {
  return (
    <div className={`project-panel project-panel--${project.tone}`} aria-hidden="true">
      <span className="project-panel__number">{project.number}</span>
      <span className="project-panel__title">{project.panelTitle}</span>
      <ul className="project-panel__words">
        {project.panelWords.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive(project);
  };

  const closeProject = () => {
    setActive(null);
    // Riporta il focus al pulsante che ha aperto il pannello.
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <section className="projects" id="progetti" aria-labelledby="progetti-title">
      <div className="container">
        <div className="projects__frame reveal">
          <header className="section-head">
            <Sunrise className="section-head__icon" />
            <h2 id="progetti-title">Progetti selezionati</h2>
            <span className="section-head__rule" aria-hidden="true" />
            <p className="section-head__meta">Problema, soluzione e il mio contributo</p>
          </header>

          <ol className="projects__list">
            {projects.map((project) => (
              <li key={project.id} className={`project project--${project.id}`}>
                <article className="project__card" aria-labelledby={`${project.id}-title`}>
                  <ProjectPanel project={project} />
                  <div className="project__body">
                    <p className="project__kind">
                      {project.kind} · {project.period}
                    </p>
                    <h3 id={`${project.id}-title`}>{project.title}</h3>

                    <dl className="project__facts">
                      <div>
                        <dt>Problema</dt>
                        <dd>{project.problem}</dd>
                      </div>
                      <div>
                        <dt>Soluzione</dt>
                        <dd>{project.solution}</dd>
                      </div>
                      <div className="project__contribution">
                        <dt>
                          <Sparkle className="icon icon--tiny" /> Il mio contributo
                        </dt>
                        <dd>{project.contribution}</dd>
                      </div>
                    </dl>

                    <div className="project__stack">
                      <span className="project__stack-label">Stack verificato</span>
                      <ul className="tags">
                        {project.stack.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project__actions">
                      <button
                        type="button"
                        className="btn btn--dark btn--small"
                        aria-haspopup="dialog"
                        onClick={(e) => openProject(project, e.currentTarget)}
                      >
                        Approfondisci<span className="sr-only"> {project.title}</span>
                      </button>
                      {project.repository && (
                        <a className="link-arrow" href={project.repository} target="_blank" rel="noopener noreferrer">
                          Repository
                          <span className="sr-only"> di {project.title} su GitHub (si apre in una nuova scheda)</span>
                          <ArrowUpRight className="icon" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <ProjectDialog project={active} onClose={closeProject} />
    </section>
  );
}
