
//variaveis do jogo
let textJogador1 = "Jogador 1 Venceu!";
let textJogador2 = "Jogador 2 venceu!";
let score1 = 0;
let score2 = 0;
let xBolinha = 290;
let yBolinha = 200;
let dBolinha = 15;
let raioBolinha = dBolinha / 2;
var pause = false;
var iaBot = false;
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;
let raqueteComprimento = 15;
let raqueteAltura = 90;
let area = ((raqueteComprimento*raqueteAltura)/2);
let colidiu = false;
let xRaquete = 5;
let yRaquete = 150;
let xRaquete2 = 570;
let yRaquete2 = 150;
let posicaoRaquete = (xRaquete, yRaquete);
let areaRaquete = raqueteAltura+yRaquete;

//cria a função de tela
function setup() {
  createCanvas(600, 400); 
  
}
//cria a função que adiciona as futuras funções do jogo
function draw() {
  background(10);
  mostraBolinha();
  formatos();
  pausarJogo();
  //se a variavel true for verdadeira o jogo inicia
  if(pause == true){
    verificaColisaoBorda();
    scoreGame();
    scoreFunction();
    resetScore();
    movRaquet();
    raquetColis();
    seguirBoli();
    raquetColisdois();
    colisaoMinhaRaqueteBiblioteca();
    colisaoMinhaRaqueteOpenenteBibilioteca();
    moverBolinha();
  }
}


function mostraBolinha(){
    circle(xBolinha, yBolinha, dBolinha);
}
function moverBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha = yBolinha+velocidadeyBolinha;
}
function formatos(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
  rect(xRaquete2, yRaquete2, raqueteComprimento, raqueteAltura);
  rect(300, 20, 15, 15);
  rect(300, 50, 15, 15);
  rect(300, 80, 15, 15);
  rect(300, 110, 15, 15);
  rect(300, 140, 15, 15);
  rect(300, 170, 15, 15);
  rect(300, 200, 15, 15);
  rect(300, 230, 15, 15);
  rect(300, 260, 15, 15);
  rect(300, 290, 15, 15);
  rect(300, 320, 15, 15);
  rect(300, 350, 15, 15);
  rect(300, 380, 15, 15);
}
function verificaColisaoBorda(){
   if (xBolinha > width || xBolinha < 0 ){
    velocidadexBolinha *= -1;
  }
  if (yBolinha > height || yBolinha < 0){
    velocidadeyBolinha *= -1;
  }
}

function scoreGame(){
  textSize(32);
  text(score1, 200, 30);
  text(score2, 400, 30);
  fill(255, 255, 255);
}
function scoreFunction(){
  if (xBolinha > width ){
    score1++;
    xBolinha=290;
    yBolinha = 200;
  }else if (xBolinha < 0){
    score2++;
    xBolinha=290;
     yBolinha = 200;
  }
}
function resetScore(){
  if (score1 >= 10){
    background(255,0,0);
    textSize(32);
    text(textJogador1, 200, 300);
    if(keyIsDown('13')){
      score1 = 0;
      score2 = 0;
      xBolinha = 290;
      yBolinha = 200;
    }   
  }if(score2 >= 10){
        background(137, 207, 240);
        textSize(32);
        text(textJogador2, 200, 300);
        if(keyIsDown('13')){
          score1 = 0;
          score2 = 0;
          xBolinha = 290;
          yBolinha = 200;
    }
}
}
function movRaquet(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
function raquetColis(){
  if (yRaquete < 10){
    yRaquete = 10;
  }else if (yRaquete > 300){
    yRaquete = 300;
  }
}
function raquetColisdois(){
    if (yRaquete2 <  10){
    yRaquete2 = 10;
  }else if(yRaquete2 > 300){
    yRaquete2 = 300;
  }
}
function seguirBoli(){
  if(keyIsDown('73')){
    iaBot = true;
  }else if (keyIsDown('79')){
    iaBot = false;
  }
  if(iaBot == false ){
    if(keyIsDown('87')){
      yRaquete2 -= 10;
    }
    if(keyIsDown('83')){
      yRaquete2 += 10;
    }
  }else{
     if(yBolinha > yRaquete2){
       yRaquete2 += 4.9;
     }else if (yBolinha < yRaquete2){
       yRaquete2 -= 4.9;
     }
     }
  }



function colisaoMinhaRaqueteBiblioteca() {
    colidiu = 
    collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raioBolinha);
  if (colidiu) {
    velocidadexBolinha *= -1;
  }
}

function colisaoMinhaRaqueteOpenenteBibilioteca(){
  colidiu =
    collideRectCircle(xRaquete2, yRaquete2, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raioBolinha);
  if(colidiu) {
    velocidadexBolinha *= -1;
  }
}
function pausarJogo(){
  if (keyIsDown('32')){
    pause = true;
  }else if (keyIsDown('80')){
    pause = false;
  }
}







