const gridContainer = document.querySelector(".grid-container")

const numOfSquares = 16; 

const createGrid = (numOfSquares) => {
    for (let i = 0; i < numOfSquares; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridContainer.appendChild(gridBox);
    }
}

createGrid(numOfSquares)
