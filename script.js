// DEFINE VARIABLES 
const gridContainer = document.querySelector(".grid-container")
const setSquaresBtn = document.querySelector(".set-squares-btn")

let numOfRows = 16;



// DEFINE FUNCTIONS
const createGrid = (numOfRows) => {
    for (let i = 0; i < numOfRows; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < numOfRows; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }   
        gridContainer.appendChild(gridRow);
    }
    const gridSquares = document.querySelectorAll(".grid-square")
    onHover(gridSquares)
}


const onHover = (allSquares) => {
    allSquares.forEach((square) => {
        square.addEventListener('mouseover', () => square.classList.add('hovered-square'))
    })
}

const changeGrid = () => {
    numOfRows = prompt("How many squares would you like? Max = 100")
    if (numOfRows > 100) {
        alert("Number of squares cannot be greater than 100")
    }
    clearGrid()
    createGrid(numOfRows)
}

const clearGrid = () => {
    gridContainer.innerHTML = ''
}

// CALL FUNCTIONS
createGrid(numOfRows)

// ADD EVENT LISTENERS
setSquaresBtn.addEventListener('click', () => changeGrid())
