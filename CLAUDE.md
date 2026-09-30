# Portfolio personale — Francesco Pio Colacino

## Obiettivo
Realizza un portfolio completo e funzionante per Francesco Pio Colacino, neolaureato in Ingegneria Informatica all'Università degli Studi di Salerno il 22 settembre 2026. Il sito deve presentare competenze e progetti a recruiter, aziende e potenziali clienti. Lingua italiana. Non limitarti a un piano: implementa il progetto, avvialo e verifica il risultato.

## Asset obbligatori
- `assets/riferimento-stile.jpg`: riferimento visivo da osservare prima di progettare. È un esempio di stile, non contiene informazioni su Francesco.
- `assets/francesco-laurea.jpg`: foto reale di Francesco da usare nella hero.
- `assets/Curriculum_FrancescoPioColacino.pdf`: fonte autorevole dei contenuti; leggilo. Copialo tra gli asset pubblici per il download.

## Direzione visiva
Riprendi con cura il linguaggio del riferimento: fondo crema, marrone molto scuro per testi, giallo sole, azzurro petrolio desaturato; titolo PORTFOLIO enorme, maiuscolo, molto condensato; composizione editoriale, blocchi colorati, linee sottili, angoli moderatamente arrotondati. Palette iniziale: #F8F4EB, #2F1C16, #F5C64E, #56859B. Usa una coppia di font come Anton o Bebas Neue per titoli e DM Sans per testo, con fallback adeguati.

La pagina deve avere personalità: impaginazione asimmetrica, tipografia forte, foto protagonista e sezioni compatte. Evita il solito template SaaS con gradienti viola, card tutte identiche e icone ovunque. Decorazioni solari semplici e sottili, senza eccessi. Mantieni contrasto e leggibilità. Non trasferire dal riferimento numeri di esperienza, clienti, recensioni o nomi: non appartengono a Francesco.

Hero desktop: navigazione sottile; grande PORTFOLIO; sotto, nome e presentazione a sinistra e foto a destra, in un blocco azzurro. La foto va ritagliata con object-fit e object-position in modo che viso e corona rimangano visibili. Non alterare il viso e non usare immagini generate al posto di Francesco. Se fattibile rimuovi lo sfondo solo con strumenti locali disponibili, altrimenti conserva la foto con un ritaglio elegante. Su mobile usa una composizione verticale leggibile, non una miniatura della pagina desktop.

## Contenuti e struttura
1. Navigazione: Progetti, Competenze, Chi sono, Contatti; link per scaricare il CV.
2. Hero: “Francesco Pio Colacino”, “Laureato in Ingegneria Informatica”, “Sviluppo applicazioni web e mobile, dall'interfaccia alle API e ai dati.” CTA “Esplora i progetti” e “Scarica il CV”. Località: Poggiomarino, Napoli. Indicare interesse per opportunità Junior Software Engineer senza inventare disponibilità contrattuali.
3. Progetti selezionati su fondo giallo: W-Note, piattaforma sanitaria HL7 FHIR, Beauty Drops. Ogni scheda deve mostrare problema, soluzione, stack verificato e contributo personale. Aggiungi un pannello di approfondimento accessibile per ciascun progetto, con chiusura tramite ESC, focus corretto e pulsante esplicito. Usa pannelli grafici tipografici o estratti reali se disponibili, senza spacciare mockup per schermate autentiche.
4. Competenze: React Native, Expo, TypeScript, JavaScript, NestJS, Node.js, Prisma, SQLite, SQL, Java, C, Git; separa mobile/frontend, backend/database, metodo e strumenti. Non assegnare percentuali arbitrarie di padronanza.
5. Chi sono e percorso: laurea UNISA 2021–2026; esperienza Academy Mobile Programming e tesi W-Note; interesse per sviluppo full-stack e salute digitale. Metti in evidenza requisiti, UML, API REST, testing e lavoro in team. Ingl. B2 come riportato nel CV. Non inventare voto di laurea, certificazioni aggiuntive o ruoli senior.
6. Processo: requisiti, progettazione, implementazione, verifica; descrivere in modo concreto come lavora, senza promettere risultati non verificati.
7. Contatti: fpcolacino@gmail.com con mailto; CTA email; località generale. Non esporre indirizzo di casa, data di nascita o numero telefonico sul sito. Il PDF fornito contiene dati personali: includerlo come CV scaricabile come richiesto, senza ripeterli nelle pagine. Footer nome e anno corrente.

## Dati progetti
### W-Note
App mobile per la gestione degli allenamenti: schede, esercizi, serie, carichi, recupero e storico. Progetto di gruppo. Contributo personale di Francesco: registrazione, login, autenticazione, gestione sessioni e recupero password tramite email con codice temporaneo; API REST e integrazione database; collaborazione a requisiti e architettura. Stack: React Native, Expo, TypeScript, NestJS, Prisma, SQLite, Git. Repository: https://github.com/minichinifrancesco/W-Note. Non attribuire tutto il frontend o l'intero prodotto esclusivamente a Francesco.

### Piattaforma sanitaria HL7 FHIR
Esperienza UNISA dicembre 2025–febbraio 2026, come riportato nel CV. Anagrafiche pazienti e medici, autenticazione, prenotazione visite, caricamento e archiviazione referti consultabili dal profilo paziente; integrazione con un'applicazione medici per le visite in ordine cronologico. Presentare HL7 FHIR come standard utilizzato. Le tecnologie specifiche non confermate dal CV vanno omesse; non inventare repository o demo.

### Beauty Drops
Piattaforma e-commerce cosmetici sviluppata settembre 2026. Catalogo, categorie, varianti, prezzi, ricerca, carrello e gestione ordini; interfaccia, backend e database; pubblicazione e manutenzione su Railway. Repository: https://github.com/francescocolacino/beautydrops. Non inventare fatturato, utenti o statistiche. Per stack ulteriore consulta il repository solo se accessibile, altrimenti limita le etichette a web, e-commerce, Railway.

## Implementazione
Usa React + TypeScript + Vite e CSS curato, evitando librerie pesanti senza motivo. Mantieni i contenuti in un file dati tipizzato per modificarli facilmente. Niente backend: è un portfolio statico. Non creare form che fingano di inviare email; usa mailto. Tutti i pulsanti devono funzionare. Non usare link # come azioni fittizie. Apri repository esterni in sicurezza con rel appropriato.

Implementa navigazione mobile, ancore con scroll fluido, stati hover/focus, animazioni leggere rispettando prefers-reduced-motion, immagini dimensionate e ottimizzate, SEO di base e favicon con iniziali FC. Gestisci font esterni con fallback. Usa landmark semantici, heading ordinati, testi alternativi, accessibilità da tastiera. Nessuno scroll orizzontale a 360px, 390px, 768px, 1440px. Corpo testo almeno 16px; non comprimere eccessivamente i titoli su mobile.

## Verifica e consegna
Installa dipendenze, esegui build e controllo TypeScript. Avvia l'anteprima; se disponibile verifica con browser desktop e mobile, screenshot e interazioni. Controlla asset, download CV, link email, ancore, menu e dettagli progetti. Correggi errori prima della consegna. Non pubblicare né modificare account remoti senza richiesta.

Consegna README con comandi installazione/avvio/build, struttura, istruzioni per modificare testi/progetti/colori/foto e pubblicare su hosting statico. Segnala soltanto eventuali dati realmente mancanti. Non fermarti per chiedere decisioni di routine: scegli soluzioni coerenti con il riferimento.
