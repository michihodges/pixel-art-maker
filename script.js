// Select color input
const color = document.querySelector('#colorPicker');

// Select size input
const submit = document.querySelector('#sizePicker');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // necessary elements
    const canvas = document.querySelector('#pixelCanvas');
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWidth').value;
    // resets grid
    canvas.innerHTML = '';
    // creates grid
    for (let row = 0; row < height; row++) { // loops over value of trs
        const tableRow = document.createElement('tr'); // creates tr
        for (let col = 0; col < width; col++) { // loops over value of tds
            const tableData = document.createElement('td'); // creates td
            tableRow.appendChild(tableData); // adds td
            
            tableData.addEventListener('click', function respondToTheClick(e) { // listens for click event
                console.log('A click was born.'); // logs successful click event
                tableData.style.backgroundColor = color.value; // adds style of current color picked
            })
        canvas.appendChild(tableRow); // adds tr
        }
    }
}

// Submit
submit.addEventListener('submit', function(e) {
    e.preventDefault(); // presents grid
    makeGrid();
});
