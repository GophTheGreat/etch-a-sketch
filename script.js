
const buttons = document.querySelectorAll('button');

let etchGrid = [];

const gridContainer = document.querySelector(".gridContainer");

const makeGrid(){
  for (let i = 0; i < 256; i++){
    etchGrid[i] = document.createElement('div');
    //etchGrid[i].style.backgroundColor = '#1DF9BD';
    etchGrid[i].classList.add('cell');
    //etchGrid[i].textContent = `-IIII-`;
    etchGrid[i].textContent = `${i}`;
    if (i%2 === 0){ 
      etchGrid[i].style.backgroundColor = '#1DF9BD';
      console.log("even!");
    }
    gridContainer.append(etchGrid[i]);
  }
}

makeGrid();
