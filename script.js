let canvas = document.querySelector('#canvasContainer');
const rainbow = document.querySelector('#btnRainbow');
const btnArea = document.querySelector('#btnArea');


const canvasArea = 1024;
canvas.style.height = canvasArea + 'px';
canvas.style.width = canvasArea + 'px';

let area = 0;
let pixelDimension = 0; 


// converts user's number to an integer
function isPositiveInteger(str) {
  if (typeof str !== 'string') {
    return false;
  }

  const num = Number(str);

  if (Number.isInteger(num) && num > 0 && num <= 100) {
    return true;
  }

 return false;
}

// calculates the height/width of canvas pixels based on chosen size
const findDimensions = function findDimensions() {

  pixelDimension = canvasArea / area;
  return pixelDimension;
}

// set initial canvas size to the default 16x16
function setInitialCanvas() {
  area = 16;

  findDimensions();
    
  for (let i = 0; i < (area * area); i++) {

    const divs = document.createElement('div');
    canvas.appendChild(divs);
    divs.classList.add('pixel');

  }
    
  hoverPixel();
}



// set canvas size based on user input
const getCanvasArea = btnArea.addEventListener('click', function getCanvasArea() {

  while (canvas.firstChild) {
    canvas.removeChild(canvas.lastChild);
  }
  
  area = prompt('Enter pixel size 1-100 (bigger number = smaller pixels):', '16');

  if (isPositiveInteger(area)) {

    // find total pixel amount
    area = Math.round(area);

    findDimensions();
    
    for (let i = 0; i < (area * area); i++) {

      const divs = document.createElement('div');
      canvas.appendChild(divs);
      divs.classList.add('pixel');

    }
    
    hoverPixel();
  } else {

    area = 16;
    console.log(area);

    findDimensions();

    for (let i = 0; i < (area * area); i++) {

      const divs = document.createElement('div');
      canvas.appendChild(divs);
      divs.classList.add('pixel');

    }
    hoverPixel();
  }
})

// event listener for basic mouse hover functionality
const hoverPixel = () => {
  const divs = document.querySelectorAll('.pixel');

  divs.forEach(div => {
  
    div.style.width = pixelDimension + 'px';
    div.style.height = pixelDimension + 'px';
    
    div.addEventListener('mouseover', () => {
  
      // div.setAttribute('class', 'pixelColor');
      div.style.backgroundColor = "#000000";
    })
  })
}

// function to clear the board and keep whatever color was last chosen
const makeGone = btnClear.addEventListener('click', function makeGone() {
  area;

  const divs = document.querySelectorAll('.pixel,.pixelColor,.pixelRainbow');
  
  divs.forEach(div => {
    
  if (div.classList.contains('pixelRainbow')) {
    // do makeRainbow to reset class and maintain function
    div.style.backgroundColor = "#80808080";

    div.addEventListener('mouseover', () => {
  
      // alter class for the new mouseover event to use
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      div.style.backgroundColor = "#" + randomColor;
    })
  } else {
    // do makeNormal to reset class and hover function
    div.setAttribute('class', 'pixel');
    div.style.backgroundColor = "#80808080";

    // alter class for the new mouseover event to use
    div.addEventListener('mouseover', () => {
  
      div.style.backgroundColor = "#000000";
  })
  }
})
})

// function to add rainbow option attached to button
const makeRainbow = btnRainbow.addEventListener('click', function makeRainbow() {
  const divs = document.querySelectorAll('.pixel,.pixelColor,.pixelRainbow');

  divs.forEach(div => {

    div.style.backgroundColor = "#80808080";
    div.setAttribute('class', 'pixelRainbow');

    div.addEventListener('mouseover', () => {
  
      // alter class for the new mouseover event to use
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      div.style.backgroundColor = "#" + randomColor;
})
}) 
})

// button that chooses the normal black pen drawing tool
const makeNormal = btnDefault.addEventListener('click', function makeNormal() {
const divs = document.querySelectorAll('.pixel,.pixelColor,.pixelRainbow');

divs.forEach(div => {
  
  div.setAttribute('class', 'pixel');
  div.style.backgroundColor = "#80808080";

  div.addEventListener('mouseover', () => {

    div.style.backgroundColor = "#000000";

})
}) 
})

// execute default canvas on page load
setInitialCanvas();
