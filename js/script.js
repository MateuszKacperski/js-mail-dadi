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
    const email = mail.value;

//Creo for per scorrere gli elementi della lista
for(let i = 0 ; i < lista.length ; i++){
    const approvate = lista[i];

    if(email === approvate){
        results.innerText = 'Acesso consentito';
    }else if (email !== approvate){
        results.innerText += 'Acesso negato';
    }
    
}



})