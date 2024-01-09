# Train Calculator

## Traccia

```plaintext
esercizio di oggi: calcolo del prezzo del biglietto del treno

cartella/repo js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

```

## Pseudocodice

- Dichiaro una costante per l'elemento HTML che conterrà il risultato e le assegno un elemento recuperato dall'HTML

- Dichiaro una variabile per la verifica dell'errore e la inizializzo come falsa

- Dichiaro una costante per il numero di KM da percorrere e le assegno il prompt da richiedere all'utente parsato come intero

- Creo costrutto condizionale per verificare il valore fornito.

  - Se non corretto riassegno 'vero' alla variabile d'errore

- Dichiaro una costante per l'età e le assegno il prompt da richiedere all'utente parsato come intero

- Creo costrutto condizionale per verificare il valore fornito.

  - Se non corretto riassegno 'vero' alla variabile d'errore

- Dichiaro una costante per il prezzo/km e le assegno il prezzo richiesto al km

- Dichiaro una costante per lo sconto under 18 e le assegno lo sconto stabilito (val assoluto)

- Dichiaro una costante per lo sconto under 18 e le assegno lo sconto stabilito (val assoluto)

- Dichiaro una variabile per il prezzo finale del biglietto

- Creo costrutto condizionale per verificare la presenza di errori.

  - Se la variabile d'errore è 'vero'
    - Lancio un'alert che segnala la presenza di errori
  - Altrimenti

    - Assegno al prezzo finale il prezzo/km moltiplicato per i km forniti dall'utente.

    - Creo costrutto condizionale per verificare se l'età fornita prevede uno sconto.

      - Se l'età è min di 18
        - Dichiaro costante per il valore dello sconto e le assegno il relativo sconto calcolato
        - Sottraggo lo sconto al prezzo finale
      - Altrimenti se l'età è > di 65
        - Dichiaro costante per il valore dello sconto e le assegno il relativo sconto calcolato
        - Sottraggo lo sconto al prezzo finale

    - Arrotondo il prezzo finale a 2 cifre decimali

    - Stampo il prezzo finale tramite testo dell'elemento recuperato per il risultato.
