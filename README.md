# Portfolio — Francesco Pio Colacino

Sito portfolio statico (React + TypeScript + Vite) di Francesco Pio Colacino, laureato in Ingegneria Informatica all'Università degli Studi di Salerno.
Il sito non ha backend: nessun form, i contatti passano da `mailto:` e il CV si scarica come PDF.

## Requisiti

- Node.js 18 o superiore (testato con Node 24)
- npm

## Comandi

```bash
npm install        # installa le dipendenze
npm run dev        # server di sviluppo con ricarica automatica → http://localhost:5173
npm run typecheck  # controllo TypeScript
npm run build      # build di produzione nella cartella dist/
npm run preview    # serve la build di produzione → http://localhost:4173
```

## Struttura

```
├── index.html                  # meta SEO, Open Graph, favicon, font Google (Anton + DM Sans)
├── public/                     # file copiati così come sono nella build
│   ├── Curriculum_FrancescoPioColacino.pdf   # CV scaricabile
│   ├── img/francesco-cutout-*.webp|png       # foto hero scontornata (sfondo trasparente)
│   ├── favicon.svg, apple-touch-icon.png     # icona con iniziali FC
│   ├── og-image.jpg                          # anteprima per la condivisione
│   └── robots.txt
├── assets/                     # asset originali (riferimento di stile, foto, CV)
└── src/
    ├── data/content.ts         # ← TUTTI i testi: hero, progetti, competenze, percorso, processo
    ├── components/             # Header, Hero, Projects, ProjectDialog, Skills, Process, About, Contact, Footer, Decor (icone SVG)
    ├── hooks/useReveal.ts      # comparsa leggera delle sezioni (disattivata con prefers-reduced-motion)
    ├── styles.css              # tutto lo stile; palette e font nelle variabili in cima
    ├── App.tsx
    └── main.tsx
```

## Come modificare

### Testi e contatti
Apri `src/data/content.ts`:
- `site`: nome, ruolo, frase di presentazione, località, email, telefono, riquadro dei dati in evidenza nella hero.
- `navLinks`: voci del menu (l'`href` deve corrispondere all'`id` della sezione).
- `about`, `timeline`, `processSteps`: sezioni "Chi sono", "Percorso" e "Come lavoro".

### Progetti
Nello stesso file, l'array `projects`. Ogni progetto ha:
- `problem`, `solution`, `contribution`, `teamNote`: testi della scheda;
- `stack`: tecnologie mostrate (inserisci solo quelle verificate);
- `repository` (facoltativo): URL del codice; attualmente non è impostato, quindi il link non compare;
- `panelTitle`, `panelWords`, `tone` (`blue` | `brown` | `cream`): pannello grafico tipografico della scheda;
- `details`: contenuto del pannello "Approfondisci", con `excerpt` facoltativo per un estratto di codice reale (indica sempre il file di provenienza in `source`).

Il primo progetto dell'elenco con id `w-note` occupa l'intera larghezza; per cambiare quale progetto è in evidenza modifica il selettore `.project--w-note` in `src/styles.css`.

### Competenze
Array `skillGroups`: titolo, didascalia, elenco e colore (`blue` | `yellow` | `cream` | `brown`). La larghezza di ogni blocco su desktop è definita in `styles.css` (`.skill-block--<id>`).

### Colori e font
In cima a `src/styles.css`:
```css
--cream: #f8f4eb;   /* fondo */
--brown: #2f1c16;   /* testo */
--yellow: #f5c64e;  /* giallo sole */
--blue: #56859b;    /* azzurro petrolio (pannello foto) */
--blue-ink: #44707f;/* azzurro più scuro per blocchi con testo bianco: contrasto AA */
--font-display / --font-body
```
Se cambi i font, aggiorna anche il link Google Fonts in `index.html`.

### Foto
La hero usa la foto originale **scontornata** (sfondo rimosso in locale con `rembg`, modello `isnet-general-use`): la figura poggia sul blocco azzurro ed esce in alto sopra il titolo.
File: `public/img/francesco-cutout-680|460.webp` (+ `.png` di riserva), trasparenti, 680×1604 e 460×1085.

Per rigenerarla da una nuova foto:
```bash
python -m venv C:/rbg
C:/rbg/Scripts/python -m pip install "rembg[cpu]"
C:/rbg/Scripts/rembg i -m isnet-general-use assets/francesco-laurea.jpg cutout.png
```
Poi ritaglia `cutout.png` attorno alla figura, esportalo in WebP/PNG con gli stessi nomi in `public/img/` e controlla il risultato.
Posizione e dimensione si regolano in `src/styles.css`:
- `--pop` in `.hero__visual`: quanto la figura esce sopra il blocco (e si sovrappone a PORTFOLIO);
- `height` di `.hero__panel`: altezza del blocco azzurro;
- `left` di `.hero__cutout` e `.hero__sunset`: posizione orizzontale della figura e del disco giallo.

### CV
Sostituisci `public/Curriculum_FrancescoPioColacino.pdf` mantenendo lo stesso nome, oppure aggiorna `site.cv` in `content.ts`.

## Pubblicazione su hosting statico

`npm run build` genera la cartella `dist/`, che contiene tutto il sito. La configurazione usa percorsi relativi (`base: './'` in `vite.config.ts`), quindi funziona sia alla radice di un dominio sia in una sottocartella.

- **Netlify** (consigliato): il repository include `netlify.toml` (build `npm run build`, cartella `dist`, Node 24, header di cache e sicurezza). Su app.netlify.com scegli *Add new site → Import an existing project → GitHub*, seleziona `francescocolacino/fpcportfolio` e conferma: le impostazioni vengono lette dal file. Ogni push su `main` ripubblica il sito. In alternativa trascina `dist/` su app.netlify.com/drop.
- **Vercel**: importa il repository; preset "Vite", output `dist`.
- **GitHub Pages**: pubblica il contenuto di `dist/` sul branch `gh-pages` (es. `npx gh-pages -d dist`) oppure con una GitHub Action.
- **Qualsiasi hosting/FTP**: carica il contenuto di `dist/`.

Dopo la pubblicazione, se vuoi un'anteprima social con URL assoluto, aggiorna `og:image` in `index.html` con l'indirizzo completo del sito.

## Note sui contenuti

- I dati provengono dal CV e dal brief. Il sito riporta email e telefono; indirizzo di casa e data di nascita non compaiono nelle pagine (sono solo nel PDF scaricabile).
- I pannelli colorati dei progetti sono composizioni tipografiche, non schermate. Gli estratti di codice nei pannelli di approfondimento sono presi dal codice reale dei progetti.
- Per la piattaforma HL7 FHIR è indicato solo lo standard, perché il CV non specifica altre tecnologie.
