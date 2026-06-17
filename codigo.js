console.group("NIVEL 1: El Inventario del Heroe");
{
  let nombre = "Ness";
  let nivel = 7;
  let energia = 88.5;
  let estaVivo = true;
  let monedas = 120;
  const juego = "EarthBound";
  let poderSecreto;
  poderSecreto = "PSI Rockin";

  console.log("nombre es de tipo:", typeof nombre);
  console.log("nivel es de tipo:", typeof nivel);
  console.log("energia es de tipo:", typeof energia);
  console.log("estaVivo es de tipo:", typeof estaVivo);
  console.log("monedas es de tipo:", typeof monedas);
  console.log("juego es de tipo:", typeof juego);
  console.log("poderSecreto es de tipo:", typeof poderSecreto);

  console.log("Heroe: " + nombre + " | Nivel " + nivel + " | Energia " + energia + " | Vive? " + estaVivo + " | " + monedas + " monedas");
}
console.groupEnd();

console.group("NIVEL 2: El Laboratorio de Tipos");
{
  let unString = "Tazmily";
  let unNumero = 1995;
  let unBooleano = true;
  let unArray = ["Ness", "Lucas", "Claus"];
  let unNull = null;
  let sinInicializar;

  console.log("texto es " + typeof unString + ", numero es " + typeof unNumero + ", activo es " + typeof unBooleano);
  console.log("unArray es de tipo:", typeof unArray);
  console.log("unNull es de tipo:", typeof unNull);
  console.log("sinValor es de tipo:", typeof sinInicializar);

  let dato = "Sky Runner";
  console.log("dato empezo como:", typeof dato);
  dato = 3;
  console.log("y ahora es:", typeof dato);
  console.log("5 + 3 =", 5 + 3);
  console.log('"5" + 3 =', "5" + 3);
}
console.groupEnd();

console.group("NIVEL 3: La Maquina de Puntaje");
{
  let monedas = 3;
  let gemas = 5;
  let multiplicador = 2;

  console.log("Suma: " + (gemas + monedas) + " | Resta: " + (gemas - monedas) + " | Multiplicacion: " + (gemas * monedas) + " | Division: " + (gemas / monedas));

  let puntajeSinParentesis = monedas + gemas * multiplicador;
  let puntajeConParentesis = (monedas + gemas) * multiplicador;

  console.log("Puntaje (sin parentesis):", puntajeSinParentesis);
  console.log("Puntaje (con parentesis):", puntajeConParentesis);

  let restoPuntaje = puntajeSinParentesis % 2;
  console.log("Resto del puntaje entre 2:", restoPuntaje);
  console.log("El puntaje es par?:", restoPuntaje === 0);
}
console.groupEnd();

console.group("NIVEL 4: El Duelo de Poderes");
{
  let vidas = 3;
  vidas++;
  console.log("Vidas tras power-up:", vidas);

  let a = 3;
  console.log("a++ devuelve:", a++);
  console.log("y luego a vale:", a);
  console.log("++a devuelve:", ++a);

  let poderHeroe = 7;
  let poderEnemigo = 5;

  console.log("poderHeroe == poderEnemigo ->", poderHeroe == poderEnemigo);
  console.log("poderHeroe != poderEnemigo ->", poderHeroe != poderEnemigo);
  console.log("poderHeroe > poderEnemigo  ->", poderHeroe > poderEnemigo);
  console.log("poderHeroe >= poderEnemigo ->", poderHeroe >= poderEnemigo);
  console.log("poderHeroe < poderEnemigo  ->", poderHeroe < poderEnemigo);
  console.log("poderHeroe <= poderEnemigo ->", poderHeroe <= poderEnemigo);
}
console.groupEnd();

console.group("NIVEL 5: El Generador de Gamertags");
{
  let nombre = "Ness";
  let apellido = "Onett";

  let gamertag = nombre + "_" + apellido;
  console.log("Gamertag:", gamertag);
  console.log("Longitud:", gamertag.length);
  console.log("Primera letra:", gamertag.charAt(0));

  let grito = nombre + ' dijo "SMAAAASH!"';
  console.log("Grito:", grito);
}
console.groupEnd();

console.group("JEFE FINAL: La Tienda del Arcade");
{
  const nombreCliente = "Lucas";
  const monedasDisponibles = 200;

  const producto1 = "Franklin Badge";
  const precio1 = 50;
  const cantidad1 = 2;

  const producto2 = "PSI Caramel";
  const precio2 = 75;
  const cantidad2 = 1;

  const producto3 = "Beef Jerky";
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
  console.log("Cliente: " + nombreCliente + " (codigo " + codigoCliente + ")");
  console.log(producto1 + "   x" + cantidad1 + " = " + subtotal1 + " monedas");
  console.log(producto2 + "       x" + cantidad2 + " = " + subtotal2 + " monedas");
  console.log(producto3 + "       x" + cantidad3 + " = " + subtotal3 + " monedas");
  console.log("-----------------------------");
  console.log("Total:            " + total + " monedas");
  console.log("Descuento (10%):  -" + descuento + " monedas");
  console.log("TOTAL A PAGAR:    " + totalConDescuento + " monedas");
  console.log("Saldo restante:   " + saldoRestante + " monedas");
  console.log("=============================");

  console.group("Misiones Bonus completadas:");
  
  let iva = totalConDescuento * 0.19;
  let totalConIva = totalConDescuento + iva;
  console.log("Recibo con IVA 19%: " + iva + " monedas (Total con IVA: " + totalConIva + " monedas)");

  console.log("Longitud del nombre del producto mas caro (" + producto2 + "): " + producto2.length + " letras");

  let ultimaLetra = nombreCliente.charAt(nombreCliente.length - 1);
  let codigoClienteMejorado = nombreCliente.charAt(0) + nombreCliente.length + ultimaLetra;
  console.log("Codigo de cliente mejorado: " + codigoClienteMejorado);

  console.groupEnd();
}
console.groupEnd();
