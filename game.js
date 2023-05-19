/**
 * @type {HTMLCanvasElement}
**/

/* const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const spanLives = document.querySelector('#lives');
const spanTime = document.querySelector('#time');

let canvasSize;
let elementsSize; //10%
let level = 0;
let lives = 3;
let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
    x: undefined,
    y: undefined,
};
const giftPosition = {
    x: undefined,
    y: undefined,
};
let enemyPositions = [];

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

    const map = maps[level];

    if(!map){
        console.log();
        gameWin();
        return;
    }
    if(!timeStart){
        timeStart = Date.now();
        timeInterval = setInterval(showTime, 100);
    }

    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    // console.log({map, mapRows, mapRowCols});

    showLives();
    enemyPositions = [];
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
            } else if(col == 'X'){
                enemyPositions.push({
                    x: posX,
                    y: posY,
                });
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
        levelWin();
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
    });
    
    if(enemyCollision){
        levelFail();
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function levelWin(){
    console.log('Win');;
    level++;
    startGame();
}

function levelFail(){
    lives--;

    if(lives <= 0){
        level = 0;
        lives = 3;
        timeStart = undefined;
    }

    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

function gameWin(){
    console.log('Terminaste el juego');
    clearInterval(timeInterval);
}

function showLives(){   
    // Array de 3 espacios que llenamos con 3 corazones
    const heartsArray = Array(lives).fill(emojis['HEART']) // [1,2,3]
    
    spanLives.innerHTML = ''; // limpiamos corazones
    heartsArray.forEach(heart => spanLives.append(heart)); // adjuntar
}

function showTime(){
    spanTime.innerText = Date.now() - timeStart;
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
//  2.1 Definir el tamaño de cada emoji
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift
// 6. Detectar colisión: player vs enemy bomb
// 7. Renderizar el siguiente mapa
// 8. Quitar vidas 
// 9. Mostrar vidas en pantalla
// 10. Agregar un temporizador 

// errores
// si gano y sigo moviendo los keys el tiempo incrementa 
// si pierdo las 3 vidas el cronometro arranca sin que se empiece a jugar
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');
const span_lives = document.querySelector('#lives')
const span_time = document.querySelector('#time')

const player_position = {
    x: undefined,
    y: undefined,
}
const gift_position = {
    x: undefined,
    y: undefined,
}

let canvas_size;
let elements_size;
let level = 0;
let lives = 3;
let time_start;
let time_player;
let time_interval;
let bomb_position = [];

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_keys);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = Math.ceil(window.innerWidth * 0.8)
    : canvas_size = Math.ceil(window.innerHeight * 0.8)

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = Math.floor((canvas_size * 0.1)-0.5);
    game.font = `${elements_size}px Verdana`
    
    const map_number = maps[level];
    
    if (!map_number) {
        game_win();
        return
    }
    /* if(!time_start){
        time_start = Date.now();
        time_interval = setInterval(show_time, 100);
    } */
    
    const map = (map_number.trim().split('\n')).map(x => x.trim().split(''));
    bomb_position = [];
    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            const emoji = emojis[col];
            const x = elements_size * ci;
            const y = elements_size * (ri+1);
            
            if(col == 'O' && (!player_position.x && !player_position.y)){
                player_position.x = x / elements_size;
                player_position.y = y / elements_size;
            }else if (col == 'I'){
                gift_position.x = x / elements_size;
                gift_position.y = y / elements_size;
            }else if(col == 'X'){
                bomb_position.push({
                    x: x / elements_size,
                    y: y / elements_size,
                });
            }

            game.fillText(emoji, x, y);
        });
    });
    move_player();
    show_lives();
}

function move_player(){
    const gift_collision_x = player_position.x == gift_position.x;
    const gift_collision_y = player_position.y == gift_position.y;
    const gift_collision = gift_collision_x && gift_collision_y

    const bomb_collision = bomb_position.find(bomb => {
        const bomb_collision_x = bomb.x == player_position.x;
        const bomb_collision_y = bomb.y == player_position.y;
        return bomb_collision_x && bomb_collision_y;
    });

    if(gift_collision){
        level_win();
    }
    if(bomb_collision){
        level_fail();
    }

    game.fillText(emojis['PLAYER'], player_position.x*elements_size, player_position.y*elements_size);
}
function level_win(){
    level++;
    calculate_canvas_size();
    console.log('You win!!');
}
function level_fail(){
    lives--;
    if (lives == 0){
        level = 0;
        lives = 3;

        time_start = undefined;
    }

    player_position.x = undefined;
    player_position.y = undefined;

    calculate_canvas_size();
    console.log('You collided with a bomb...');
}
function game_win(){
    console.log('You finished the game :)');
    clearInterval(time_interval);
}
function show_lives(){
    span_lives.innerText = emojis['HEART'].repeat(lives);
    // const hearts_array = Array(lives).fill(emojis['HEART'])
    
    // span_lives.innerText = '';
    // hearts_array.forEach(heart => span_lives.append(heart));
}
function calculate_time(){
    if(!time_start){
        time_start = Date.now();
        time_interval = setInterval(show_time, 100)
    }
}
function show_time(){
    // tiempo transcurrido     
    span_time.innerText = Date.now() - time_start;
}


function move_by_keys(event){
    // console.log(event.key);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    if(player_position.y > 1){
        player_position.y -= 1;
    }
    calculate_canvas_size();
    calculate_time();
    show_time();

}
function move_left(){
    if(player_position.x > 0){
        player_position.x -= 1;
    }
    calculate_canvas_size();
    calculate_time();
    show_time();

}
function move_right(){
    if(player_position.x < 9){
        player_position.x += 1;
    }
    calculate_canvas_size();
    calculate_time();
    show_time();
}
function move_down() {
    if(player_position.y < 10){
        player_position.y += 1;
    }
    calculate_canvas_size();
    calculate_time();
    show_time();
}
// registro de la consola