const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click',clear)

function makeGrid (rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  for(let i = 0; i < (rows * columns); i++){
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
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
    prompt('Enter a size between 2 and 100')
  }

}

newGrid();
