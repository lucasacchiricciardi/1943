---

## Checklist di verifica asset grafici (Game Designer)

Per garantire la compatibilità e la coerenza visiva degli asset cartoon generati, seguire questa checklist prima dell’integrazione nel gioco:

1. **Orientamento verticale:** Tutti gli sprite (aerei, nemici, boss, proiettili, esplosioni, ecc.) devono avere la parte frontale rivolta verso l’alto dell’immagine (coerente con lo scorrimento verticale). Ruotare eventuali asset orizzontali tramite editor grafico.
2. **Sfondo trasparente:** Rimuovere sempre lo sfondo bianco puro da ogni asset prima dell’uso in gioco.
3. **Dimensioni corrette:** Verificare che ogni asset sia ritagliato e ridimensionato secondo le specifiche (es. 32x32, 64x64, 128x128 px) e centrato.
4. **Sprite sheet:** Per animazioni (esplosioni, raccolta power-up), assicurarsi che i frame siano allineati orizzontalmente e orientati correttamente.
5. **Coerenza di stile:** Tutti gli asset devono rispettare la formula di stile universale e la palette colori indicata.
6. **Nomenclatura chiara:** Usare nomi file coerenti e descrittivi (es. AereoGiocatore_Blu.png, Nemico1.png, Esplosione_1.png).
7. **Test in-game:** Dopo l’integrazione, verificare la resa visiva su canvas e la leggibilità durante il gameplay.

_Questa checklist va seguita ad ogni aggiornamento o nuova generazione di asset._
# Prompt dettagliati per asset grafici cartoon – Clone 1943


## Nota fondamentale sull'orientamento degli asset

Tutti gli asset sprite (aerei, nemici, boss, proiettili, esplosioni, ecc.) devono essere orientati verticalmente, ovvero con il "naso" o la parte frontale rivolta verso l'alto dell'immagine (coerente con lo scorrimento verticale del gioco). Se un asset viene generato o fornito con orientamento orizzontale (ad esempio, punta a destra/sinistra), è necessario ruotarlo di 90° tramite editor grafico prima dell'integrazione nel gioco. Questa regola vale anche per sprite sheet e animazioni.

Specificare sempre questa esigenza all'artista o nel prompt, e verificare l'orientamento prima di utilizzare l'asset nel gioco.

Copia SEMPRE la formula di stile universale all'inizio di ogni prompt:

> "Genera un asset grafico 2D per un videogioco arcade con vista dall'alto (top-down). Stile visivo: Modern cartoon, alta leggibilità, contorni neri netti e spessi, colori vivaci e saturi, cell shading semplice, dettagli minimali per evitare confusione a piccole dimensioni. Palette colori limitata e brillante (16-24 colori principali), simile a Sky Force e Brawl Stars. L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

---

## Elenco Completo dei Prompt Individuali

### 1. Player (Aereo del Giocatore)

**Aereo Giocatore - Base Blu**
> [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un aereo da caccia cartoon, personaggio principale, forma aerodinamica e amichevole, colore principale azzurro brillante con accenti gialli. Singolo file PNG, centratura perfetta."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

**Aereo Giocatore - Variante Rossa**
> [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un aereo da caccia cartoon, personaggio principale, forma aerodinamica e amichevole, colore principale rosso acceso con accenti arancioni. Singolo file PNG, centratura perfetta."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

**Aereo Giocatore - Variante Gialla**
> [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un aereo da caccia cartoon, personaggio principale, forma aerodinamica e amichevole, colore principale giallo brillante con accenti blu scuro. Singolo file PNG, centratura perfetta."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

**Aereo Giocatore - Variante Verde**
> [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un aereo da caccia cartoon, personaggio principale, forma aerodinamica e amichevole, colore principale verde smeraldo con accenti viola scuro. Singolo file PNG, centratura perfetta."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

Orientamento Verticale
**Aereo Giocatore - Esplosione (Sprite Sheet Sequenziale)**
> [FORMULA DI STILE] + "Soggetto: Una sequenza orizzontale di 4-6 frame disposti in griglia che mostra l'animazione di un'esplosione cartoon dell'aereo del giocatore, che si dissolve in fumo nero. Colori arancione, giallo e grigio."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

### 2. Nemici

Orientamento Verticale
**Nemico 1 (Ricognitore Piccolo)**
> [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un piccolo aereo nemico ricognitore cartoon, colore principale ROSSO scuro, forma angolare e aggressiva. Singolo file PNG, centratura perfetta."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."
RUOTATO 180 gradi

Orientamento Verticale
**Nemico 2 (Bombardiere Medio)**
> [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un aereo nemico bombardiere medio cartoon, colore principale VERDE militare scuro, forma tozza e pesante con doppie eliche. Singolo file PNG, centratura perfetta."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."
RUOTATO 180 gradi

Orientamento Verticale
**Nemico 3 (Intercettore Veloce)**
> [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un aereo nemico intercettore veloce cartoon, colore principale BLU metallico scuro, design slanciato a forma di dardo. Singolo file PNG, centratura perfetta."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."
RUOTATO 180 gradi

Orientamento Verticale
**Boss (Nave Grande)**
> [FORMULA DI STILE] + "Soggetto: Vista dall'alto di un'enorme nave boss nemica cartoon, imponente, colore grigio metallico scuro con accenti viola, torrette difensive multiple visibili, grandi motori posteriori. Design complesso ma pulito. Singolo file PNG ad alta risoluzione."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."
RUOTATO 180 gradi

Orientamento Verticale
### 3. Proiettili e Power-ups (In Griglia per Efficienza)

> [FORMULA DI STILE] + "Soggetto: Un set di proiettili e icone power-up organizzato in una griglia ordinata.\nRow 1: Proiettile giocatore (dardo energetico azzurro luminoso); Proiettile nemico (orb energetico rosso scuro).\nRow 2: Icona power-up Fuoco (fiamma arancione in cornice circolare); Icona power-up Scudo (scudo blu in cornice circolare).\nRow 3: Icona power-up Vita (cuore rosso stilizzato in cornice circolare); Icona power-up Bomba (bomba nera con miccia accesa in cornice circolare).\nOgni elemento è ben distanziato."

Orientamento Verticale
**Proiettile Giocatore**
> [FORMULA DI STILE] + "Soggetto: Singolo proiettile dardo energetico cartoon allungato e luminoso, colore azzurro brillante. Singolo file PNG."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

Orientamento Verticale
**Proiettile Nemico**
> [FORMULA DI STILE] + "Soggetto: Singolo proiettile orbe energetico cartoon, colore rosso scuro. Singolo file PNG."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."
RUOTATO 180 gradi

Orientamento Verticale
**Icona Power-up Scudo**
> [FORMULA DI STILE] + "Soggetto: Icona circolare metallica dorata contenente il simbolo di un'efficace barriera di scudo blu stilizzata. Singolo file PNG."

Orientamento Verticale
### 4. Sfondo (Seamless Vertical Tiling)

Orientamento Verticale
**Sfondo 1 - Oceano e Isole (Base Tiling)**
> [FORMULA DI STILE] + "Soggetto: Vista dall'alto di uno sfondo per un livello di gioco shmup tropicale. Un livello perfettamente seamless vertical tiling che mostra un oceano azzurro con piccole isole sparse e nuvole cartoon soffici. Basso contrasto per non disturbare il gameplay."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

Orientamento Verticale
**Sfondo 2 - Base Nemica High-Tech (Livello Avanzato Tiling)**
> [FORMULA DI STILE] + "Soggetto: Vista dall'alto di uno sfondo per un livello di gioco shmup tecnologico. Un livello perfettamente seamless vertical tiling che mostra una complessa base nemica meccanica con pavimenti metallici, condotti e pannelli luminosi. Basso contrasto."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

Orientamento Verticale
### 5. HUD e UI

Orientamento Verticale
**Set Icone HUD (Vita, Punteggio, Bomba)**
> [FORMULA DI STILE] + "Soggetto: Un piccolo set di 3 icone per l'interfaccia utente (HUD). Allineate in orizzontale. 1) Icona vite (piccolo aereo blu cartoon); 2) Icona punteggio (medaglia d'oro lucida con una stella); 3) Icona bomba (piccola bomba nera cartoon)."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

**Barra Energia Boss (Frame Esterno)**
> [FORMULA DI STILE] + "Soggetto: Un frame vuoto e lungo per una barra dell'energia del boss, in stile cartoon metallico grigio scuro con dettagli meccanici, progettato per contenere un'interfaccia. Vista dall'alto. Singolo file PNG."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

**Pulsante UI Generico (Stile Cartoon)**
> [FORMULA DI STILE] + "Soggetto: Un singolo pulsante UI rettangolare con angoli arrotondati, colore VERDE brillante con un bordo spesso nero, stile cartoon, progettato per contenere testo. Singolo file PNG, centratura perfetta."

### 6. Effetti

Orientamento Verticale
**Esplosione Generica (Sprite Sheet)**
> [FORMULA DI STILE] + "Soggetto: Una sequenza orizzontale di 6 frame che mostra l'animazione di una classica esplosione cartoon, da un flash luminoso a una palla di fuoco a fungo e infine a fumo dissipato. Colori arancione, giallo e grigio."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro." 

Orientamento Verticale
**Flash Colpo a Segno (Hit Flash)**
> [FORMULA DI STILE] + "Soggetto: Un burst di luce circolare e radiale di colore bianco puro e giallo chiaro con raggi acuti, che rappresenta un impatto immediato. Singolo file PNG."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

Orientamento Verticale
**Effetto Raccolta Power-up (Sprite Sheet)**
> [FORMULA DI STILE] + "Soggetto: Una breve sequenza orizzontale di 3 frame disposti in griglia per un effetto di raccolta cartoon: un piccolo flash circolare scintillante che si espande e si dissolve, colore azzurro e bianco."
L'elemento deve essere completamente isolato su uno sfondo solido bianco puro."

---

## Nota per l'Integrazione

Dopo la generazione, rimuovi lo sfondo bianco, ritaglia e ridimensiona i singoli asset, e crea sprite sheet dove necessario, usando strumenti grafici come Photoshop, GIMP o tool online.
