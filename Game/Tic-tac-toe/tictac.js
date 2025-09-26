
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O";
let gameOver = false;


const cells = document.querySelectorAll(".cell");
const statusDiv = document.getElementById("game-status");

const winConditions = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]           
];


function updateStatus(message){
    statusDiv.textContent = message;
}


function checkWinner(){
    for (let condition of winConditions){
        const [a,b,c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]){
            return true;
        }
    }
    return false;
}


function isDraw(){
    return board.every(cell => cell !== "");
}


function handleClick(e){
    const index = e.target.dataset.pos;

    if (board[index] !== "" || gameOver) return; // cell taken or game over

    
    board[index] = currentPlayer;
    e.target.value = currentPlayer;

    
    if (checkWinner()){
        updateStatus(`🎉 Player ${currentPlayer} wins!`);
        gameOver = true;
        return;
    }

    
    if (isDraw()){
        updateStatus("🤝 It's a draw!");
        gameOver = true;
        return;
    }

    
    currentPlayer = currentPlayer === "O" ? "X" : "O";
    updateStatus(`Player ${currentPlayer}'s turn`);
}


cells.forEach(cell => cell.addEventListener("click", handleClick));


function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "O";
    gameOver = false;

    
    cells.forEach(cell => cell.value = "");

    
    updateStatus("Player O's turn");
}


const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", resetGame);
