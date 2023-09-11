const square = document.querySelectorAll(".board-square");
const gameBoard = ["", "", "", "", "", "", "", "", ""];

let turn = 'X';

function takeTurn(e) {
    e.target.textContent = turn;
    gameBoard[e.target.getAttribute("data-index")] = turn;
    turn === 'X' ? turn = '0': turn = 'X';
    console.log(gameBoard);
} 

square.forEach(square => {
    square.addEventListener('click', takeTurn, { once: true} )
});


// // Create a data structure to hold the players' moves e.g [[0,0,0], [0,0,0], [0,0,0]]

// const Gameboard = {
//     board: [[0, 0, 0],
//             [0, 0, 0],
//             [0, 0, 0]],
// }
// // Create a 3x3 grid of divs on the page with unique attribute eg data-row and data-column

// // Create an object for creating a player

// const marker = document.querySelectorAll('.marker');

// function assignMarker(e) {
//     console.log(e.target.textContent);


//     if (e.target.textContent === 'X') {
//         return 'X';
//     } else {
//         return '0';
//     }

// }

// marker.forEach((item) => {
//     item.addEventListener('click', assignMarker)});

// const playerMarker = assignMarker();
// console.log(playerMarker);

// const Player = (name, marker) => {
   
//     const selectSquare = () => console.log(marker); // Replace this with what I need this to do


//     return { name, marker, selectSquare };
//   };

//   // Create player 1
//   // Assign marker to player 1
// // const player1 = Player('Player 1', assignMarker());

// // Create player 2
// // Assign marker to player 2
// const player2 = Player('Player 2', '0');


// // Populate data structure with 'null' to start
// // Player selects move (play()) ==> can be either play('0') or play('x') depending on which player is playing
// // Listen to all divs in gameboard and when one is clicked run play()
// // Add corresponding marker to correct location on grid in DOM (updateBoard() or displayMarker()?)
// // Player can only select square that has null value
// // Game alternates between players (? some counter that switches between x and 0 to indicate whose turn it is? or setTurn() to switch to other player?)

// // Create object for controlling play
// const game = {
//     playRound: () => {
//         player1.selectSquare();
//         player2.selectSquare();
//         player2.selectSquare();
//     },
//     checkWinner: () => {
//         console.log(Gameboard.board);
//     }
// };



// game.playRound();
// game.checkWinner();
// // Run checkWinner() to check if anyone has won

// // If winner, displayWinner() to display winning message on screen and end game
// // When data structure no longer contains any null values, if there is no winner declare a draw and game over.


