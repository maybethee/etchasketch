


// i think i need a functino that caluclates the height and width values for each div that gets created in setCanvasPixels() below. I can know the size of the full canvas, whatever it is i decide it to be, and i get the desired amount of boxes through an input (it can be a prompt for now). but how do i convert that into pixel height/width? amount of pixels per side gives me the total number of divs..... and then just divide that by the canvas size? i think that could work, but how do i take borders into account? i guess i should just not have borders, but then idk how i'm gonna be able to tell whether it fills the canvas all the way?

// ok so that works, now i just need to put that in a function, and call that function in the one below, and then..... change the style of the pixel base inside that function? i think that's right actually

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

    const setBg = () => {

      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      div.style.backgroundColor = "#" + randomColor;
      color.innerHTML = "#" + randomColor;
      setBg();
    }
      
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
