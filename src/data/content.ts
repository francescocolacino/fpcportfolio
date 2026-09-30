/**
 * Contenuti del portfolio.
 * Modifica questo file per aggiornare testi, progetti, competenze e contatti:
 * i componenti leggono tutto da qui.
 */

export type Tone = 'blue' | 'brown' | 'cream';

export interface CodeExcerpt {
  /** Percorso del file nel repository da cui è tratto l'estratto. */
  source: string;
  language: string;
  code: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  kind: string;
  period: string;
  /** Colore del pannello tipografico della scheda. */
  tone: Tone;
  /** Titolo grande del pannello tipografico (illustrativo, non uno screenshot). */
  panelTitle: string;
  /** Parole chiave mostrate nel pannello tipografico. */
  panelWords: string[];
  problem: string;
  solution: string;
  contribution: string;
  /** Precisazione su progetto di gruppo o individuale. */
  teamNote: string;
  stack: string[];
  repository?: string;
  details: {
    intro: string;
    features: string[];
    contributionPoints: string[];
    note?: string;
    excerpt?: CodeExcerpt;
  };
}

export interface SkillGroup {
  id: string;
  title: string;
  caption: string;
  items: string[];
  tone: 'blue' | 'yellow' | 'cream' | 'brown';
}

export interface TimelineItem {
  period: string;
  title: string;
  place: string;
  text: string;
}

export const site = {
  name: 'Francesco Pio Colacino',
  role: 'Laureato in Ingegneria Informatica',
  tagline:
    "Sviluppo applicazioni web, mobile e software, dall'interfaccia alle API e ai dati. Parto da un'idea e la porto fino al prodotto finale completo: analisi dei requisiti, documentazione e diagrammi, mockup e sviluppo.",
  location: 'Poggiomarino, Napoli',
  mobility: 'Disponibile a trasferirmi ovunque o a lavorare da remoto',
  openTo: 'Interessato a opportunità come Junior Software Engineer',
  email: 'fpcolacino@gmail.com',
  phone: { display: '+39 392 006 4842', href: 'tel:+393920064842' },
  cv: {
    href: `${import.meta.env.BASE_URL}Curriculum_FrancescoPioColacino.pdf`,
    fileName: 'Curriculum_FrancescoPioColacino.pdf',
  },
  photo: {
    alt: 'Francesco Pio Colacino il giorno della laurea, con la corona d’alloro e la tesi in mano, al tramonto nel campus di Fisciano',
  },
  heroTags: ['Web', 'Mobile', 'Software', 'API & dati'],
  heroFacts: [
    { value: 'UNISA', label: 'Laurea triennale 2026' },
    { value: '3', label: 'Progetti selezionati' },
    { value: 'B2', label: 'Inglese' },
    { value: 'Full-stack', label: 'Web, mobile e software' },
  ],
} as const;

export const navLinks = [
  { href: '#progetti', label: 'Progetti' },
  { href: '#competenze', label: 'Competenze' },
  { href: '#chi-sono', label: 'Chi sono' },
  { href: '#contatti', label: 'Contatti' },
] as const;

export const projects: Project[] = [
  {
    id: 'w-note',
    number: '01',
    title: 'W-Note',
    kind: 'App mobile · progetto di tesi',
    period: 'Apr – giu 2026',
    tone: 'blue',
    panelTitle: 'W-Note',
    panelWords: ['Schede', 'Esercizi', 'Serie', 'Carichi', 'Recupero', 'Storico'],
    problem:
      'Chi si allena in palestra tiene traccia di schede, carichi e tempi di recupero su carta o in note sparse, perdendo lo storico dei progressi.',
    solution:
      'Un’app mobile per organizzare schede ed esercizi, registrare serie, carichi e recupero e consultare lo storico degli allenamenti.',
    contribution:
      'Ho sviluppato l’intera applicazione, dall’interfaccia al database, con focus su registrazione, login, autenticazione, gestione delle sessioni e recupero password via email con codice temporaneo, API REST e integrazione con il database.',
    teamNote:
      'Progettazione e sviluppo completi dell’app, dall’interfaccia mobile al backend.',
    stack: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'Prisma', 'SQLite', 'Git'],
    details: {
      intro:
        'W-Note è l’app mobile oggetto della mia tesi di laurea, sviluppata durante l’Academy di Mobile Programming a Salerno. L’ho realizzata interamente, con particolare attenzione alla parte full-stack di accesso e gestione degli utenti.',
      features: [
        'Creazione e gestione di schede di allenamento ed esercizi',
        'Registrazione di serie, carichi e tempi di recupero',
        'Storico degli allenamenti svolti',
      ],
      contributionPoints: [
        'Sviluppo completo dell’app: interfaccia mobile, backend e database',
        'Progettazione e implementazione di registrazione, login e autenticazione',
        'Gestione delle sessioni utente',
        'Recupero password tramite email con codice temporaneo',
        'Sviluppo di API REST con NestJS e integrazione del database con Prisma e SQLite',
        'Definizione dei requisiti e dell’architettura del sistema',
        'Testing delle funzionalità',
      ],
      excerpt: {
        source: 'server/src/auth/auth.controller.ts (estratto)',
        language: 'TypeScript',
        code: `@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/register')
  register(@Body() body: { email?: string; password?: string; name?: string }) {
    return this.authService.register(body);
  }

  @Post('auth/login')
  login(@Body() body: { email?: string; password?: string }) {
    return this.authService.login(body);
  }
}`,
      },
    },
  },
  {
    id: 'hl7-fhir',
    number: '02',
    title: 'Piattaforma sanitaria HL7 FHIR',
    kind: 'Piattaforma sanitaria · Università degli Studi di Salerno',
    period: 'Dic 2025 – feb 2026',
    tone: 'brown',
    panelTitle: 'HL7 FHIR',
    panelWords: ['Pazienti', 'Medici', 'Visite', 'Referti'],
    problem:
      'Pazienti e medici hanno bisogno di un unico punto per prenotare visite e consultare i referti, con dati sanitari scambiati in un formato standard.',
    solution:
      'Una piattaforma basata sullo standard HL7 FHIR con anagrafiche, autenticazione, prenotazione delle visite e archivio online dei referti.',
    contribution:
      'Ho sviluppato l’intera piattaforma, con focus su anagrafiche pazienti e medici, autenticazione, prenotazioni, caricamento e archiviazione dei referti.',
    teamNote: 'Esperienza come sviluppatore software presso l’Università degli Studi di Salerno.',
    stack: ['HL7 FHIR'],
    details: {
      intro:
        'Esperienza di sviluppo software svolta presso l’Università degli Studi di Salerno, da dicembre 2025 a febbraio 2026, su una piattaforma che adotta lo standard HL7 FHIR per la gestione dei dati sanitari.',
      features: [
        'Anagrafiche di pazienti e medici',
        'Autenticazione degli utenti',
        'Prenotazione delle visite',
        'Caricamento e archiviazione online dei referti, consultabili dal profilo del paziente',
        'Integrazione con un’applicazione dedicata ai medici, che mostra in ordine cronologico le visite programmate nella giornata',
      ],
      contributionPoints: [
        'Progettazione e sviluppo completo della piattaforma',
        'Implementazione del caricamento e dell’archiviazione dei referti',
        'Integrazione con l’applicazione per i medici',
      ],
      note: 'Lo stack indicato si limita allo standard adottato.',
    },
  },
  {
    id: 'beauty-drops',
    number: '03',
    title: 'Beauty Drops',
    kind: 'E-commerce cosmetici · progetto web',
    period: 'Set 2026',
    tone: 'cream',
    panelTitle: 'E-commerce',
    panelWords: ['Catalogo', 'Varianti', 'Ricerca', 'Carrello', 'Ordini'],
    problem:
      'Un negozio di prodotti cosmetici e di bellezza aveva bisogno di un catalogo online consultabile e di un flusso semplice per raccogliere gli ordini.',
    solution:
      'Una piattaforma e-commerce con catalogo per categorie, schede prodotto con varianti e prezzi, ricerca, carrello e gestione degli ordini.',
    contribution:
      'Ho sviluppato l’intera piattaforma, con focus su interfaccia, backend e database, pubblicazione e configurazione su Railway, aggiornamento dei prodotti e manutenzione.',
    teamNote: 'Progettazione, sviluppo completo e gestione tecnica del progetto.',
    stack: ['PHP', 'PostgreSQL', 'JavaScript', 'CSS', 'Docker', 'Railway'],
    details: {
      intro:
        'Beauty Drops è una piattaforma per la vendita di prodotti cosmetici e di bellezza, progettata e sviluppata a settembre 2026 e poi mantenuta nel tempo.',
      features: [
        'Catalogo digitale con categorie e schede prodotto',
        'Varianti e prezzi per prodotto',
        'Ricerca nel catalogo',
        'Carrello e gestione degli ordini',
      ],
      contributionPoints: [
        'Sviluppo dell’interfaccia utente',
        'Sviluppo del backend e progettazione del database',
        'Pubblicazione e configurazione dell’applicazione su Railway',
        'Aggiornamento dei prodotti, risoluzione dei problemi e manutenzione',
      ],
      excerpt: {
        source: 'schema.sql (estratto)',
        language: 'SQL',
        code: `CREATE TABLE IF NOT EXISTS products (
  id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  category VARCHAR(30) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  name VARCHAR(150) NOT NULL,
  variants JSONB NULL,
  price NUMERIC(10,2) NULL,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products (category);`,
      },
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'mobile',
    title: 'Mobile & frontend',
    caption: 'Interfacce e app multipiattaforma',
    items: ['React Native', 'Expo', 'TypeScript', 'JavaScript'],
    tone: 'blue',
  },
  {
    id: 'backend',
    title: 'Backend & database',
    caption: 'API, persistenza e modelli dati',
    items: ['NestJS', 'Node.js', 'Prisma', 'SQLite', 'SQL'],
    tone: 'cream',
  },
  {
    id: 'metodo',
    title: 'Metodo',
    caption: 'Come imposto e verifico il lavoro',
    items: ['Analisi dei requisiti', 'Modellazione UML', 'Progettazione API REST', 'Testing', 'Lavoro in team'],
    tone: 'yellow',
  },
  {
    id: 'strumenti',
    title: 'Linguaggi & strumenti',
    caption: 'Basi solide dal percorso universitario',
    items: ['Java', 'C', 'Git'],
    tone: 'brown',
  },
];

export const about = {
  paragraphs: [
    'Mi sono laureato in Ingegneria Informatica all’Università degli Studi di Salerno il 22 settembre 2026. Durante il percorso ho studiato programmazione, algoritmi e strutture dati, basi di dati, ingegneria del software, sistemi operativi e reti.',
    'Mi interessa lo sviluppo full-stack: seguire una funzionalità dall’interfaccia fino alle API e al database. Sono attratto in particolare dalla salute digitale, un ambito in cui ho già lavorato con lo standard HL7 FHIR.',
  ],
  highlights: ['Analisi dei requisiti', 'Modellazione UML', 'API REST', 'Testing', 'Lavoro in team'],
  languages: [
    { name: 'Italiano', level: 'Madrelingua' },
    { name: 'Inglese', level: 'B2' },
  ],
  interests: ['Sviluppo full-stack', 'Salute digitale'],
};

export const timeline: TimelineItem[] = [
  {
    period: '2021 – 2026',
    title: 'Laurea triennale in Ingegneria Informatica',
    place: 'Università degli Studi di Salerno · Fisciano',
    text: 'Laurea conseguita il 22 settembre 2026. Tesi: “W-Note: progettazione e sviluppo di un’app mobile in React Native per la gestione degli allenamenti in palestra”, con focus su registrazione, autenticazione e session management.',
  },
  {
    period: 'Dic 2025 – feb 2026',
    title: 'Sviluppatore software',
    place: 'Università degli Studi di Salerno',
    text: 'Progettazione e sviluppo di una piattaforma sanitaria basata sullo standard HL7 FHIR.',
  },
  {
    period: 'Apr – giu 2026',
    title: 'Academy Mobile Programming · W-Note',
    place: 'Salerno',
    text: 'Sviluppo completo dell’app W-Note, con focus su autenticazione, sessioni, API REST, database e testing.',
  },
  {
    period: 'Set 2026',
    title: 'Beauty Drops',
    place: 'Progetto web',
    text: 'Progettazione, sviluppo e pubblicazione su Railway di una piattaforma e-commerce per prodotti cosmetici.',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Requisiti',
    text: 'Parto da chi userà il sistema: raccolgo i casi d’uso, chiarisco i vincoli e scrivo requisiti verificabili prima di toccare il codice.',
  },
  {
    number: '02',
    title: 'Progettazione',
    text: 'Traduco i requisiti in diagrammi UML, modello dei dati ed endpoint REST, condividendo le scelte di architettura con il team.',
  },
  {
    number: '03',
    title: 'Implementazione',
    text: 'Sviluppo per funzionalità complete, dall’interfaccia al database, con TypeScript tipizzato e commit Git piccoli e leggibili.',
  },
  {
    number: '04',
    title: 'Verifica',
    text: 'Testo i flussi principali e i casi limite, correggo ciò che emerge e controllo che il risultato rispetti i requisiti iniziali.',
  },
];
