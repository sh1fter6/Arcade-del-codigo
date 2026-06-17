
// Ejercicios resueltos de Variables, Expresiones y Cadenas de Caracteres


// NIVEL 1: EL INVENTARIO DEL HÉROE
console.group(" NIVEL 1: El Inventario del Héroe");

let nombre = "Ness";
let nivel = 7;
let energia = 88.5;
let estaVivo = true;
let monedas = 120;

const juego = "Arcade del Código";


let poderSecreto;
poderSecreto = "Teletransportación";

console.log("nombre es de tipo:", typeof nombre);
console.log("nivel es de tipo:", typeof nivel);
console.log("energia es de tipo:", typeof energia);
console.log("estaVivo es de tipo:", typeof estaVivo);
console.log("monedas es de tipo:", typeof monedas);

console.log(`Héroe: ${nombre} | Nivel ${nivel} | Energía ${energia} | ¿Vive? ${estaVivo} | ${monedas} monedas`);

console.groupEnd();


// NIVEL 2: EL LABORATORIO DE TIPOS
console.group(" NIVEL 2: El Laboratorio de Tipos");

let unString = "Hola";
let unNumero = 42;
let unBooleano = false;
let unArray = [1, 2, 3];
let unNull = null;
let sinInicializar;

console.log(`texto es ${typeof unString}, numero es ${typeof unNumero}, activo es ${typeof unBooleano}`);
console.log("sinValor es de tipo:", typeof sinInicializar);

let dato = "Mercedes Benz";
console.log("dato empezó como:", typeof dato);
dato = 3;
console.log("y ahora es:", typeof dato);
console.log("5 + 3 =", 5 + 3);
console.log('"5" + 3 =', "5" + 3);

console.groupEnd();


// NIVEL 3: LA MÁQUINA DE PUNTAJE
console.group("NIVEL 3: La Máquina de Puntaje");

let monedasLvl3 = 3;
let gemas = 5;
let multiplicador = 2;

console.log(`Suma: ${gemas + monedasLvl3} | Resta: ${gemas - monedasLvl3} | Multiplicación: ${gemas * monedasLvl3}`);

// Misión B: La trampa de la precedencia
let puntajeSinParentesis = monedasLvl3 + gemas * multiplicador;
let puntajeConParentesis = (monedasLvl3 + gemas) * multiplicador;

console.log("Puntaje (sin paréntesis):", puntajeSinParentesis);
console.log("Puntaje (con paréntesis):", puntajeConParentesis);

// Misión C: Par o impar con el resto
let restoPuntaje = puntajeSinParentesis % 2;
console.log("Resto del puntaje entre 2:", restoPuntaje);

console.groupEnd();



// NIVEL 4: EL DUELO DE PODERES

console.group("NIVEL 4: El Duelo de Poderes");

// Misión A: Incremento y decremento
let vidas = 3;
vidas++; // Incrementa vidas en 1
console.log("Vidas tras power-up:", vidas);

let a = 3;
console.log("a++ devuelve:", a++);
console.log("y luego a vale:", a);
console.log("++a devuelve:", ++a);

// Misión B: El medidor de poder
let poderHeroe = 7;
let poderEnemigo = 5;

console.log("poderHeroe == poderEnemigo ->", poderHeroe == poderEnemigo);
console.log("poderHeroe > poderEnemigo  ->", poderHeroe > poderEnemigo);

console.groupEnd();


// NIVEL 5: EL GENERADOR DE GAMERTAGS

console.group("💬 NIVEL 5: El Generador de Gamertags");

// Misión:
let primerNombre = "Ada";
let apellido = "Lovelace";

// Generar gamertag con guión bajo
let gamertag = primerNombre + "_" + apellido;
console.log("Gamertag:", gamertag);

// Mostrar longitud
console.log("Longitud:", gamertag.length);

// Mostrar primera letra (posición 0)
console.log("Primera letra:", gamertag.charAt(0));

// Cadena con comillas dobles dentro
let grito = primerNombre + ' dijo "¡a programar!"';
console.log("Grito:", grito);

console.groupEnd();


// JEFE FINAL: LA TIENDA DEL ARCADE (EL RECIBO)
console.group("👑 JEFE FINAL: La Tienda del Arcade");

const nombreCliente = "Ness";
const monedasDisponibles = 200;

const precio1 = 50;
const cantidad1 = 2;

const precio2 = 75;
const cantidad2 = 1;

const precio3 = 15;
const cantidad3 = 3;

const subtotal1 = precio1 * cantidad1;
const subtotal2 = precio2 * cantidad2;
const subtotal3 = precio3 * cantidad3;
const total = subtotal1 + subtotal2 + subtotal3;

const descuento = total * 0.10;
const totalConDescuento = total - descuento;

const saldoRestante = monedasDisponibles - totalConDescuento;
const codigoCliente = nombreCliente.charAt(0) + nombreCliente.length;

console.log("===== TIENDA DEL ARCADE =====");
console.log("Cliente: " + nombreCliente + " (código " + codigoCliente + ")");
console.log("Vida Extra   x" + cantidad1 + " = " + subtotal1 + " monedas");
console.log("Escudo       x" + cantidad2 + " = " + subtotal2 + " monedas");
console.log("Poción       x" + cantidad3 + " = " + subtotal3 + " monedas");
console.log("-----------------------------");
console.log("Total:            " + total + " monedas");
console.log("Descuento (10%):  -" + descuento + " monedas");
console.log("TOTAL A PAGAR:    " + totalConDescuento + " monedas");
console.log("Saldo restante:   " + saldoRestante + " monedas");
console.log("=============================");

console.groupEnd();
