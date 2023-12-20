/* Cuando el ejercicio pida ingresar algo hacerlo mediante un prompt, y cuando pida 
mostrar un mensaje hacerlo mediante alert. Usar const, let y template strings.

//* 1 Saludo

Crear un programa que pida al usuario ingresar un nombre y apellido por separado,
y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".*/

let nombre = prompt("Ingresa tu nombre:");

let apellido = prompt("Ingresa tu apellido:");

let mensaje = `Hola ${nombre} ${apellido}, bienvenida a Ada`;

alert(mensaje);

//* 2 Heladería

/* Crear un programa que pida al usuario ingresar, por separado, 
tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo,
"Aquí tiene su helado de chocolate, dulce de leche y menta granizada".*/

let primerSabor = prompt('Ingresa el pirmer sabor de tu helado:');
let segundoSabor = prompt('Ingresa el segundo sabor de tu helado:');
let tercerSabor = prompt('Ingresa el terncer sabor de tu helado:');

let mensajeHelado = `Aquí tiene su helado de ${primerSabor}, ${segundoSabor} y ${tercerSabor}.`;

alert(mensajeHelado);

//* 3 Datos personales

/* Crear un programa que pida al usuario ingresar, por separado,
nombre, apellido, edad, nacionalidad, documento, y muestre luego 
un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos. */ 

let nombreUsuario = prompt('Ingrese su nombre:');
let apellidoUsuario = prompt('Ingrese su apellido:');
let edad = prompt('Ingrese su edad:');
let nacionalidad = prompt('Ingresa tu nacionalidad:');
let dni = prompt('ingresa tu dni');

let documento = `Nuevo usuario agregado al sistema:
    Nombre: ${nombreUsuario}
    Apellido: ${apellidoUsuario}
    Edad: ${edad}
    Nacionalidad: ${nacionalidad}
    DNI: ${dni}`;

alert(documento);

//* 4 Lista de reproducción

/* Crear un programa que pida al usuario ingresar, por separado, 
el nombre de una playlist y el título de tres canciones, y al finalizar 
se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits 
de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'". */ 

let playlist = prompt('Ingrese una playlist:');
let song1 = prompt('Ingresa la primera cación:');
let song2 = prompt('Ingresa la segunda canción:');
let song3 = prompt('Ingresa la tercera canción:');

let mensajePlaylist = `Se ha creado la playlist '${playlist}' con las canciones '${song1}', '${song2}', '${song3}'`;

alert(mensajePlaylist);

//* 5 Dirección completa

/* Crear un programa que pida al usuario ingresar, por separado, la calle,
el número, el departamento, el código postal, la ciudad y el país, y muestre 
un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado 
es: Calle Falsa 123 3C, 1414, CABA, Argentina". */

let calle = prompt('Ingresa el nombre de la calle:');
let numeroCalle = prompt('Numero:');
let departamento = prompt('Departamento:');
let codigoPostal = prompt('Codigo postal:');
let ciudad = prompt('Ingrese su ciudad:');
let pais = prompt('Ingrese su pais')

let mensajeDireccionCompleta = `La dirección que ha ingresado es: ${calle} ${numeroCalle}, ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}.`;

alert(mensajeDireccionCompleta);

//* 6 Meses por día

/* Crear variables que contengan arrays de strings con los nombres de meses,
un array para meses de 31 días, uno para de 30, y otro para 29. Completar cada
array con los nombres correspondientes. Mostrarlos en un mensaje indicando cuál
es cuál, p.ej: "Meses con 31 días: Enero, Marzo, Mayo...". */

let mesesCon31Dias = ["Enero","Marzo","Mayo","Julio","Agosto","Octubre","Diciembre"];
let mesesCon30Dias = ["Abril","Junio","Septiembre","Noviembre"];
let mesesCon29Dias = ["Febrero"];

let mensaje31Dias = "Meses con 31 días: " + mesesCon31Dias.join(", ");
let mensaje30Dias = "Meses con 30 días: " + mesesCon30Dias.join(", ");
let mensaje29Dias = "Meses con 29 días: " + mesesCon29Dias.join(", ");

console.log(mensaje31Dias);
console.log(mensaje30Dias);
console.log(mensaje29Dias);

// OTRA MANERA DE HACER EL MENSAJE

let mensajeCompleto =
    `Meses con 31 días: ${mesesCon31Dias.join(", ")}.\n` +
    `Meses con 30 días: ${mesesCon30Dias.join(", ")}.\n` +
    `Meses con 29 días: ${mesesCon29Dias.join(", ")}.`; 

console.log(mensajeCompleto);

//* 7 Miembros de la familia

/* Crear una variable que contengan un array de strings con los nombres de
integrantes de la familia y completarlo con todos o algunos nombres. Mostrarlos en un mensaje
que los liste. */

let integrantesFamilia = ["Ferran", "Sarai", "Iron"];

let mensajeFamilia = `Integrantes de la familia: ${integrantesFamilia.join(", ")}.`;

console.log(mensajeFamilia);

//* 8 Listas de gustos

/* Crear variables que contengan arrays de strings con los nombres de distintas categorías 
de gustos, por ejemplo, películas, cantantes, libros. Completar cada array con algunos valores.
Mostrarlos en un mensaje indicando cuál es cuál. */

let peliculas = ["El Padrino", "Titanic", "Inception", "Coco"];
let cantantes = ["Michael Jackson", "Adele", "Queen", "Ed Sheeran"];
let libros = ["Cien años de soledad", "Harry Potter", "El Señor de los Anillos", "1984"];

let mensajePeliculas = "Películas favoritas: " + peliculas.join(", ");
let mensajeCantantes = "Cantantes favoritos: " + cantantes.join(", ");
let mensajeLibros = "Libros favoritos: " + libros.join(", ");

console.log(mensajePeliculas);
console.log(mensajeCantantes);
console.log(mensajeLibros);

//* 9 Años perro

/* Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro. */

let anios = parseFloat(prompt("Ingresa tus años para saber los años de perro:"));

const edadPerro = anios * 7;

let mensajeEdadPerro = `Tu edad perruno es ${edadPerro}`;

alert(mensajeEdadPerro);

//* 10 Minutos a segundos

/* Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con 
el resultado de la conversión en segundos. */

let minutos = parseFloat(prompt("Ingresa la cantidad en minutos:"));

let segundos = minutos * 60;

let mensajeSegundos = `${minutos} minutos equivalen a ${segundos} segundos.`;

alert(mensajeSegundos);

//* 11 Días a segundos

/* Crear un programa que pida ingresar una cantidad de días y muestre un mensaje 
con el resultado de la conversión en segundos. */

let dias = parseFloat(prompt("Ingresa la cantidad de días para saber el total de segundos:"));

let diasSegundos = dias * 86.400;

alert(`Un dia tiene 24h, 24h tiene 1440 minutos, Asi que ${dias} días tiene ${diasSegundos} segundos.`);

//* 12 Kilómetros a millas

/* Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado 
de la conversión en millas. */

let km = parseFloat(prompt("Ingresa los km para saber las millas:"));

let millas = km * 0.621371;

alert(`Los ${km} km equivalen a ${millas} millas.`);

//* 13 Área de un triangulo

/* Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, 
calcular su área y mostrarlo en un mensaje. */

let base = parseFloat(prompt("Ingresa la base de triangulo:"));
let altura = parseFloat(prompt("Ingresa la altura del triangulo:"));

let area = 0.5 * base * altura;

alert(`El area del triángulo con base ${base} y altura ${altura} es ${area} unidades cuadradas.`);

//* 14 Perímetro de un rectángulo

/* Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho 
de un rectángulo, calcular su perímetro y mostrarlo en un mensaje. */

let valorAltura = parseFloat(prompt("Ingresa el valor de la altura:"));
let valorAncho = parseFloat(prompt("Ingresa el valor del ancho:"));

let perimetro = 2 * (valorAncho + valorAltura);

let mensajePerimetro = `El prerimetro del rectangulo es ${perimetro}.`;

alert(mensajePerimetro);

//* 15 Porcentaje

/* Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. 
Devolver un mensaje muestre el porcentaje de dicho número. */

let parte = parseFloat(prompt("Ingrese un nümero:"));
let total = parseFloat(prompt("Ingrese el total:"));


let porcentaje = (parte / total) * 100;

let mensajePorcentaje = `El resultado es ${porcentaje}% porque ${parte} respresenta el ${total}%.`;

alert(mensajePorcentaje);

//* 16 Tiempo de viaje

/* Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje 
cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, 
definiendo de antemano distintas velocidades para distintos medios de transporte 
(p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.). */

const velocidadAPie = 5;
const velocidadBicicleta = 10;
const velocidadPatinete = 15;
const velocidadAutobus = 90;
const velocidadCotxe = 120;
const velocidadLambo = 300;

let distancia = parseFloat(prompt("Ingresa la distancia del recorrido en km: "));

let tiempoAPie = distancia / velocidadAPie;
let tiempoBicicleta = distancia / velocidadBicicleta;
let tiempoPatinete = distancia / velocidadPatinete;
let tiempoAutobus = distancia / velocidadAutobus;
let tiempoCotxe = distancia / velocidadCotxe;
let tiempoLambo = distancia / velocidadLambo;

let mensajeTiempo = `Tiempo estimado para completar el recorrido de ${distancia}km:
    - A pie: ${tiempoAPie.toFixed(2)} horas
    - En bicicleta: ${tiempoBicicleta.toFixed(2)} horas
    - En patinete: ${tiempoPatinete.toFixed(2)} horas
    - En autobus: ${tiempoAutobus.toFixed(2)} horas
    - En cotxe: ${tiempoCotxe.toFixed(2)} horas
    - En lambo: ${tiempoLambo.toFixed(2)} horas`;

alert(mensajeTiempo);

//* 17 Duración vuelo

/* Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las 
escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje 
que liste todas las escalas con su duración y la duración total del vuelo. */

let escala1 = prompt("Ingresa el primer destino de la escala:");
let duracion1 = parseFloat(prompt("Ingresa la duracón de la primera escala en horas:"));

let escala2 = prompt("Ingresa el segundo destino de la escala:");
let duracion2 = parseFloat(prompt("Ingresa la duracón de la segunda escala en horas:"));

let escala3 = prompt("Ingresa el tercer destino de la escala:");
let duracion3 = parseFloat(prompt("Ingresa la duracón de la tercera escala en horas:"));

let duracionTotal = duracion1 + duracion2 + duracion3;

let mensajeEscalas = `Escalas del vuelo;
    1 - ${escala1} - Duración: ${duracion1} horas
    2 - ${escala2} - Duración: ${duracion2} horas
    3 - ${escala3} - Duración: ${duracion3} horas
    
    Duración total del vuelo: ${duracionTotal} horas`;

alert(mensajeEscalas);

//* 18 Incremento

/* Crear un programa que pida ingresar una número de partida y una cantidad a ir 
incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje 
y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, 
"Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).*/

let numeroPartida = parseFloat(prompt("Ingresa el número de partidad:"));
let incremento = parseFloat(prompt("Ingresa la cantidad de incremento:"));

let totalPartida = numeroPartida;

for (let i = 1; i <= 5; i++){
    totalPartida += incremento;
    let mensajePartida = `Incremento ${i}) Total: ${totalPartida}`;
    alert(mensajePartida);
} 

//* 19 Celsius a Fahrenheit

/* Crear un programa que pida ingresar una cantidad de grados Celsius y muestre 
un mensaje con el resultado de la conversión a grados Fahrenheit. */

let gradosCelsius = parseFloat(prompt("Ingrese los gradoa Celsius:"));

let gradosFahrenheit = (gradosCelsius * 9/5) + 32;

let mensajeFahrenheit = `LA conversión de ${gradosCelsius} grados Celsius a Fahrenheit son ${gradosFahrenheit}F.`;

alert(mensajeFahrenheit);

//* 20 Múltiplos

/* Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje 
si el primer valor es múltiplo del segundo. * */

let primerNumero = parseFloat(prompt("Ingresa el primer número:"));
let segundoNumero = parseFloat(prompt("Ingresa el segundo número:"));

if (primerNumero % segundoNumero === 0) {
    console.log(`${primerNumero} es múltiplo de ${segundoNumero}`);
} else {
    console.log(`${primerNumero} no es múltiplo de ${segundoNumero}`);
}

//* 21 Segundos a horas, minutos y segundos

/* Crear un programa que pida ingresar una cantidad en segundos y muestre 
un mensaje con el resultado de la conversión en horas, minutos y segundos que 
corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo) */

let cantidadSegundos = parseFloat(prompt("Ingrese una cantidad en segundos:"));

let horas = Math.floor(cantidadSegundos / 3600);
let minuto = Math.floor((cantidadSegundos % 3600) / 60);
let segun2 = cantidadSegundos % 60;

let mensajeConversion = `${cantidadSegundos} segundos corresponden a: ${horas} horas, ${minuto} minutos y ${segun2} segundos.`;

alert(mensajeConversion);

//* 22 Cantidad de caracteres

/* Crear un programa que pida al usuario ingresar un texto y muestre un mensaje con la 
cantidad de caracteres que tiene ese texto. */

let texto = prompt("Ingresa un texto para saber cuntos caracteres tiene:");

let caracteres = texto.length;

let mesnajeText = `Tu texto tiene ${caracteres} caracteres.`;

alert(mesnajeText);

//* 23 Días de vacaciones

/* Crear un programa que pida al usuario ingresar cuántos años lleva trabajando en una 
empresa, y le devuelva la cantidad de días de vacaciones al año que le corresponden, 
siendo 15 días hasta 3 años y 2 días más por cada año extra (p. ej.: a 6 años corresponden 
21 días). */

let añosTrabajados = parseFloat(prompt("Ingrese cuantos años lleva trabajando"));

let diasVacaciones;

if (añosTrabajados <= 3){
    diasVacaciones = 15;
} else {
    diasVacaciones = 15 + 2 * (añosTrabajados - 3)
}

let mensajeVacaciones = `Llevas ${añosTrabajados} años trabajados y te corresponden ${diasVacaciones} días de vacaciones al año.`;

alert(mensajeVacaciones);

//* 24 Cantidad de huéspedes

/* Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones 
tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.*/

let habitaciones2Personas = parseFloat(prompt("Ingresa la cantidad de habitaciones para 2 personas:"));
let habitaciones3Personas = parseFloat(prompt("Ingresa la cantidad de habitaciones para 3 personas:"));
let habitaciones4Personas = parseFloat(prompt("Ingresa la cantidad de habitaciones para 4 personas:"));

let maximoHuespedes = (habitaciones2Personas * 2) + (habitaciones3Personas * 3) + (habitaciones4Personas * 4);

let mensajeMaximoHuespedes = `El hotel puede albergar una máximo de ${maximoHuespedes} huéspedes.`;

alert(mensajeMaximoHuespedes);

//* 25 Calculador gastos

/* Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto 
tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez.
Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan 
por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. 
Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, 
además del dinero disponible que le queda. Hacerlo con 3 servicios. */

let dineroDisponoble = parseFloat(prompt("Ingrese la cantidad de dinero disponible:"));

let serviciosRestantes = 3;
let servicios = [];

for (let i ; i <=3; i++) {
    let nombreServicio = prompt(`Ingrese el nombre del servicio ${i}:`);
    let montoPagar = parseFloat(prompt(`Ingrese el monto a pagar por ${nombreServicio}:`));

    if (montoPagar > dineroDisponoble) {
        alert("No hay suficiente dinero para pagar este servicio. Ingrese un monto menor.");
    } else{
        servicios.push({nombre: nombreServicio, monto: montoPagar});
        dineroDisponoble -= montoPagar;
        serviciosRestantes--;

        alert(`Servicios restantes: ${serviciosRestantes}\nDienro disponible: ${dineroDisponoble}`);
    }
}

let mensajeServicios = "Lista de servicios a pagar:\n";
for (let servicio of servicios){
    mensajeServicios += `${servicio.nombre}: ${servicio.monto}\n`;
}
mensajeServicios += `Dinero disponible restante: ${dineroDisponoble}`;

alert(mensajeServicios);

//* 26 Orden de compras

/* Crear un programa que tome la orden de compra de un local. Pedir al usuario que 
ingrese la cantidad que desea comprar de tres productos distintos, uno por uno,
mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar
el pago. Mostrar un mensaje final con el detalle y el valor total la compra,
cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos 
deben estar definidos de antemano en variables. */

const precioProducto1 = 25;
const precioProducto2 = 45;
const precioProducto3 = 55;

let cantidadProducto1 = parseInt(prompt("Ingrese la cantidad del Producto 1:"));
let cantidadProducto2 = parseInt(prompt("Ingrese la cantidad del Producto 2:"));
let cantidadProducto3 = parseInt(prompt("Ingrese la cantidad del Producto 3:"));

let valorTotalCompra = (cantidadProducto1 * precioProducto1) + (cantidadProducto2 * precioProducto2) + (cantidadProducto3 * precioProducto3);

let cantidadCuotas = parseInt(prompt("En cuántas cuotas desea realizar el pago"));

let valorCuota = valorTotalCompra / cantidadCuotas;

let mensajeFinal = `Detalle de la compra:
Producto 1 - Cantidad ${cantidadProducto1} - Precio Unitario ${precioProducto1} - Subtotal ${cantidadProducto1 * precioProducto1}
Producto 2 - Cantidad ${cantidadProducto2} - Precio Unitario ${precioProducto2} - Subtotal ${cantidadProducto2 * precioProducto2}
Preducto 3 - Cantidad ${cantidadProducto3} - Precio Unitario ${precioProducto2} - Subtotal ${cantidadProducto3 * precioProducto3}

Valor Total de la Compra: ${valorTotalCompra}
Cantidad de cuotas: ${cantidadCuotas}
Valor de cada cuota: ${valorCuota.toFixed(2)}`;

alert(mensajeFinal);
