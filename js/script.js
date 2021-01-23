

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }
    else if(argMoveId == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyce';
    }
    else{
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
}
 
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
  computerMove = 'papier';
}
else if (randomNumber == 3){
  computerMove = 'nożyce';
}*/


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(randomNumber);

printMessage('Twój ruch to: ' + argPlayerMove);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier'
}
else if(playerInput == '3'){
    playerMove= 'nożyce';
}
else {
    playerMove == 'nieznany ruch';
}*/

 

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:' + argComputerMove + ', ' + argPlayerMove);
if (
    (argComputerMove == 'kamień' && argPlayerMove == 'papier') || 
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || 
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ){
    printMessage('Ty wygrywasz!');
}
else if (
    (argComputerMove == 'papier' && argPlayerMove == 'kamień') || 
    (argComputerMove == 'nożyce' && argPlayerMove == 'papier') || 
    (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
    ){
    printMessage('Ja wygrywam!');
}
else if 
    (argComputerMove == argPlayerMove){
    printMessage('Remis!');
}
else {
    printMessage('Wybierz liczbę od 1 do 3!');
}
printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

displayResult(argComputerMove, argPlayerMove);