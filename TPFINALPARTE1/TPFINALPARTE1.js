let pantallas=1;

let decisionesBuenas=0;
let decisionesMalas=0;
let decisionesVerdaderas=0;

let Ending="";

let cueva;
let oraculo;
let prehistoria;
let futuro;
let recompensa;

function preload(){
Caverna= loadImage("assets/cueva.png");
Oraculo= loadImage("assets/oraculo.png");
Prehistoria= loadImage("assets/prehistoria.png");
futuro= loadImage("assets/futuro.png");
Recompensa= loadImage("assets/bounty.png");

}


function Buenas(){
decisionesBuenas++;
pantallas++;

}

function Malas(){
decisionesMalas++;
pantallas++;

}

function Verdaderas(){
decisionesVerdaderas++;
pantallas++;

}


function Endingelegido(){
if (decisionesVerdaderas>=3){
pantalla=15;
Ending="verdadero";
}
else if(decisionesBuenas>=decisionesMalas){
pantalla=14;
Ending="Bueno";
}
else{
  pantalla=15;
Ending="Malo";
}
pantalla=13;
}


if (Ending=="Bueno"){Ending
pantallabuena();
}
else if(Ending == "malo"){
pantallaMalo();

}
else{
pantallaVerdadero();
}
function setup() {
createCanvas(800,450);
  
  
}


function draw() {

  background(0);

  if (pantalla ==1){
  pantallainicio();
  }
  else if (pantalla ==2){
  pantallacueva();
  }
  else if (pantalla==3) {
    pantallaOraculo();
  }
  else if (pantalla==4) {
    pantallaPrehistoria();
  }
else if (pantalla==5) {
  pantallaPeligro();
}
else if (pantalla==6) {
  pantallaFuturo();
}
else if (pantalla==7) {
  pantallaMundoPerfecto();
}
else if (pantalla==8) {
  pantallatierrafuturo();
}
else if (pantalla==9) {
  pantallaviaje();
}
else if (pantalla==10) {
  pantallacincominutos();
}
else if (pantalla==11) {
  pantallarecompensa();
}
else if (pantalla==12) {
  pantallamotin();
}
else if (pantalla==13) {
  pantallaEnding();
}


}

function boton(texto,x,y){

fill(80);
rect(x,y,200,60,10);
fill(255);
textAllign(CENTER,CENTER);
textSize(18);
text(texto,x+100,y+30);
}

function pantallacueva() {
  image(cueva,0,0,Width,height);
  FileList(255);
  textAllign(CENTER);
  textSize(30);
  text("La cueva del tiempo",width/2,80);

  textSize(20);

  text("Frente a ti aparece una extraña cueva.\n"+
    "una voz parece venir desde su interior.",width/2,150);

boton("ENTRAR EN LA CUEVA",200,400);
boton("ALEJARTE",500,400);


}
