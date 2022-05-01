// GLOBAL VARIABLES
const color = document.querySelector('#colorPicker'); // select color input
const submit = document.querySelector('#sizePicker'); // select size input

// CREATE GRID
function makeGrid() {
    // LOCAL VARIABLES
    const canvas = document.querySelector('#pixelCanvas'); // select table id pixelCanvas
    let height = document.querySelector('#inputHeight').value; // select value from input inputHeight
    let width = document.querySelector('#inputWidth').value; // select value from input inputWidth

    // RESET GRID
    canvas.innerHTML = ''; // without resetting innerHTML to an empty string, submitted input values will add further grids

    // BUILD GRID
    for (let row = 0; row < height; row++) { // loop over submitted input value height
        const tableRow = document.createElement('tr'); // create appropriate number of tr elements
        for (let col = 0; col < width; col++) { // loop over value of width input
            const tableData = document.createElement('td'); // create appropriate number of td elements
            tableRow.appendChild(tableData); // add tds
        }
        canvas.appendChild(tableRow); // adds trs
    }

    // EVENT LISTENER
    canvas.addEventListener('click', respondToTheClick); // 1 event listener for all grid elements

    // EVENT DELEGATION
    function respondToTheClick(e) {
        if (e.target.nodeName === 'TD') { // specifically target each td element for event listener to fire
            console.log('A td element was clicked.'); // check that only a td element has been clicked
            e.target.style.backgroundColor = color.value; // change target style background color
        }
    }
}

// SUBMIT
// When size is submitted by the user, call makeGrid()
submit.addEventListener('submit', function(e) {
    e.preventDefault(); // presents grid
    makeGrid();
});
