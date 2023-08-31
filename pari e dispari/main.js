/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

//dico all'utente di scegliere pari o dispari e nel caso scriva altro glielo faccio notare e torno indietro
let wordCheck = true;
let pariDispari;
while (wordCheck) {
    pariDispari = prompt('Scegli se vuoi pari o dispari!');

    if (pariDispari === 'pari' || pariDispari === 'dispari') {
        console.log('Hai scelto: ' + pariDispari);
        wordCheck = false;
    } else {
        alert('Scegli o pari o dispari!!!');
        wordCheck = true;
    }
}

//dico all'utente di scegliere un numero da 1 a 5 e nel caso scriva altro, glielo faccio notare e torno indietro
let numberCheck = true;
let userNumber;
while (numberCheck) {
    userNumber = Number(prompt('Scegli un numero da 1 a 5!'));

    if (userNumber > 5 || userNumber < 1 || isNaN(userNumber)) {
        alert('Scegli un numero da 1 a 5!!!');
        numberCheck = true;
    } else {
        console.log('Hai scelto il numero: ' + userNumber);
        numberCheck = false;
    }
}

//il computer genera un numero random da 1 a 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

const computerNumber = generateRandomNumber();
console.log('Il numero random generato dal computer è: ' + computerNumber);

//sommo e stabilisco se la somma è pari o dispari
let pariDispariWinner;
function checkPariDispari(somma) {
    if (somma % 2 === 0) {
        console.log('La somma dei due numeri è pari.');
        pariDispariWinner = (pariDispari === 'pari');
    } else {
        console.log('La somma dei due numeri è dispari.');
        pariDispariWinner = (pariDispari === 'dispari');
        pariDispariWinner = false;
    }

    console.log(pariDispariWinner);
}

const somma = userNumber + computerNumber;
console.log('La somma dei due numeri è: ' + somma);
checkPariDispari(somma);

//controllo cosa aveva scelto l'utente e stabilisco il vincitore
if (pariDispariWinner) {
    console.log('HAI VINTO!!!');
    document.querySelector('h1').innerHTML = 'HAI VINTO!!!';
} else {
    console.log('IL COMPUTER HA VINTO!!!');
    document.querySelector('h1').innerHTML = 'IL COMPUTER HA VINTO!!!';
}