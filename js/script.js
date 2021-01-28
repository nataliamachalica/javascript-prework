function playGame(playerInput){
    clearMessages();
    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        }else if(argMoveId == 2){
            return 'papier';
        }else if(argMoveId == 3){
            return 'nożyce';
        }else{
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
            }
    }
    let randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);
        printMessage('mój ruch to: ' + argComputerMove);
    let argPlayerMove = getMoveName(playerInput);
        printMessage('twój ruch to: ' + argPlayerMove);
    
    function displayResult(argComputerMove, argPlayerMove){
            console.log('moves: ' + argComputerMove + ', ' + argPlayerMove);
        if (
            (argComputerMove == 'kamień' && argPlayerMove == 'papier') || 
            (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || 
            (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
        ){
        printMessage('wygrywasz!');
        }else if (
            (argComputerMove == 'papier' && argPlayerMove == 'kamień') || 
            (argComputerMove == 'nożyce' && argPlayerMove == 'papier') || 
            (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
        ){
        printMessage('wygrywam!');
        }else if (
            (argComputerMove == 'kamień' && argPlayerMove == 'kamień') ||
            (argComputerMove == 'papier' && argPlayerMove == 'papier') ||
            (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')
        ){
        printMessage('remis!');
        }else {
        printMessage('wybierz liczbę od 1 do 3!');
        }
    }
    displayResult(argComputerMove, argPlayerMove);
}
    document.getElementById('rock').addEventListener('click', function(){
        playGame(1);
    });
    document.getElementById('paper').addEventListener('click', function(){
        playGame(2);
    });
    document.getElementById('scissors').addEventListener('click', function(){
        playGame(3); 
    });
