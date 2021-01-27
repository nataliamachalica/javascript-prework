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
        printMessage('Mój ruch to: ' + argComputerMove);
    let argPlayerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + argPlayerMove);
    
    function displayResult(argComputerMove, argPlayerMove){
            console.log('moves: ' + argComputerMove + ', ' + argPlayerMove);
        if (
            (argComputerMove == 'kamień' && argPlayerMove == 'papier') || 
            (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || 
            (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
        ){
        printMessage('Ty wygrywasz!');
        }else if (
            (argComputerMove == 'papier' && argPlayerMove == 'kamień') || 
            (argComputerMove == 'nożyce' && argPlayerMove == 'papier') || 
            (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
        ){
        printMessage('Ja wygrywam!');
        }else if (
            (argComputerMove == 'kamień' && argPlayerMove == 'kamień') ||
            (argComputerMove == 'papier' && argPlayerMove == 'papier') ||
            (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')
        ){
        printMessage('Remis!');
        }else {
        printMessage('Wybierz liczbę od 1 do 3!');
        }
    }
    displayResult(argComputerMove, argPlayerMove);
}
/*playGame(3);*/
    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3); 
    });