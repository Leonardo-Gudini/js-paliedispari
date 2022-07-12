let userWord = prompt("scrivi una parola");

let wordStraight = []
let wordReverse = []

for (i = userWord.length -1; i >= 0; i--){
    wordReverse.push(userWord[i])
}

for (i = 0; i < userWord.length; i++){
    wordStraight.push(userWord[i])
}

if(wordStraight.join("|") === wordReverse.join("|")){
    console.log("palindromo");
}
else{
    console.log("non palindromo");
}