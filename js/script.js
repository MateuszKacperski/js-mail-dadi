console.log('Js ok');

//Esercizio Dadi 

//Pendo l'elemento dall'HTML
const dadi = document.getElementById('dadi');

//Dichiaro le variabili dei dadi e ci inserisco un numero casuale da 1 a 6
const dadoComputer = Math.floor(Math.random() * 6) + 1;
const dadoGiocatore = Math.floor(Math.random()* 6 ) + 1;


//Stampo in pagina i due tiri
dadi.innerHTML = 'Il risultato del dado del Computer è: '+ dadoComputer + '<br>';
dadi.innerHTML += `Il risultato del dado del Giocatore è:  ${dadoGiocatore}<br>`;

//Creo la variabile per il messagio
let message = 'Pareggio';
//Controllo il vincitore e lo stampo
if(dadoComputer < dadoGiocatore){
    message = 'Ha vinto il giocatore ';
}else if(dadoGiocatore < dadoComputer){
    message = 'Ha vinto la cpu';
}

//creo la variabile per stampare
const result = `
<p> Risultato Giocatore ${dadoGiocatore}</p>
<p> Risultato cpu: ${dadoComputer}
<p><strong>${message}</strong></p>
`;

dadi.innerHTML = result;



// Esercizio Mail

//Creo un array 
const lista = ['asdas@gmail.com', 'prova@gmail.com', 'm1@gmail.com'];

//Recupero gli elementi del DOM
const mail = document.getElementById('email');
const button = document.getElementById('btn');
const results = document.getElementById('risultato');


//Elemento recuperato dall'utente
const email = mail.value;






//Aggiungo un evento sul click del bottone
button.addEventListener('click', function(){
    const email = mail.value.trim();
    let valido = false;

//Validazione
if(!email){
    alert('Non hai inserito una mail')
    return;
}

//Creo for per scorrere gli elementi della lista
for(let i = 0 ; i < lista.length && !valido ; i++){
    const approvate = lista[i];
    if(approvate === email){
        valido = true;
    }
    
}

if(valido === true){
    results.innerText = 'Acesso consentito';
}else {
    results.innerText += 'Acesso negato';
}

})