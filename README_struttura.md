# Struttura delle cartelle del progetto

- `src/` — Codice sorgente JavaScript, HTML e CSS
- `assets/img/` — Immagini e sprite
- `assets/audio/` — Suoni e musiche
- `tests/` — Test automatici
- `docs/` — Documentazione (PRD, verbali, ecc.)

I file di documentazione esistenti dovrebbero essere spostati in `docs/`.

---

## Ambiente di sviluppo

- Node.js inizializzato (package.json presente)
- Jest installato per i test automatici (TDD)
- Estensioni consigliate: Prettier, ESLint, Live Server
- Branch di sviluppo: develop
- Per avviare i test: `npm test`
- Per sviluppo rapido: avviare Live Server su src/index.html
