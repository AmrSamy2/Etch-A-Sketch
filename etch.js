const btnBlack = document.querySelector('.btn-black')
const btnErase = document.querySelector('.btn-erase')
const btnGrey = document.querySelector('.btn-grey')
const btnReset = document.querySelector('.btn-reset')
// const btnRandom = document.querySelector('.btn-random')

// function randomColor (){
//   if (cell.className = )
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

function makeRows(size) {

  const container = document.querySelector("#container");
  // const input = document.querySelector('input')
  const cells = container.querySelectorAll('div')
  cells.forEach((div) => div.remove())



  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (c = 0; c < size * size; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";

    // btnRandom.addEventListener ('click', function (){
    //   cell.addEventListener ('mouseover', function (){
    //     cell.className = ('')
    //     cell.classList('').style.backgroundColor = randomColor()
    //   })
    // })
    function mouseover() {
      cell.className = ('')
      cell.classList.add('grey')
    }
    btnGrey.addEventListener('click', function () {
      cell.addEventListener('mouseover', function (){
        cell.className = ('')
        cell.classList.add('grey')
      })

    })


    btnErase.addEventListener('click', function erase() {
      cell.addEventListener('mouseover', function () {
        cell.className = ('')
        cell.classList.add('erase')
      })
    })
    btnReset.addEventListener('click', function () {
      cell.className = ('')
    })

   
    cell.addEventListener('mouseover', mouseover)

    btnBlack.addEventListener('click', function black() {
      cell.addEventListener('mouseover', function () {
        cell.className = ('')
        cell.classList.add('black')
      })
    })


  };
}
makeRows(16);

function changeSize(input) {
  if (input < 2 || input > 100) {
    alert("size  between 2 and 100")
  } else (makeRows(input))
}


// function changeColor(colors) {
//   cellColor(colors)
// }
















