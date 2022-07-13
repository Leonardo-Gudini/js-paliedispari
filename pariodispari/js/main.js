let userOddEven = prompt("scegli pari o dispari")
console.log("Utente ha scelto: " + userOddEven);
let userChoice;

if (userOddEven === "pari"){
    userChoice = false;
}
else {
    userChoice = true;
}

// if (userOddEven === "dispari")

let number = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("utente ha scelto: " + number);

let pcNumber = Math.floor((Math.random() * 4) + 1);
console.log("Computer ha scelto: " + pcNumber);

let risultato = pariDispari(number, pcNumber);

console.log("La somma è uguale a: " + risultato)

// if (risultato % 2 == 0){
//     console.log("il numero è pari");
// }
// else{
//     console.log("il numero è dispari");
// }

if( userChoice = false && risultato % 2 == 0){
    console.log("utente ha vinto")
}
else if( userChoice = false && risultato % 2 != 0){
    console.log("computer ha vinto")
}
else if( userChoice = true && risultato % 2 == 0){
    console.log("computer ha vinto")
}
else if( userChoice = true && risultato % 2 != 0){
    console.log("utente ha vinto")
}









function pariDispari (numero1, numero2){
    let somma = numero1 + numero2;
    return somma;
}