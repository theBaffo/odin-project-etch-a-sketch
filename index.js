const DEFAULT_NUM_OF_ROWS_COLUMNS = 16;
const MAX_WIDTH = 800;

const mouseOverHandler = (event) => {
    event.target.style.backgroundColor = 'black';

    const currentOpacity = parseFloat(event.target.style.opacity || 0);

    event.target.style.opacity = `${Math.min(currentOpacity + 0.1, 1.0)}`;
}

const prepareGrid = (numOfRowsColumns) => {
    const container = document.querySelector('#container');
    container.textContent = '';

    for (let i = 0; i < numOfRowsColumns; i++) {
        const rowDiv = document.createElement('div')
        rowDiv.style.display = 'flex';

        for (let i = 0; i < numOfRowsColumns; i++) {
            const cellDiv = document.createElement('div');

            const cellWidthHeight = MAX_WIDTH / numOfRowsColumns;

            cellDiv.style.width = `${cellWidthHeight}px`;
            cellDiv.style.height = `${cellWidthHeight}px`;
            cellDiv.style.border = '1px solid gray'
            cellDiv.style.borderRadius = '5px'
            cellDiv.style.boxSizing = 'border-box';

            cellDiv.addEventListener('mouseover', mouseOverHandler);
    
            rowDiv.appendChild(cellDiv);
        }

        container.appendChild(rowDiv);
    }
}

const resetButtonClickHandler = (event) => {
    let numOfRowsColumns = prompt('How many rows/columns do you want?');

    console.log('parseInt(numOfRowsColumns)', parseInt(numOfRowsColumns))

    while (!numOfRowsColumns || isNaN(numOfRowsColumns) || parseInt(numOfRowsColumns) > 100) {
        numOfRowsColumns = prompt('Value must be an integer less than 100! Please insert a valid number of rows/columns:');
    }

    prepareGrid(numOfRowsColumns);
}

const setupResetBoardButton = () => {
    const resetBoardButton = document.querySelector('#reset-board');

    resetBoardButton.addEventListener('click', resetButtonClickHandler);
}

const main = () => {
    prepareGrid(DEFAULT_NUM_OF_ROWS_COLUMNS);
    setupResetBoardButton();
}

main();