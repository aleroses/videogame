/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    // game.fillRect( xinicial, yinicial, width, height)
    game.fillRect(145,0.1,20,20);
    game.fillRect(135,110,40,40);
    game.clearRect(145,0.1,10,10);
    game.clearRect(155,110,20,20); // 135 + 20

    game.font = '25px Verdana';
    game.fillStyle = 'purple';
    game.textAlign = 'end';
    game.fillText('Platzi', 100, 100)
}