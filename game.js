/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
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

    // Renderizar Bomba
    elementsSize = (canvasSize * 0.1) - 1;

    startGame();
}

function startGame(){

    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "";

    for (let i = 0; i < 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize);
    }
    

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








/* const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', start_game);

function start_game(){
    // Medidas del Canvas  
    let canva_size;

    if(window.innerHeight > window.innerWidth){
        canva_size = window.innerWidth * 0.8;
    }else{
        canva_size = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canva_size);
    canvas.setAttribute('height', canva_size);

    // Renderizar Bomba
    let elements_size = (canva_size * 0.1) - 1; 
    game.font = `${elements_size}px Verdana`;
    console.log(elements_size);

    for(let x=0; x<10; x++){
        for(let y=1; y<11; y++){
            game.fillText(emojis['X'], elements_size * x, elements_size * y);
        }
    }
} */