/**
 * @type {HTMLCanvasElement}
**/

/* const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

const playerPosition = {
    x: undefined,
    y: undefined,
}

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
            
            if(col == 'O'){
                playerPosition.x = posX;
                playerPosition.y = posY;
                console.log({playerPosition});
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
} 

function movePlayer(){
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
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
    playerPosition.y -= elementsSize;
    movePlayer();
}
function moveLeft(){
    console.log('izquierda');
}
function moveRight(){
    console.log('derecha');
}
function moveDown(){
    console.log('abajo');
} */



const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let element_size;
let map;
let emoji;
let x;
let y; 
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector("#right");
const btn_down = document.querySelector('#down');
const player_position = {
    x: undefined,
    y: undefined,
}

window.addEventListener('keydown', move_by_keys);
window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    element_size = (canvas_size * 0.1) - 1;
    game.font = `${element_size}px Verdana`

    map = (maps[0].trim().split('\n')).map(x => x.trim().split(''));

    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            emoji = emojis[col];
            x = element_size * ci;
            y = element_size * (ri + 1);
            
            if(player_position.x == undefined && col == 'O'){
                player_position.x = x;
                player_position.y = y;
            }
            

            game.fillText(emoji, x, y);
        });
    });

    move_player();
}

function move_player(){
    game.fillText(emojis['PLAYER'], player_position.x, player_position.y);
}
function move_by_keys(event){
    // console.log(event);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    console.log('arriba');
    player_position.y -= element_size;
    /* move_player(); */
    calculate_canvas_size();
}
function move_left(){
    console.log('izquierda');
}
function move_right(){
    console.log('derecha');
}
function move_down(){
    console.log('abajo');
}