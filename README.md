Ciao ragazzi,<br>
esercizio di oggi: Gioco dei dadi e Finta Login<br>
Nome repo: js-mail-dadi<br>

Oggi due esercizi al prezzo di uno, perchè "a Natale a Natale  si può fare di piùùùùù" 

Potete svolgere entrambi gli esercizi in un unico file HTML e JS, se la cosa vi confonde, separateli, purchè siano sulla stessa repo.

**ESERCIZIO 1** - Gioco dei dadi<br>
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Stampiamo in pagina i due tiri e il risultato

-----------------------------------------------------------------
**ESERCIZIO 2** - Finta Login

Inventa una lista di email autorizzate<br>
Chiedi all’utente la sua email, con un piccolo form.<br>
controlla che la mail inserita sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?

NOTE:<br>
è vietato utilizzare il metodo includes()
La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
Non è necessario usare il tag `<form>`, ma se lo usate, ricordate di impostare il type="button" sul `<button>`ltrimenti il form ricaricherà la pagina.
L'esito del controllo deve essere stampato in pagina

-----------------------------------------------------------------

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
6. Il tuo codice ti sembra troppo complicato? probabilmente ti stai complicando la vita!

Buon lavoro e buon divertimento! 


### Esercizio dadi

**Step Logici**

- 1 Prendo l'elemento della pagina sul quale scrivero. 
- 2 Creo due variabili all'interno delle quale genero un numero da 1 a 6.
- 3 Confronto le due variabili per vedere quale è maggiore.
- 4 Stampo le variabili con i numeri random e la variabile che ha vinto.



### Esercizio mail 

**Step Logici**

- 1 Creo array dove metto le mail autorizzate 
- 2 Creo form su Html
- 3 Prendo le mail inserite dall'utente e la inserisco in una varibile
- 4 Confronto il contenuto della variabile con la lista delle mail autorizzate
- 5 Se la mail e presente stampo acessoconsentito altrimwenti acesso negato