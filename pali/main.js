/*
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

function checkPalindrome(userWord) {
    console.log('hai scelto: ' + userWord);

    if (word === word.split("").reverse().join("")) {
        document.querySelector('h3').innerHTML = 'la parola ' + userWord + ' ' + 'è palindroma';
    } else {
        document.querySelector('h3').innerHTML = 'la parola ' + userWord + ' ' + 'non è palindroma';
    }

}

const word = prompt('inserisci una parola a tua scelta!');
checkPalindrome(word);


/*
function checkPalindrome(userWord) {
    console.log('hai scelto: ' + userWord);

    for (let i = 0; i < word.length / 2; i++) {
       if (word[i] === word[word.length - 1 - i]) {
           document.querySelector('h3').innerHTML = 'la parola ' + userWord + ' ' + 'è palindroma';
       } else {
        document.querySelector('h3').innerHTML = 'la parola ' + userWord + ' ' + 'non è palindroma';
       }
    }
}

const word = prompt('inserisci una parola a tua scelta!');
checkPalindrome(word);
*/
