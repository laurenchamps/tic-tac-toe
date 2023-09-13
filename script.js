const boardElement = document.querySelectorAll('.board-square');
const markers = document.querySelectorAll('.marker');

const gameboard = {
    board: ["", "", "", "", "", "", "", "", ""]
};

const Player = (marker) => {
    return { marker };
};


const playGame = (() => {
    const playerX = Player('X');
    const player0 = Player('0');
    
    let currentPlayer = "X";
    let round = 0;
    let result;
    
    displayTurn(currentPlayer);

    const takeTurn = (e) => {
        let boardIndex = e.target.getAttribute("data-index");
        addMarkerToBoard(e, currentPlayer);
        updateBoard(e, currentPlayer, boardIndex);
        round++;
        
        let winner = checkWinner(boardIndex, currentPlayer);
        
        if (winner) {
            result = `${currentPlayer} wins!`;
            displayResult(result);
        };
        
        if (round === 9 && !winner) {
            result = 'It\'s a draw';
            displayResult(result);
        };
        
        switchTurn(currentPlayer);
        displayTurn(currentPlayer);
    };

    function displayTurn(currentPlayer) {
        return document.querySelector('.display-turn').textContent = `Player ${currentPlayer}\'s turn`;
    }

    const switchTurn = (player) => {
        player === 'X' ? currentPlayer = '0' : currentPlayer = 'X';
    };

    const addMarkerToBoard = (e, currentPlayer) => {
        e.target.textContent = currentPlayer;
    };

    const updateBoard = (e, currentPlayer, boardIndex) => {
        gameboard.board[boardIndex] = currentPlayer;
    };

    const checkWinner = (boardIndex, currentPlayer) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombinations
            .filter(function(array) {return array.includes(Number(boardIndex))})
            .some(combination => combination
                .every(value => gameboard.board[value] === currentPlayer));
    };

    function displayResult(result) {
        document.querySelector('.result-text').textContent = result;
        document.querySelector('dialog').showModal();
    }

    const reset = () => {
        location.reload();
    };

    // Event listeners
    boardElement.forEach(element => {
            element.addEventListener('click', takeTurn, { once: true} )
        }); 

    document.querySelector('.close-modal').addEventListener('click', reset);
})();

