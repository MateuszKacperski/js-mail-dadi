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

//Controllo il vincitore e lo stampo
if(dadoComputer < dadoGiocatore){
    dadi.innerHTML += `Il vincitore è:  ${dadoGiocatore} Giocatore`;
}else{
    dadi.innerHTML += `Il vincitore  è:  ${dadoComputer} Computer`;
}