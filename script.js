const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear');
const newBtn = document.querySelector('#new');

makeGrid(16,16);

let mouseIsDown = false;

document.addEventListener('mousedown', () => {
    mouseIsDown = true;
});
document.addEventListener('mouseup', () => {
    mouseIsDown = false;
});

clearBtn.addEventListener('click',clear);
newBtn.addEventListener('click',newGrid);

function makeGrid (rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  for(let i = 0; i < (rows * columns); i++){
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  };
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover',draw)
  })
}

function draw(cells){
  if(mouseIsDown){
   cells.target.style.backgroundColor = `rgb(${(Math.floor(Math.random()*255) + 1)}, ${(Math.floor(Math.random()*255) + 1)}, ${(Math.floor(Math.random()*255) + 1)}`;
  } 
}

function clear(){
  document.querySelectorAll('.grid-item').forEach(gridItem => {
    gridItem.style.backgroundColor = 'white';
  })
}

function newGrid(){
  let gridSize = prompt('Enter the size of the grid');
  if (gridSize <= 100 && gridSize){
    clear();
    container.innerHTML = '';
    makeGrid(gridSize, gridSize);
  }
  else{
    alert('Enter a size between 2 and 100')
  }

}



