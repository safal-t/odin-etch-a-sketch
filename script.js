// DEFINE VARIABLES 
const gridContainer = document.querySelector(".grid-container")
const setSquaresBtn = document.querySelector(".set-squares-btn")
const randomizeColorBtn = document.querySelector(".randomize-color-btn")
const darkenModeBtn = document.querySelector(".darken-mode-btn")

let numOfRows = 16;

// DEFINE FUNCTIONS
const createGrid = (numOfRows, colorMode) => {
    clearGrid()
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
    onHover(gridSquares, colorMode)
}

const onHover = (allSquares, color) => {
    if (color === "black") {
        allSquares.forEach((square) => {
            square.addEventListener('mouseover', () => square.classList.add('hovered-square'))
        })
    } else if (color === "color") {
        allSquares.forEach((square) => {
            square.addEventListener('mouseover', () => square.style.backgroundColor = randomColor())
        })
    } else {
        n = 0.10
        allSquares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.classList.add('hovered-square')
                square.style.opacity = n;
                n += 0.10;
            })
        })
    }
}

const changeGrid = () => {
    numOfRows = prompt("How many squares would you like? Max = 100")
    if (numOfRows > 100) {
        alert("Number of squares cannot be greater than 100")
    } else {
        createGrid(numOfRows, "black")
    }
}

const clearGrid = () => {
    gridContainer.innerHTML = ''
}

const randomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
}



// CALL FUNCTIONS
createGrid(numOfRows, "black")

// ADD EVENT LISTENERS
setSquaresBtn.addEventListener("click", () => changeGrid())
randomizeColorBtn.addEventListener("click", () => createGrid(numOfRows, "color"))
darkenModeBtn.addEventListener("click", () => createGrid(numOfRows, "darken"))

