
let canvas = document.querySelector('#canvasContainer')
const rainbow = document.querySelector('#btnRainbow');


let str = '';
const canvasArea = 1024;
canvas.style.height = canvasArea + 'px';
canvas.style.width = canvasArea + 'px';


let area = getCanvasArea();
let pixelDimension = findDimensions(getCanvasArea); 
console.log(area, pixelDimension);


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




// function that finds the required height/width size of interior divs
function findDimensions(getCanvasArea) {

  let pixelDimension = canvasArea / area;
  return pixelDimension;
}

// gets desired pixel area by using a prompt to ask for the canvas "size"
function getCanvasArea() {

  let area = prompt('enter size:', '16');
  if (isPositiveInteger(area)) {
    // find pixel amount

    return area = Math.round(area) ;
  }
  return area = 16;
}


function setCanvasPixels() {

  for (let i = 0; i < (area * area); i++) {

    const divs = document.createElement('div');
    canvas.appendChild(divs);
    divs.classList.add('pixel');
  }

}

setCanvasPixels();

const divs = document.querySelectorAll('.pixel');

divs.forEach(div => {

  div.style.width = pixelDimension + 'px';
  div.style.height = pixelDimension + 'px';
  
  div.addEventListener('mouseover', (e) => {
    div.setAttribute('class', 'pixelColor');
   
  })
  
})
