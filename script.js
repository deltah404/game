function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
  }
  
let canvas = document.getElementById('screen');
let ctx = canvas.getContext('2d');

let capX = 39;
let capY = 19;


canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height+1;

const defcoords = {
    "coordsA": {
        'x': 0, 'y': 0
    },
    "coordsB": {
        'x': 39, 'y': 19
    }
}
let coords = defcoords;
console.log(defcoords);

function clear() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;

    let prevStyle = ctx.fillStyle;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#8c8c8c';
    ctx.font = "italic bold 50px courier";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("boxes!", x, y);
    ctx.fillStyle = prevStyle;
}

function drawSquare(coords) {
    ctx.fillRect(coords.x*10, coords.y*10, 10, 10);
}

function reset() {
    coords.coordsA.x = 0;
    coords.coordsA.y = 0;
    coords.coordsB.x = 39;
    coords.coordsB.y = 19;
}


function check() {
    if (document.getElementById('acoords').innerHTML == document.getElementById('bcoords').innerHTML) {reset();};
}


function moveUpA() {
    if (coords.coordsA.y == 0) {return} else {coords.coordsA.y --;};
}
function moveDownA() {
    if (coords.coordsA.y == capY) {return} else {coords.coordsA.y ++;};
}
function moveLeftA() {
    if (coords.coordsA.x == 0) {return} else {coords.coordsA.x --;};
}
function moveRightA() {
    if (coords.coordsA.x == capX) {return} else {coords.coordsA.x ++;};
}

function moveUpB() {
    if (coords.coordsB.y == 0) {return} else {coords.coordsB.y --;};
}
function moveDownB() {
    if (coords.coordsB.y == capY) {return} else {coords.coordsB.y ++;};
}
function moveLeftB() {
    if (coords.coordsB.x == 0) {return} else {coords.coordsB.x --;};
}
function moveRightB() {
    if (coords.coordsB.x == capX) {return} else {coords.coordsB.x ++;};
}

function refreshScreen() {
    clear();
    ctx.fillStyle = '#f00';
    drawSquare(coords.coordsA);

    ctx.fillStyle = '#00f';
    drawSquare(coords.coordsB);

    document.getElementById('acoords').innerHTML = "(" + coords.coordsA.x + "," + coords.coordsA.y + ")";
    document.getElementById('bcoords').innerHTML = "(" + coords.coordsB.x + "," + coords.coordsB.y + ")";
    if (document.getElementById('acoords').innerHTML == document.getElementById('bcoords').innerHTML) {reset()}
    check();
}

setInterval(refreshScreen, 10);