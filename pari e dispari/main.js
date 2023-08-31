/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

//dico all'utente di scegliere pari o dispari e nel caso scrive altro glielo faccio notare e torna indietro
let wordCheck = true;
let pariDispari; //dichiaro anche qua la variabile altrimenti non riesco a stabilire il vincitore finale
while (wordCheck) {
    const pariDispari = prompt('scegli se vuoi pari o dispari!');

    if (pariDispari === 'pari' || pariDispari === 'dispari') {
        console.log('hai scelto: ' + pariDispari);
        wordCheck = false;
    } else {
        alert('scegli o pari o dispari!!!')
        wordCheck = true;
    }
}

//dico all'utente di scegliere un numero da 1 a 5 e nel caso scriva altro, glielo faccio notare e torno indietro
let numberCheck = true;
let userNumber; //dichiaro anche qua la variabile altrimenti non riesco a fare la somma
while (numberCheck) {
   userNumber = Number(prompt('scegli un numero da 1 a 5!'));
   
   if (userNumber > 5 || userNumber < 1) {
       alert('scegli un numero da uno a cinque!!!');
       numberCheck = true;
   } else {
       console.log('hai scelto il numero: ' + userNumber);
       numberCheck = false;
   }
}

//il computer genera un numero random da 1 a 5
function computerFunction(number) {
    return number;
}
const computerMarkup = Math.floor(Math.random() * 5 + 1);
const computerNumber = computerFunction(computerMarkup);
console.log('il numero random generato dal computer è: ' + computerNumber);


//sommo e stabilisco se la somma è pari o dispari
let pariDispariWinner = false;
function sommaNumber(somma) {
    console.log('la somma dei due numeri è: ' + somma);

    if (somma % 2 === 0) {
        console.log('il numero vincente sarà pari');
        pariDispariWinner = true;
    } else {
        console.log('il numero vincente sarà dispari');
        pariDispariWinner = false;
    }
}

sommaNumber(userNumber + computerNumber);

//controllo cosa aveva scelto l'utente e stabilisco il vincitore
if ((pariDispari === 'pari' && pariDispariWinner === true) || (pariDispari === 'dispari' && pariDispariWinner === false)) {
    console.log('HAI VINTO!!!');
    document.querySelector('h1').innerHTML = 'HAI VINTO!!!';
} else {
    console.log('IL COMPUTER HA VINTO!!!');
    document.querySelector('h1').innerHTML = 'IL COMPUTER HA VINTO!!!';
}
