import { processSteps } from '../data/content';
import { Sparkle } from './Decor';

export default function Process() {
  return (
    <section className="process" id="processo" aria-labelledby="processo-title">
      <div className="container">
        <div className="process__frame reveal">
          <header className="section-head section-head--light">
            <Sparkle className="section-head__icon section-head__icon--spark" />
            <h2 id="processo-title">Come lavoro</h2>
            <span className="section-head__rule" aria-hidden="true" />
          </header>
          <ol className="process__steps">
            {processSteps.map((step) => (
              <li key={step.number} className="process__step">
                <span className="process__num" aria-hidden="true">
                  {step.number}
                </span>
                <h3>
                  <span className="sr-only">Fase {step.number}: </span>
                  {step.title}
                </h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
