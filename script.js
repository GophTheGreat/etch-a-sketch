
const resetButton = document.querySelector('button');

resetButton.addEventListener('click', reset)

function reset(){
  let etchGridAll = document.querySelectorAll('.dark')
  etchGridAll.forEach((e) => e.classList.remove('dark'));
}

let etchGrid = [];

const gridContainer = document.querySelector(".gridContainer");

function darken(e){
  e.target.classList.add('dark');
}

function makeGrid(size){
  for (let i = 0; i < size * size; i++){
    etchGrid[i] = document.createElement('div');
    etchGrid[i].classList.add('cell');
    etchGrid[i].addEventListener('mouseover', darken);
    gridContainer.append(etchGrid[i]);

  }
}

makeGrid(16);
