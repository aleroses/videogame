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
};

const giftPosition = {
    x: undefined,
    y: undefined,
};

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
    // console.log({map, mapRows, mapRowCols});

    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    // console.log({playerPosition});
                }
            } else if (col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
}

function movePlayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;

    if(giftCollision){
        console.log('subiste de nivel');
    }

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
    // console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    // console.log('arriba');
    if(playerPosition.y - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }

}
function moveLeft(){
    // console.log('izquierda');
    if(playerPosition.x - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight(){
    // console.log('derecha');
    if(playerPosition.x + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
}
function moveDown(){
    // console.log('abajo');
    if(playerPosition.y + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
} */

// Hacer resumenen de cada punto:
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;
let map;
let emoji;
let x;
let y;
const player_position = {
    x: undefined,
    y: undefined,
};
const gift_position = {
    x: undefined,
    y: undefined,
};

const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_key);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8;

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = (canvas_size * 0.1) - 1;
    game.font = `${elements_size}px Verdana`;

    map = (maps[0].trim().split("\n")).map(x => x.trim().split(''));

    map.forEach((row, ri) => { // element y indix
        row.forEach((col, ci) => {
            emoji = emojis[col];
            x = elements_size * ci;
            y = elements_size * (ri + 1);

            if(player_position.x == undefined && col== 'O'){
                player_position.x = x;
                player_position.y = y;
            }else if(col == 'I'){
                gift_position.x = x;
                gift_position.y = y;
            }

            game.fillText(emoji, x, y);
        });
    });
    move_player();
}

function move_player(){
    const gift_collition_x = player_position.x.toFixed(2) == gift_position.x.toFixed(2);
    const gift_collition_y = player_position.y.toFixed(2) == gift_position.y.toFixed(2);
    const gift_collition = gift_collition_x && gift_collition_y;
    console.log({player_position, gift_position});
    if (gift_collition){
        console.log('XDXDXD');
    }

    game.fillText(emojis['PLAYER'], player_position.x, player_position.y);
}
function move_by_key(event){
    if(event.key == 'ArrowUp'){
        move_up();
    }else if(event.key == 'ArrowLeft'){
        move_left();
    }else if(event.key == 'ArrowRight'){
        move_right();
    }else if(event.key == 'ArrowDown'){
        move_down();
    }
    // console.log(event.key);
}

function move_up(){
    if(player_position.y > elements_size +1){
        player_position.y -= elements_size;
        // console.log(player_position, elements_size);
        calculate_canvas_size();
    }
}
function move_left(){
    if(player_position.x > elements_size - 1){
        player_position.x -= elements_size;
        // console.log(player_position.x, elements_size);
        calculate_canvas_size();
    }
}
function move_right(){
    if(player_position.x < canvas_size * 0.8){
        player_position.x += elements_size;
        // console.log(player_position.x, canvas_size * 0.9);
        calculate_canvas_size();
    }
}
function move_down(){
    if(player_position.y < elements_size * 10){
        player_position.y += elements_size;
        calculate_canvas_size();
        // console.log(player_position, elements_size * 10, canvas_size);
    }
}