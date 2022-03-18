let gridSize = 16;

let etchGrid = [];

const resetButton = document.querySelector('button');

const grid = document.querySelector(".grid");
const sliderText = document.querySelector('.sliderText');
const slider = document.querySelector('.slider');
sliderText.textContent = `${slider.value} x ${slider.value} Grid`;

slider.addEventListener('input', updateValues)

function updateValues(){
  gridSize = slider.value;
  sliderText.textContent = `${slider.value} x ${slider.value} Grid`;
}

function darken(e){
  let color = e.target.style.backgroundColor;
  color = rgbToHex(color);
  console.log(color);
  if(color == '' || color == undefined){
    color = '0xFFFFFF'
  }
  else{
    color = color.slice(1);
    color = String.prototype.concat('0x', color);
  }
  let num = color - 0x333333;
  console.log(num.toString(16));
  e.target.style.backgroundColor = String.prototype.concat('#', num.toString(16));
  //let final = String.prototype.concat('#', num);
  //console.log(final);
  //e.target.style.backgroundColor = rgb(233, 233, 233);
}

function rgbToHex(col)
{
  if(col.charAt(0)=='r')
  {
    col=col.replace('rgb(','').replace(')','').split(',');
    var r=parseInt(col[0], 10).toString(16);
    var g=parseInt(col[1], 10).toString(16);
    var b=parseInt(col[2], 10).toString(16);
    r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
    var colHex='#'+r+g+b;
    return colHex;
  }
}

function makeGrid(gridSize){
  for (let i = 0; i < gridSize * gridSize; i++){
    etchGrid[i] = document.createElement('div');
    etchGrid[i].classList.add('cell');
    etchGrid[i].style.border = '2px solid darkgrey';
    etchGrid[i].addEventListener('mouseover', darken);
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 2fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 2fr)`;
    grid.append(etchGrid[i]);
  }
}

function removeAllChildren(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}

function reset(){
  console.log('hi');
  etchGrid.forEach((e) => e.style.backgroundColor = '#FFFFFF')
  removeAllChildren(grid);
  makeGrid(gridSize);
}

resetButton.addEventListener('click', reset);

makeGrid(gridSize);
