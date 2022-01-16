let CurrNum = 256; //current number of pixels on the grid
let CurrSize = 500/16;
const main = document.querySelector('.main');
 
for ( let i = 0; i<256; i++) {
    let a = document.createElement('div');
    a.classList.add('pxls')
    main.appendChild(a);
}
 
let pxls = document.querySelectorAll(".pxls");
 
// function changeColor(e) {
//     e.setAttribute('style', 'background: white');
// }
 
 
 
 
function resetColors() {
    pxls.forEach(
        function(pxl) {
            pxl.setAttribute('style', `height: ${(CurrSize)}px; width: ${(CurrSize)}px; background:white`)
        }
    )
}
 
function changeGrid() {
    let n = prompt("How many squares do you want to have on one side? (1-64)");
    let pom = 500/n; //squares per side
    let pomKw = n*n; //how many squares there should be in the grid
    pxls.forEach(function(pxl) {   //empty div, I can start adding the number of them that I want
        pxl.remove();
    })
    for ( let i = 0; i<pomKw; i++) {   //creating the exact amount of squares that I wanted
        let a = document.createElement('div');
        a.setAttribute('style', `height: ${(500/n)}px; width: ${(500/n)}px;`);
        a.classList.add('pxls');
        main.appendChild(a);
    }
    pxls = document.querySelectorAll(".pxls");
    pxls.forEach(  //adding hover effect to each of squares
    function(pxl) {
        pxl.addEventListener('mouseenter', () =>
            pxl.setAttribute('style', `height: ${(pom)}px; width: ${(pom)}px; background: red;`)
        )
    }
)
    CurrSize = pom;
    CurrNum = n;
}
 
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
 
function randomColors() {
    pxls.forEach(  
    function(pxl) {
        pxl.addEventListener('mouseenter', () =>
            pxl.setAttribute('style', `height: ${(CurrSize)}px; width: ${(CurrSize)}px; background: rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)});`)
        )
    }
    )}
 
 
const clear = document.querySelector('.clear');
clear.addEventListener('click', resetColors);
 
const grid = document.querySelector('.grid');
grid.addEventListener('click', changeGrid);
 
const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', randomColors);
 
pxls.forEach(
    function(pxl) {
        pxl.addEventListener('mouseenter', () =>
            pxl.setAttribute('style', 'background: red')
        )
    }
)
