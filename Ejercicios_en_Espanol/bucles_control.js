//* Estructuras de control: bucles

// Bucle for

//* 1 Números impares

/* Crear un programa que muestre en consola los números impares entre el 0 y el 20 */

for (let i = 0; i <=20; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}

// El ejemplo con pares

for (let i = 0; i <=20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

//* 2 Playlist

/* Crear un programa que pida al usuario ingresar el nombre de una playlist y 
cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la 
cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de 
canciones que quedan por agregar y la playlist con los temas hasta el momento a 
medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre 
de la playlist y la lista de canciones. */

let playlistNombre = prompt("Ingrese el nombre de la playlist:");
let cantidadesCanciones = parseInt(prompt("ingrese la cantidad de canciones a agregar:"));

let playlistCanciones = [];

for (let i = 0; i < cantidadesCanciones; i++){
    let nombreCancion = prompt(`Ingrese el nombre de la canción ${i + 1}:`);

    playlistCanciones.push(nombreCancion);

    console.log(`Canción agregada: ${nombreCancion}`);
    console.log(`Canciones restantes por agregar: ${cantidadesCanciones - (i + 1)}`);
    console.log(`Playlist actual: ${playlistCanciones.join(', ')}`);
}

console.log(`¡Playlist "${playlistNombre}" creada con éxito!`);
console.log(`Lista de conaciones: ${playlistCanciones.join(', ')}`);


//* 3 Número mayor o menor

/* Crear un programa que pregunte si se desea buscar el mayor o el menor número de 
un conjunto. Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar 
uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número 
mayor o menor de todos los ingresados según el elegido.*/

let opcion = prompt("¿Desea buscar el mayor o el menor número? Ingrese 'mayor' o 'menor':").toLowerCase();

if (opcion !== 'mayor' && opcion !== 'menor'){
    console.log("Opción no válida. Por favor, ingrese 'mayor' o 'menor'.");
} else{

    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números a comparar:"));

    if (isNaN(cantidadNumeros) || cantidadNumeros <= 0) {
        console.log("Cantidad no válida. Por favor, ingrese un número entero positivo.");
    } else{

        let numeroActual;
        let resultado;

        for (let i = 1; i <= cantidadNumeros; i++) {
            numeroActual = parseFloat(prompt(`Ingrese el número ${i}:`));

            while (isNaN(numeroActual)) {
                console.log("Por favor, ingrese un número valido.");
                numeroActual = parseFloat(prompt(`Ingrese el número ${i}:`));
            }

            if (opcion === 'mayor') {
                if (i === 1 || numeroActual > resultado) {
                    resultado = numeroActual;
                }
            } else if (opcion === 'menor') {
                if (i === 1 || numeroActual < resultado) {
                    resultado = numeroActual;
                }
            }
        }

        console.log(`El número ${opcion} es: ${resultado}`)
    }
}


//* 4 Factorial

/* Crear un programa que pida ingresar un número, y muestre su factorial. 
Este se calcula multiplicando el mismo número y todos los números que le 
anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 24 */

let numeroFactorial = parseInt(prompt("Ingrese un número para saber su factorial:"));

if (isNaN(numeroFactorial) || numeroFactorial < 0){
    console.log("Por favor, ingrese un número entero no negativo.");
} else {
    let factorial = 1;

    for (let i = numeroFactorial; i > 1; i --) {
        factorial *= i
    }

    console.log(`El factorial de ${numeroFactorial} es: ${factorial}`);
}

//* 5 Carrera

/* Crear un programa para controlar las vueltas de una deportista. Debe pedir al 
usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en 
segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos 
de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas). 
Ejemplo:

Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
Promedio: 144.45s */

let cantidadVueltas = parseInt(prompt("Ingrese la cantidad de vueltas que va a realizar:"));

if (isNaN(cantidadVueltas) || cantidadVueltas <= 0) {
    console.log("Por favor, ingrese un número entero positivo.");
} else {
    let tiemposVueltas = [];
    let sumaTiempos = 0;

    for (let i = 1; i <= cantidadVueltas; i++) {
        let tiempoVuelta = parseFloat(prompt(`Vuelta ${i}: Ingresa el tiempo en segundos:`));

        while (isNaN(tiempoVuelta) || tiempoVuelta < 0){
            console.log("Por favor, ingrese un tiempo válido en segundos.");
            tiempoVuelta = parseFloat(prompt(`Vuelta ${i}: Ingresa el tiempo en segundos`));
        }

        tiemposVueltas.push(tiempoVuelta);
        sumaTiempos += tiempoVuelta;
    }

    let promedio = sumaTiempos / cantidadVueltas;

    console.log(`\nTiempos de cada vuelta:`);
    for (let i = 0; i < cantidadVueltas; i++){
        console.log(`Vuelta ${i + 1}: ${tiemposVueltas[i]}s`);
    }

    console.log(`\nPromedio: ${promedio.toFixed(2)}s`);
}


//* 6 Piedra, papel, tijera II

/* Al ejercicio de Piedra, papel, tijera de condicionales, agregarle la posibilidad
de jugar la cantidad de rondas que se deseen. Por cada ronda, se debe mostrar ambas 
jugadas (usuario y computadora), quién gano la ronda, puntaje parcial hasta el 
momento y rondas restantes. Al finalizar se debe indicar quién ganó. 
Ejemplo:

Ronda: 2 de 5
Jugadora: Piedra
Computadora: Tijera
Jugadora ha ganado esta ronda 
Puntaje: 2 (Jugadora) - 0 (Computadora) */

function obtenerJugadaComputadora() {
    const opciones = ["piedra", "papel", "tijera"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

let totalRondas = parseInt(prompt("Ingrese la cantidad de rondas que desea jugar:"));

if (isNaN(totalRondas) || totalRondas <= 0) {
    console.log("Por favor, ingrese un número entero positivo.");
} else {
    let puntuajeJugador = 0;
    let puntuajeComputadora = 0;

    for (let ronda = 1; ronda <= totalRondas; ronda++) {
        console.log(`\nRonda: ${ronda} de ${totalRondas}`);

        let jugadaUsuario = prompt("Ingrese su jugada 'Piedra, Papel o Tijera: '").toLowerCase();

        if (["pierdra", "papel", "tijera"].includes(jugadaUsuario)) {
            let jugadaComputadora = obtenerJugadaComputadora();

            if (
                (jugadaUsuario === "piedra" && jugadaComputadora === "tijera") ||
                (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
                (jugadaUsuario === "tijera" && jugadaComputadora === "papel")
            ) {
                puntuajeJugador++;
                console.log(`Jugador: ${jugadaUsuario}`);
                console.log(`Computadora: ${jugadaComputadora}`);
                console.log(`Jugador ha ganado esta ronda`);
            } else if (jugadaUsuario === jugadaComputadora) {
                console.log(`Jugador: ${jugadaUsuario}`);
                console.log(`Computadora: ${jugadaComputadora}`);
                console.log(`Esta ronda es un empate`);
            } else {
                puntuajeComputadora++;
                console.log(`Jugador: ${jugadaUsuario}`);
                console.log(`Computadora: ${jugadaComputadora}`);
                console.log(`Computadora ha ganado esta ronda`);
            }

            console.log(`Puntaje: ${puntuajeJugador} (Jugador) - ${puntuajeComputadora} (Computadora)`);
            console.log(`Rondas restantes: ${totalRondas - ronda}`);
        } else{
            console.log(("Por favor, ingrese una jugada válida."));
            ronda--;
        }
    }

    if (puntuajeJugador > puntuajeComputadora) {
        console.log("Jugador ha ganado el juego!");
    }else if (puntuajeJugador < puntuajeComputadora) {
        console.log("¡Computadora ha ganado el juego!");
    }else {
        console.log("¡El juego ha terminaso en empate!");
    }
}

//* 7 Patrón 

/* Crear un programa que muestre en consola el siguiente patrón

*
**
***
****
*****
******
*******
********
*********
**********
***********
************
************* */


const filas = 10;

for (let i = 1; i <= filas; i++){
    let fila = "";


    for (let j = 1; j <=1; j++) {
        fila += "";
    }

    for (let k = 1; k <= i; k++) {
        fila += "*"
    }

    console.log(fila);
}

//! BUCLE WHILE

//* 8 Múltiples intentos

/* Crear un programa que pida ingresar usuario y contraseña. El programa debe 
permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. 
Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un 
mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un 
mensaje de error y terminar el programa. El usuario y la contraseña ya deben 
estar guardadas en variables.
*/

const usuarioCorrecto = "usuario";
const contrasenaCorrecta = "1234";

const intentosMaximos = 3;

for (let intento = 1; intento <= intentosMaximos; intento++) {
    const usuarioIngresado = prompt("Ingrese su usuario:");
    const contrasenaIngresada = prompt("Ingrese su contraseña:");

    if (
        usuarioIngresado === usuarioCorrecto &&
        contrasenaIngresada === contrasenaCorrecta
    ) {
        console.log("¡Bienvenido!");
        break;
    } else {
        console.log(`Intento ${intento} incorrecto.`);

        if (intento === intentosMaximos) {
            console.log("Tres intentos incorrectos. Cerrando sesión.");
        } else {
            console.log("Por favor, vuelva a intentarlo.");
        }
    }
}

//* 9 Cara o cruz


/* Crear un programa que permita escoger entre cara o cruz. El programa luego 
debe generar un resultado aleatorio y mostrar si se acertó o no. El programa 
debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún 
momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la 
cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la 
palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima 
de rondas seguidas acertadas junto a un mensaje de despedida, y terminar 
su ejecución. */

let contadorActual = 0;
let contadorMaximo = 0;

function lanzarMoneda() {
    return Math.floor(Math.random()*2);
}

function jugarCaraCruz() {
    while (true) {
        let eleccion = prompt("Ingrese 'CARA', 'CRUZ' o 'SALIR':").toUpperCase();

        if (eleccion === "SALIR") {
            alert(`¿Hasta luego! La cantidad máxima de rondas seguidas acertadas fue ${contadorMaximo}`);
            break
        }

        if (eleccion !== "CARA" && eleccion !== "CRUZ") {
            alert("Por favor, ingrese 'CARA', 'CRUZ' o 'SALIR'.");
            continue;
        }

        let resultado = lanzarMoneda();

        alert("Resultado: " + (resultado === 0 ? "CARA" : "CRUZ"));

        if ((eleccion === "CARA" && resultado === 0) || (eleccion === "CRUZ" && resultado === 1)) {

            contadorActual++;
            if (contadorActual > contadorMaximo) {
                contadorMaximo = contadorActual;
            }
            alert(`¡Acertaste! Ronadas seguidas acertadas: ${contadorActual}`);
        } else {

            contadorActual = 0;
            alert("¡Fallaste! Reiniciando contador");
        }
    }
}

jugarCaraCruz();


//* 10 Mayor o menor

/* Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego 
pedir al usuario que intente adivinar el número. Por cada intento, debe avisar si el 
número a adivinar es mayor o menor que el número ingresado. El programa debe terminar 
cuando se adivina el número. */

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

while (true) {

    let intentoUsuario = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));

    if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 10) {
        alert("Por favor, infresa un número válido entre 1 y 10.");
        continue;
    }

    if (intentoUsuario === numeroAleatorio) {
        alert("¡Felicidades! Has adivinado el número.");
        break;
    } else {

        let mensaje = (intentoUsuario < numeroAleatorio) ? "El número es mayor." : "El número es menor.";
        alert(mensaje);
    }
}