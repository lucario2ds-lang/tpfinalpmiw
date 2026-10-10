
let pantallas = 1;

let decisionesBuenas = 0;
let decisionesMalas = 0;
let decisionesVerdaderas = 0;

let Ending = "";
let inicio;
let cueva;
let oraculo;
let prehistoria;
let futuro;
let recompensa;
let pantalla5;
let pantalla6;
let pantalla7;
let pantalla8;
let pantalla9;
let pantalla10;
let pantalla11;
let pantalla12;
let pantalla13;
let pantalla14;
let pantalla15;
let pantalla16;
// Cargar las imágenes
function preload() {
 // inicio = loadImage("assets/pantalla1.png");
  cueva = loadImage("assets/pantallahome.png");
  oraculo = loadImage("assets/Pantalla1.png");
  prehistoria = loadImage("assets/Pantalla2.png");
  futuro = loadImage("assets/Pantalla3.png");
  recompensa = loadImage("assets/Pantalla4.png");
  pantalla5=loadImage("assets/Prehistoria1.png");
  pantalla6=loadImage("assets/Prehistoria2.png");
  pantalla7=loadImage("assets/Prehistoria3.png");
  pantalla8=loadImage("assets/Prehistoria4a.png");
  pantalla9=loadImage("assets/Prehistoria4b.png");
  pantalla10=loadImage("assets/Prehistoria5a.png");
  pantalla11=loadImage("assets/Prehistoria5b.png");
  pantalla12=loadImage("assets/Prehistoria6a.png");
  pantalla13=loadImage("assets/Prehistoria6b.png");
  pantalla14=loadImage("assets/Prehistoria7b1.png");
  pantalla15=loadImage("assets/Prehistoria8b1.png");
  pantalla16=loadImage("assets/Prehistoria9b1.png");
}

function setup() {
  createCanvas(800, 450);
  textFont("sans-serif");
}

// Cada escena tiene texto, imagen y dos decisiones.
// Los tipos son: "buena", "mala" o "verdadera".
const escenas = [
  {
    titulo: "Regreso a la Cueva del Tiempo",
    texto: "Una misteriosa cueva puede llevarte a otras epocas.\n¿Te atreves a descubrir sus secretos?",
    imagen: "cueva",
    opciones: [
      { texto: "COMENZAR AVENTURA", tipo: "verdadera" },
      { texto: "", tipo: "mala" }
    ]
  },
  {
    titulo: "La busqueda a la entrada de la cueva",
    texto: "Encuentras un mapa viejo con una ubicacion marcada en unas montañas.",
    imagen: "oraculo",
    opciones: [
      { texto: "CONTINUAR", tipo: "verdadera" },
      { texto: "EXPLORAR SOLO", tipo: "mala" }
    ]
  },
  {
    titulo: "El viaje",
    texto: "Recorres muchas montañas por semanas y llegas a la zona marcada en el mapa.",
    imagen: "prehistoria",
    opciones: [
      { texto: "CONTINUAR" },
      { texto: "EXPLORAR SOLO", tipo: "mala" }
    ]
  },
  {
    titulo: "La Entrada",
    texto: "Frente a ti sientes una sensacion extraña pero decides adentrarte a la cueva.",
    imagen: "futuro",
    opciones: [
      { texto: "CONTINUAR", tipo: "verdadera" },
      { texto: "VOLVER", tipo: "mala" }
    ]
  },
  {
    titulo: "Los portales",
    texto: "Al adentrarte en la cueva llegas a una sala con dos portales. ¿A cual quieres entrar?",
    imagen: "recompensa",
    opciones: [
      { texto: "PORTAL VERDE", tipo: "verdadera" },
      { texto: "PORTAL AZUL", tipo: "verdadera" }
    ]
  },
  {
    titulo: "La prehistoria",
    texto: "Al cruzar el portal observas un paisaje muy diferente,con grandes arboles y una enorme montaña humeante a lo lejos.",
    imagen: "pantalla5",
    opciones: [
      { texto: "CONTINUAR", tipo: "verdadera" },
      { texto: "", tipo: "mala" }
    ]
  },
  {
    titulo: "La prehistoria",
    texto: "De repente escuchas un estallido que hace temblar la tierra, mientras que el portal empieza a cerrarse.",
    imagen: "pantalla6",
    opciones: [
      { texto: "CONTINUAR", tipo: "verdadera" },
      { texto: "", tipo: "verdadera" }
    ]
  },
  {
    titulo: "La Tierra devastada",
    texto: "Logras ver frente a ti una nave, una cabaña y una entrada a otra cueva. ¿Que opcion te parece mejor?",
    imagen: "pantalla7",
    opciones: [
      { texto: "NAVE", tipo: "buena" },
      { texto: "CABAÑA", tipo: "mala" }
    ]
  },
  {
    titulo: "La Tierra devastada",
    texto: "Corres a buscar refugio en la cabaña pero...",
    imagen: "pantalla8",
    opciones: [
      { texto: "CONTINUAR", tipo: "mala" },
      { texto: "", tipo: "mala" }
    ]
  },
  {
    titulo: "La Tierra devastada",
    texto: "La cabaña es destruida por los temblores y terminas en el suelo con los escombros sobre tí, no hay forma de que salgas de esta situacion.",
    imagen: "oraculo",
    opciones: [
      { texto: "CONTINUAR", tipo: "mala" },
      { texto: "", tipo: "mala" }
    ]
  }
  
];

// Devuelve la imagen correspondiente a cada escena.
function obtenerImagen(nombre) {
  if (nombre == "cueva") return cueva;
  if (nombre == "oraculo") return oraculo;
  if (nombre == "prehistoria") return prehistoria;
  if (nombre == "futuro") return futuro;
  if (nombre == "recompensa") return recompensa;
  if (nombre == "pantalla5") return pantalla5;
  if (nombre == "pantalla6") return pantalla6;
  if (nombre == "pantalla7") return pantalla7;
  if (nombre == "pantalla8") return pantalla8;
  if (nombre == "pantalla9") return pantalla9;
  if (nombre == "pantalla10") return pantalla10;
  if (nombre == "pantalla11") return pantalla11;
  if (nombre == "pantalla12") return pantalla12;
  if (nombre == "pantalla13") return pantalla13;
  if (nombre == "pantalla14") return pantalla14;
  if (nombre == "pantalla15") return pantalla15;
  if (nombre == "pantalla16") return pantalla16;
  return null;
}

function draw() {
  background(15, 20, 35);

  if (pantallas >= 1 && pantallas <= 12) {
    mostrarPantalla(escenas[pantallas - 1]);
  } else if (pantallas == 13) {
    pantallaBuena();
  } else if (pantallas == 14) {
    pantallaMala();
  } else if (pantallas == 15) {
    pantallaVerdadero();
  }
}

// Funcion reutilizable para mostrar cada escena.
function mostrarPantalla(escena) {
  let imagen = obtenerImagen(escena.imagen);

  if (imagen != null) {
    image(imagen, 0, 0, width, height);
    // Oscurece la imagen para que el texto se lea mejor.
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);
  }

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(27);
  text(escena.titulo, width / 2, 45);

  textSize(18);
  text(escena.texto, width / 2, 130);

  textSize(13);
  text("PANTALLA " + pantallas + " DE 15", width / 2, 205);

  boton(escena.opciones[0].texto, 100, 340);
  boton(escena.opciones[1].texto, 500, 340);

  textSize(13);
  text("Presiona Z para reiniciar", width / 2, 430);
}

// Funcion reutilizable para dibujar botones.
function boton(textoBoton, x, y) {
  fill(55, 75, 105);
  stroke(255);
  strokeWeight(1);
  rect(x, y, 200, 55, 10);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(15);
  text(textoBoton, x + 100, y + 27);
}

// Comprueba si el mouse esta dentro de un boton.
function dentroBoton(x, y, ancho, alto) {
  return mouseX >= x &&
         mouseX <= x + ancho &&
         mouseY >= y &&
         mouseY <= y + alto;
}

// Registra una decision y avanza a la siguiente escena.
function registrarDecision(tipo) {
  if (tipo == "buena") {
    decisionesBuenas++;
  } else if (tipo == "mala") {
    decisionesMalas++;
  } else if (tipo == "verdadera") {
    decisionesVerdaderas++;
  }

  if (pantallas < 12) {
    pantallas++;
  } else {
    Endingelegido();
  }
}

// Selecciona uno de los tres finales.
function Endingelegido() {
  if (decisionesVerdaderas >= 3) {
    Ending = "verdadero";
    pantallas = 15;
  } else if (decisionesBuenas > decisionesMalas) {
    Ending = "Bueno";
    pantallas = 13;
  } else {
    Ending = "Malo";
    pantallas = 14;
  }
}

// Detecta los botones que se presionan.
function mousePressed() {
  if (pantallas >= 1 && pantallas <= 12) {
    let escena = escenas[pantallas - 1];

    if (dentroBoton(100, 340, 200, 55)) {
      registrarDecision(escena.opciones[0].tipo);
    } else if (dentroBoton(500, 340, 200, 55)) {
      registrarDecision(escena.opciones[1].tipo);
    }
  } else {
    // Clic en cualquier lugar para volver a empezar.
    reiniciarJuego();
  }
}

// FINAL 13: BUENO
function pantallaBuena() {
  mostrarFinal(
    "FINAL BUENO",
    "Ayudaste a otros durante tus viajes.\n" +
    "Tus decisiones permitieron que muchas vidas\n" +
    "tuvieran una oportunidad.",
    color(30, 100, 65)
  );
}

// FINAL 14: MALO
function pantallaMala() {
  mostrarFinal(
    "FINAL MALO",
    "Tus decisiones tuvieron consecuencias.\n" +
    "La Cueva del Tiempo se cierra y quedas atrapado\n" +
    "en una epoca que no te pertenece.",
    color(130, 35, 40)
  );
}

// FINAL 15: VERDADERO
function pantallaVerdadero() {
  mostrarFinal(
    "FINAL VERDADERO",
    "Descubriste el secreto de la Cueva del Tiempo.\n" +
    "Tus viajes te ensenaron que cada decision\n" +
    "puede cambiar tu destino.",
    color(65, 40, 120)
  );
}

function mostrarFinal(titulo, mensaje, colorFondo) {
  background(colorFondo);

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(34);
  text(titulo, width / 2, 100);

  textSize(20);
  text(mensaje, width / 2, 220);

  boton("VOLVER A JUGAR", 300, 330);

  textSize(14);
  text(
    "Buenas: " + decisionesBuenas +
    " | Malas: " + decisionesMalas +
    " | Verdaderas: " + decisionesVerdaderas,
    width / 2, 415
  );
}

// Reinicia todas las variables.
function reiniciarJuego() {
  pantallas = 1;
  decisionesBuenas = 0;
  decisionesMalas = 0;
  decisionesVerdaderas = 0;
  Ending = "";
}

function keyPressed() {
  if (key == "z" || key == "Z") {
    reiniciarJuego();
  }
}
