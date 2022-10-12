const container = document.getElementById('container');

function makeGrid (rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  for(let i = 0; i < (rows * columns); i++){
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }
}

makeGrid(50,50)

