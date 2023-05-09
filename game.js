/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols});

    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            
            game.fillText(emoji, posX, posY)
        })
    });
    
    
    /* game.fillText(emojis['X'], 100, 100);
    window.innerHeight
    window.innerWidth
    game.fillRect( xinicial, yinicial, width, height)
    game.fillRect(145,0.1,20,20);
    game.fillRect(135,110,40,40);
    game.clearRect(145,0.1,10,10);
    game.clearRect(155,110,20,20); // 135 + 20

    game.font = '25px Verdana';
    game.fillStyle = 'purple';
    game.textAlign = 'end';
    game.fillText('Platzi', 180, 80); */
} 

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    console.log('arriba');
}
function moveLeft(){
    console.log('izquierda');
}
function moveRight(){
    console.log('derecha');
}
function moveDown(){
    console.log('abajo');
}







/* const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;
let map;
let emoji;
let x;
let y;

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = (canvas_size * 0.1) - 1;
    game.font = `${elements_size}px Verdana`;

    map = (maps[0].trim().split('\n')).map(x => x.trim().split(''));
    console.log({map});

    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            emoji = emojis[col];
            x = elements_size * ci;
            y = elements_size * (ri+1);

            game.fillText(emoji, x, y);
        });
    });
} */

// registro de la consola: console log