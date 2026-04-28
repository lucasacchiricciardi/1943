### 3.1 Requisiti di Best Practice

1. **Separazione tra logica e presentazione**: la logica di gioco deve essere separata dalla gestione della UI/UX, per facilitare modifiche e test.
2. **Gestione centralizzata dello stato**: lo stato del gioco (vite, punteggio, entità) deve essere gestito in modo centralizzato e facilmente accessibile.
3. **Documentazione del codice**: ogni modulo e funzione principale deve essere documentato con commenti chiari e, se possibile, con esempi d’uso.
4. **Testabilità**: il codice deve essere scritto in modo da poter essere facilmente testato con unit test e/o test di integrazione.
5. **Gestione degli errori**: il software deve gestire in modo robusto eventuali errori di input, rendering o logica, evitando crash.
6. **Performance**: il gioco deve mantenere un frame rate fluido (target: 60 FPS) anche su hardware non recente.
7. **Accessibilità**: i controlli devono essere accessibili anche tramite tastiera e, dove possibile, personalizzabili.
8. **Compatibilità cross-browser**: il gioco deve funzionare correttamente sui principali browser desktop.
9. **Utilizzo di risorse ottimizzate**: immagini e audio devono essere ottimizzati per il web, per ridurre i tempi di caricamento.
10. **Versionamento semantico**: il software deve seguire il versionamento semantico (semver) per ogni rilascio.
# Product Requirements Document (PRD)

---

## Convenzioni di Versionamento e Branching


### 2.1 Requisito di Modularità
Il software deve essere strutturato in modo modulare: la logica di gioco, la gestione del giocatore, dei proiettili, dei nemici e delle altre funzionalità principali devono essere suddivise in più file e moduli separati, per favorire la manutenibilità, la scalabilità e la testabilità del codice.

Vedi il file originale nella root. Spostare qui il PRD per mantenere ordine nella documentazione.