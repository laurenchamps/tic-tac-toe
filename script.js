const boardElement = document.querySelectorAll('.board-square');
const markers = document.querySelectorAll('.marker');

const gameboard = {
    board: ["", "", "", "", "", "", "", "", ""]
};

const Player = (marker) => {
    return { marker };
};

const playGame = (() => {
    // Create players
    const playerX = Player('X');
    const player0 = Player('0');

    let turnTracker = 'X';
    let round = 0;
    let currentPlayer = "";
    let result;

    const takeTurn = (e) => {
        let boardIndex = e.target.getAttribute("data-index");
        setCurrentPlayerMarker(turnTracker);
        addMarkerToBoard(e, currentPlayer);
        updateBoard(e, currentPlayer, boardIndex);

        round++;
        let winner = checkWinner(boardIndex, currentPlayer);

        if (winner) {
            result = `${currentPlayer} wins`;
            displayResult();
            endGame();
        };

        if (round === 9) {
            result = 'It\'s a draw';
            displayResult();
            endGame();
        };

        switchTurn(currentPlayer);
    };

    const setCurrentPlayerMarker = (turn) => {
        currentPlayer = turn;
    };

    const switchTurn = (currentPlayer) => {
        currentPlayer === 'X' ? turnTracker = '0' : turnTracker = 'X';
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

    const displayResult = () => {
        alert(result);
    };

    const endGame = () => {
        location.reload();
    };

    // Event listener
    boardElement.forEach(element => {
            element.addEventListener('click', takeTurn, { once: true} )
        }); 

})();





// // // Create a 3x3 grid of divs on the page with unique attribute eg data-row and data-column

// // // Create an object for creating a player

// // const marker = document.querySelectorAll('.marker');

// // function assignMarker(e) {
// //     console.log(e.target.textContent);


// //     if (e.target.textContent === 'X') {
// //         return 'X';
// //     } else {
// //         return '0';
// //     }

// // }

// // marker.forEach((item) => {
// //     item.addEventListener('click', assignMarker)});

// // const playerMarker = assignMarker();
// // console.log(playerMarker);

// // const Player = (name, marker) => {
   
// //     const selectSquare = () => console.log(marker); // Replace this with what I need this to do


// //     return { name, marker, selectSquare };
// //   };

// //   // Create player 1
// //   // Assign marker to player 1
// // // const player1 = Player('Player 1', assignMarker());

// // // Create player 2
// // // Assign marker to player 2
// // const player2 = Player('Player 2', '0');


// // // Populate data structure with 'null' to start
// // // Player selects move (play()) ==> can be either play('0') or play('x') depending on which player is playing
// // // Listen to all divs in gameboard and when one is clicked run play()
// // // Add corresponding marker to correct location on grid in DOM (updateBoard() or displayMarker()?)
// // // Player can only select square that has null value
// // // Game alternates between players (? some counter that switches between x and 0 to indicate whose turn it is? or setTurn() to switch to other player?)

// // // Create object for controlling play
// // const game = {
// //     playRound: () => {
// //         player1.selectSquare();
// //         player2.selectSquare();
// //         player2.selectSquare();
// //     },
// //     checkWinner: () => {
// //         console.log(Gameboard.board);
// //     }
// // };



// // game.playRound();
// // game.checkWinner();
// // // Run checkWinner() to check if anyone has won

// // // If winner, displayWinner() to display winning message on screen and end game
// // // When data structure no longer contains any null values, if there is no winner declare a draw and game over.


