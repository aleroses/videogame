/**
 * @type {HTMLCanvasElement}
**/


/* const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%

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


    for (let x=1; x<=10; x++) {
        for (let y=1; y<=10; y++) {
            game.fillText(emojis[mapRowCols[x - 1][y - 1]], elementsSize * y, elementsSize * x);
        }
    }
    

    
    
    game.fillText(emojis['X'], 100, 100);
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
    game.fillText('Platzi', 180, 80);
}  */


const canvas = document.querySelector('#game');
const game = canvas.getContext('2d')
let canvas_size;
let elements_size;

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size)


function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size()
}

function calculate_elements_size(){
    const map = maps[0];
    const map_rows = map.trim().split('\n');
    const map_rows_cols = map_rows.map(row => row.trim().split(''));

    elements_size = (canvas_size * 0.1) - 1;
    game.font = `${elements_size}px Verdana`;


    map_rows_cols.forEach((row, ri) => { // element, indice
        // ['I', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
        row.forEach((col, ci) => {
            // I
            const emoji = emojis[col];
            const x = elements_size * ci;
            const y = elements_size * (ri+1);
            game.fillText(emoji, x, y);
        })
    });


    /* for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            game.fillText(emojis[map_rows_cols[x][y]], elements_size * x, elements_size * (y+1));
        }
    } */
}

// registro de la consola: console log