/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    // Medidas del canvas
    let canvasSize;

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    // Renderizar Bomba
    const elementsSize = (canvasSize / 10) - 1; //10%
    console.log({ canvasSize, elementsSize});

    game.font = elementsSize + 'px Verdana';
    game.textAlign = "";

    for (let i = 0; i < 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize);
    }
    

    /* game.fillText(emojis['X'], 100, 100); */

    /* 
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