/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/
let wordCheck = true;
while (wordCheck) {
    const pariDisapri = prompt('scegli se vuoi pari o dispari!');

    if (pariDisapri === 'pari' || pariDisapri === 'dispari') {
        console.log(pariDisapri);
        wordCheck = false;
    } else {
        alert('scegli o pari o dispari!!!')
        wordCheck = true;
    }
}

let numberCheck = true;
while (numberCheck) {
   const userNumber = Number(prompt('scegli un numero da 1 a 5!'));
   
   if (userNumber > 5 || userNumber == 0) {
       alert('segli un numero da uno a cinque!!!');
       numberCheck = true;
   } else {
       numberCheck = false;
       console.log(userNumber);
   }
}
