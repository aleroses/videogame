//contect
const canvas = document.querySelector('#game');
const btnArriba = document.querySelector('#up');
const btnAbajo = document.querySelector('#down');
const btnDer = document.querySelector('#right');
const btnIzq = document.querySelector('#left');

const juego  = canvas.getContext('2d');

//signals: 
window.addEventListener('load', resizeEvent);
window.addEventListener('resize', resizeEvent);


let posJugador     = undefined; let mapa     = Array();  let nivel = 0;
let prePosJugador  = undefined; let celda_t  = 0;        let nivel_actual = undefined;
let puntoDePartida = Number(0); let canvas_t = 0;        var actualizado  = Boolean(false);
let vidas          = Array();

function resizeEvent(){
    actualizado = false;
    canvas_t = (window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight) *.75 ;
    canvas.setAttribute('width', canvas_t);
    canvas.setAttribute('height',canvas_t);
    celda_t = canvas_t / 10;
    juego.textAlign='end';
    juego.font = celda_t - celda_t / 10 +'px arial';
    update();
}


function update(){
    if(vidas.length == 3 && actualizado) return;
    cargarMapa();
    clear();
    paintEvent();
    paintEventPlayer();
    paintEventGameOver();
    actualizado = true;}


function cargarMapa(){
    if(nivel_actual == nivel) return;

    nivel_actual = nivel;
    mapa = maps[nivel].match(/[IOX-]/g);}


function clear(){
    if(!actualizado) {
        juego.clearRect(0,0, canvas_t, canvas_t);
        return;}

    if(posJugador == prePosJugador) return;
    clearRect(posJugador);
    clearRect(prePosJugador);}


function clearRect(indice){
    const x  = posX(indice ) - celda_t / 10;
    const y  = posY(indice ) + celda_t / 5;
    juego.clearRect(x - 1 ,y , - celda_t, - (celda_t + 1));}


function posY(indice){ return (~~(indice/10) + 1) * celda_t - celda_t / 5; }
function posX(indice){ return (indice - (~~(indice/10) * 10) + 1) * celda_t + celda_t / 10;}


function paintEvent(){
    if(!actualizado)
        mapa.forEach((char, idx) => {
            if(char == 'O' && posJugador == undefined) puntoDePartida = posJugador = idx;       
            juego.fillText(emojis[char], posX(idx), posY(idx) );});}


function paintEventPlayer(){
    if(mapa[posJugador] == 'I') {
        nivel = nivel + 1 <= 2 ? ++nivel : 0;
        posJugador = prePosJugador = undefined;
        actualizado = false;
        update();
        return;}

    if(posJugador != undefined && prePosJugador != posJugador){
        juego.fillText(emojis[mapa[prePosJugador]],posX(prePosJugador),posY(prePosJugador));

        if(collisionEvent()) juego.fillText(emojis['PLAYER'], posX(posJugador),posY(posJugador));
        else paintEventGameOver();}}


function collisionEvent(){
    if(vidas.length < 3 && mapa[posJugador] == 'X'){ 
        vidas.push(posJugador);
        juego.fillText(emojis['BOMB_COLLISION'],posX(posJugador),posY(posJugador));
        posJugador = puntoDePartida;}
    if(vidas.length == 3) return false; /*juego terminado*/
    return true; /*continuar con el juego*/}


function paintEventGameOver(){
    juego.textAlign='end';
        vidas.forEach((idx) =>{
            clearRect(idx);
            juego.fillText(emojis['BOMB_COLLISION'],posX(idx),posY(idx));});

    if(vidas.length < 3) return;

    const fuente = celda_t - celda_t / 10 ;
    const media = canvas_t / 2;
    juego.fillStyle = '#000000';
    juego.fillRect(0, media - (fuente /2), canvas_t, fuente);
    juego.textAlign = 'center';
    juego.fillStyle = '#ff5555';
    juego.fillText('Game Over', media, media + fuente/3);}


//signals:
window.addEventListener('keydown',keyMov);
btnArriba.addEventListener('click', movArriba);
btnAbajo.addEventListener('click', movAbajo);
btnDer.addEventListener('click', movDer);
btnIzq.addEventListener('click', movIzq);

//slots:
function keyMov(event){
    switch(event.keyCode){
        case 37: movIzq();    break;//izquierda
        case 38: movArriba(); break;//arriba
        case 39: movDer();    break; //derecha
        case 40: movAbajo();  break;//abajo
        default:              break;}}


function movArriba(){
    prePosJugador = posJugador;
    posJugador -= 10;
    if(posJugador < 0) posJugador = prePosJugador;
    update();}


function movAbajo(){
    prePosJugador = posJugador;
    posJugador += 10;
    if(posJugador >= 100) posJugador = prePosJugador;
    update();}


function movDer(){
    prePosJugador = posJugador;
    const pered = (~~(posJugador / 10)) *10 + 10;
    ++posJugador;
    if(posJugador >= pered) posJugador = prePosJugador;
    update();}


function movIzq(){
    prePosJugador = posJugador;
    const pered  = ~~(posJugador /10) * 10; 
    --posJugador;
    if(posJugador < pered) posJugador = prePosJugador;
    update();}