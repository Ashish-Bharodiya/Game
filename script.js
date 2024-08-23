// script.js

const board = document.getElementById('chess-board');

const initialSetup = [
    'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',
    'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
    'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'
];

const pieceSymbols = {
    'r': '♖', 'n': '♘', 'b': '♗', 'q': '♕', 'k': '♔', 'p': '♙',
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};

function createBoard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if ((Math.floor(i / 8) + i) % 2 === 1) {
            square.style.backgroundColor = '#ccc';
        }
        board.appendChild(square);
    }
}

function placePieces() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square, index) => {
        const piece = initialSetup[index];
        if (piece) {
            const pieceElement = document.createElement('div');
            pieceElement.classList.add('piece');
            pieceElement.innerHTML = pieceSymbols[piece];
            pieceElement.classList.add(piece === piece.toUpperCase() ? 'white' : 'black');
            pieceElement.dataset.position = index;
            pieceElement.addEventListener('click', handlePieceClick);
            square.appendChild(pieceElement);
        }
    });
}

let selectedPiece = null;

function handlePieceClick(event) {
    if (selectedPiece) {
        const fromIndex = selectedPiece.dataset.position;
        const toIndex = event.target.dataset.position;
        
        // Move piece (this is a simplified example and doesn't include move validation)
        const fromSquare = board.children[fromIndex];
        const toSquare = board.children[toIndex];
        toSquare.appendChild(selectedPiece);
        fromSquare.innerHTML = '';

        selectedPiece = null;
    } else {
        selectedPiece = event.target;
    }
}

createBoard();
placePieces();
