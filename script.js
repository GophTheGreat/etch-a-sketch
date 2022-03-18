let gridSize = 16;

let etchGrid = [];

const resetButton = document.querySelector('button');

const gridContainer = document.querySelector(".gridContainer");

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
  let num = color - 0x111111;
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
    etchGrid[i].addEventListener('mouseover', darken);
    gridContainer.append(etchGrid[i]);
  }
}



resetButton.addEventListener('click', reset)

makeGrid(gridSize);
