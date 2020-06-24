// Select color input
const color = document.querySelector('#colorPicker');

// Select size input
const submit = document.querySelector('#sizePicker');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    const canvas = document.querySelector('#pixelCanvas');
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWidth').value;
    canvas.innerHTML = ''; // resets grid
    for (let row = 0; row < height; row++) {
        const tableRow = document.createElement('tr');
        for (let col = 0; col < width; col++) {
            const tableData = document.createElement('td');
            tableRow.appendChild(tableData); // adds td
            
            tableData.addEventListener('click', function respondToTheClick(e) {
                console.log('A click was born.');
                tableData.style.backgroundColor = color.value;
            })
        canvas.appendChild(tableRow); // adds tr
        }
    }
}

// Submit
submit.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
});
