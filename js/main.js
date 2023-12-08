//Constants
const message = document.getElementyById('message');
const cells = document.getElementsByClassName('cell');
const startGame = document.getElementById('button');
const winCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
];

//Variables
let count = 0;
let xTurn = true;

//Allows button to start button
startGame.addEventListener("click",init)


//Starts the game
function init() {
    gameOn = true
    winner = false;
}

//Check For Winner
const checkWinner = () => {
    for (let i of winCombos) {
        let [element1, element2, element3] = [
            cells[i[0]].innerText,
            cells[i[1]].innerText,
            cells[i[2]].innerText,
        ];
        if (element1 != "" && (element2 != "") & (element3 != ""))
        {
        if ((element1 == element2) == element3) {
            winCombos(element1);
        } 
        }
    resultsMessage()
    }
}

//User clicks cells with Event Listener
cells.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            element.innerText = "0";
            element.disabled = true;
        }
    });
});

count += 1;
if (count === 9) {
}

//Sends Results Message To User
function resultsMessage() {
    if (winner) {
        message.innerHTML = `
        <h2>You Win</h2>
        `
    } else {
        message.innerHTML = `
        <h2>You Tied</h2>
        `
    }
}