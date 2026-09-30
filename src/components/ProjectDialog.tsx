import { useEffect, useRef } from 'react';
import type { MouseEvent, SyntheticEvent } from 'react';
import type { Project } from '../data/content';
import { ArrowUpRight, Close, Sparkle } from './Decor';

interface Props {
  project: Project | null;
  onClose: () => void;
}

/**
 * Pannello di approfondimento basato su <dialog> nativo:
 * showModal() rende inerte il resto della pagina, ESC chiude il pannello,
 * il focus va al pulsante di chiusura e poi torna al pulsante di apertura.
 */
export default function ProjectDialog({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
      closeRef.current?.focus();
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  const handleCancel = (e: SyntheticEvent<HTMLDialogElement>) => {
    e.preventDefault(); // ESC: la chiusura passa dallo stato React
    onClose();
  };

  const handleClick = (e: MouseEvent<HTMLDialogElement>) => {
    // Un clic sullo sfondo, fuori dal contenuto, chiude il pannello.
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="dialog"
      aria-labelledby="dialog-title"
      onCancel={handleCancel}
      onClick={handleClick}
    >
      {project && (
        <div className="dialog__content">
          <div className={`dialog__top dialog__top--${project.tone}`}>
            <p className="dialog__kind">
              {project.number} · {project.kind} · {project.period}
            </p>
            <h2 id="dialog-title">{project.title}</h2>
            <button ref={closeRef} type="button" className="dialog__close" onClick={onClose}>
              <Close className="icon" />
              <span>Chiudi</span>
            </button>
          </div>

          <div className="dialog__body">
            <p className="dialog__intro">{project.details.intro}</p>

            <div className="dialog__cols">
              <section aria-labelledby="dialog-features">
                <h3 id="dialog-features">Funzionalità</h3>
                <ul className="list-dash">
                  {project.details.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </section>
              <section aria-labelledby="dialog-contrib" className="dialog__contrib">
                <h3 id="dialog-contrib">
                  <Sparkle className="icon icon--tiny" /> Il mio contributo
                </h3>
                <ul className="list-dash">
                  {project.details.contributionPoints.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>
            </div>

            <p className="dialog__team">{project.teamNote}</p>
            {project.details.note && <p className="dialog__note">{project.details.note}</p>}

            {project.details.excerpt && (
              <figure className="excerpt">
                <figcaption>
                  <span className="excerpt__badge">Estratto reale · {project.details.excerpt.language}</span>
                  <span className="excerpt__source">{project.details.excerpt.source}</span>
                </figcaption>
                <pre tabIndex={0} aria-label={`Codice tratto da ${project.details.excerpt.source}`}>
                  <code>{project.details.excerpt.code}</code>
                </pre>
              </figure>
            )}

            <div className="dialog__footer">
              <ul className="tags" aria-label="Stack verificato">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="dialog__actions">
                {project.repository && (
                  <a className="btn btn--outline btn--small" href={project.repository} target="_blank" rel="noopener noreferrer">
                    Apri il repository <ArrowUpRight className="icon" />
                    <span className="sr-only"> (si apre in una nuova scheda)</span>
                  </a>
                )}
                <button type="button" className="btn btn--dark btn--small" onClick={onClose}>
                  Chiudi il pannello
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
