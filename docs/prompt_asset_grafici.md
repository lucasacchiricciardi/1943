# Prompt e strategia per generazione asset grafici cartoon con LLM (Gemini, Imagen 3, Banana Pro)

Questo documento descrive una strategia iterativa e una formula di prompt universale per generare asset grafici cartoon coerenti per il progetto "Clone 1943" tramite modelli LLM di generazione immagini.

---

## Strategia in due fasi

1. **Copia la Formula di Stile:** Definisce l'aspetto visivo globale. Deve essere la prima parte di ogni prompt che invii.
2. **Aggiungi il Soggetto Specifico:** Descrive l'elemento esatto che vuoi generare in quel momento.

---

### Fase 1: Formula di Stile Universale (da copiare SEMPRE)

> "Genera un asset grafico 2D per un videogioco arcade con vista dall'alto. Stile visivo: Cartoon moderno, alta leggibilità, contorni neri netti e spessi, colori vivaci e saturi, cell shading semplice (ombreggiature nette), dettagli minimali per evitare confusione a piccole dimensioni. Palette colori limitata (16-24 colori principali vivaci: blu, rosso, giallo, verde, arancione), simile a Sky Force o Brawl Stars. L'elemento deve essere completamente isolato su uno sfondo solido bianco puro per facilitare la rimozione successiva dello sfondo."

---

### Fase 2: Prompt Iterativi (Asset per Asset)

Incolla la **Formula di Stile Universale** prima del testo specifico qui sotto per ogni asset.

#### Player
- **Aereo Giocatore Blu (Idle):**
  > [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un aereo da caccia cartoon, personaggio principale, colore principale BLU acceso con accenti gialli, forma aerodinamica e amichevole. Singolo file PNG."
- *(Ripeti per varianti Rossa, Gialla, Verde)*
- **Aereo Giocatore Esplosione (Sequenza):**
  > [FORMULA DI STILE] + "Soggetto: Una sequenza orizzontale di 4 frame che mostra l'esplosione cartoon dell'aereo blu del giocatore, da una piccola scintilla a una palla di fuoco a fungo, fino alla dissolvenza in fumo. Colori arancione e giallo."

#### Nemici
- **Nemico Tipo 1 (Ricognitore):**
  > [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un piccolo aereo nemico ricognitore cartoon, colore principale ROSSO scuro, forma angolare e aggressiva, singolo file PNG 64x64."
- **Nemico Tipo 2 (Bombardiere):**
  > [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un aereo nemico bombardiere medio cartoon, colore principale VERDE militare scuro, forma tozza e pesante con doppie eliche. Singolo file PNG 128x128."
- **Boss (Nave Grande):**
  > [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un'enorme nave boss nemica cartoon, imponente, colore grigio metallico scuro con accenti viola, torrette difensive multiple visibili e grandi motori posteriori. Design complesso ma pulito. Singolo file PNG ad alta risoluzione."

#### Proiettili e Power-Up
- **Proiettile Giocatore:**
  > [FORMULA DI STILE] + "Soggetto: Singolo proiettile cartoon luminoso, forma di dardo energetico allungato, colore azzurro brillante e bianco al centro. Isolato."
- **Icona Power-Up Vita (Cuore):**
  > [FORMULA DI STILE] + "Soggetto: Icona di un power-up cartoon in una cornice circolare metallica dorata: Simbolo di un CUORE rosso stilizzato e lucido. Singolo file PNG 32x32."

#### Sfondo (Tiling Seamless)
- **Sfondo Mare e Isole:**
  > [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un livello di sfondo cartoon a scorrimento verticale perfettamente seamless (tilable). Tema: Oceano tropicale azzurro con piccole isole stilizzate e sparse nuvole cartoon. Elementi a basso contrasto per non distrarre dal gameplay. Risoluzione alta."

#### UI (Interfaccia)
- **Set di Icone HUD:**
  > [FORMULA DI STILE] + "Soggetto: Un set di 3 icone quadrate per l'interfaccia utente (HUD): 1) Un piccolo aereo blu stilizzato (icona vite), 2) Una medaglia d'oro lucida con una stella (icona punteggio), 3) Una bomba cartoon nera con miccia accesa (icona bomba). Allineate orizzontalmente."

---

## Operazioni Post-Generazione (Necessarie)

1. **Rimuovi lo Sfondo:** Cancella il bianco puro per rendere trasparente lo sfondo (PNG).
2. **Ritaglia e Ridimensiona:** Ritaglia i singoli sprite e ridimensionali alle dimensioni richieste (32x32, 64x64, 128x128) usando "Nearest Neighbor".
3. **Crea Sprite Sheet:** Unisci le sequenze in un'unica immagine orizzontale se necessario.

---

_Questo sistema garantisce coerenza visiva e compatibilità tecnica per tutti gli asset generati con LLM._
