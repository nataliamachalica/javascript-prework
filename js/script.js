{
    const game = () => {
        let pScore = 0;
        let cScore = 0;

    const playGame = function(playerInput) {
    clearMessages();

    const getMoveName = function(argMoveId) {
        if(argMoveId == 1) {
            return 'kamień';
        } else if(argMoveId == 2) {
            return 'papier';
        } else if(argMoveId == 3) {
            return 'nożyce';
        }
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const argComputerMove = getMoveName(randomNumber);
        printMessage('mój ruch to: ' + argComputerMove);
    const argPlayerMove = getMoveName(playerInput);
        printMessage('twój ruch to: ' + argPlayerMove);
    const displayResult = function(argComputerMove, argPlayerMove) {

        const updateScore = () => {
            const playerScore = document.querySelector('.player-score p');
            const computerScore = document.querySelector('.computer-score p');

            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        };

        if
            (argComputerMove == 'kamień' && argPlayerMove == 'papier' ||
            argComputerMove == 'papier' && argPlayerMove == 'nożyce' ||
            argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('wygrywasz!');
        pScore++;
        updateScore();
        return;

        } else if
            (argComputerMove == 'papier' && argPlayerMove == 'kamień' ||
            argComputerMove == 'nożyce' && argPlayerMove == 'papier' ||
            argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
                printMessage('wygrywam!');
                cScore++;
                updateScore();
                return;

        } else if
            (argComputerMove == argPlayerMove)
        {
        printMessage('remis!');
        } else {
        printMessage('wybierz liczbę od 1 do 3!');
        }
    };

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
}

game();

}
