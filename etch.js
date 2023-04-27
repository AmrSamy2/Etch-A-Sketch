const container = document.querySelector("#container");
container.style.gridTemplateColumns = 'repeat(16, 1fr)'
container.style.gridTemplateRows = 'repeat(16, 1fr)'




function makeRows(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    function mouseover() {
      cell.classList.add('mouseover')
       }
    cell.addEventListener('mouseover', mouseover)

   
  };
};
makeRows(20, 20);
















