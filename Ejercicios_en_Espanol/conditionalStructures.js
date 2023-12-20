//! Estructuras de control: condicionales

//! if, else, else if

//* 1 Número par o impar

/* Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje 
si el valor ingresado es par o impar. */

let numero = parseInt(prompt("Ingrese un numero para saber si es par o impar:"));

if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
} else {
    if (numero % 2 === 0) {
        alert("El número ingresado es par.");
    } else {
        alert("El número ingresado es impar.");
    }
}

//* 2 Días del mes

/* Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene. */

let mes = prompt("Ingresa un mes (en minúsculas):").toLocaleLowerCase();

switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        alert(" El mes de " + mes + " tiene 31 días.");
        break;

    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        alert("El mes de " + mes + " tiene 30 días.");
        break;

    case "febrero":
        alert("El mes de febrero puede tener 28 o 29 días, dependiendo de si es un año bisiesto o no.");
        break;

    default:
        alert("Por favor, ingresa un mes válido.")
}


//* 3 CAmbio de contraseña

/* Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene 
que responder las tres preguntas de seguridad. Si las tres preguntas son respondidas 
correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que 
fue cambiada. En caso de que al menos alguna pregunta fue respondida incorrectamente 
debe mostrar un mensaje advirtiéndolo. Definir de antemano (hardcodear) preguntas y 
respuestas.
*/

let preguntasSeguridad = [
    "¿Cuál es tu color favorito?",
    "¿En qué ciudad naciste?",
    "¿Cuál es el nombre de tu perro?"
];

let respuestasCorrectas = [
    "amarillo",
    "bali",
    "iron"
];

let respuestasCorrectasCount = 0;

for (let i = 0; i < preguntasSeguridad.length; i++){
    let respuestaUsuario = prompt(preguntasSeguridad[i]);

    respuestaUsuario = respuestaUsuario.toLocaleLowerCase();

    if (respuestaUsuario === respuestasCorrectas[i]){
        respuestasCorrectasCount++;
    }
}

if (respuestasCorrectasCount === preguntasSeguridad.length) {
    let nuevaContraseña = prompt("Ingresa tu nueva contraseña:");
    alert("¡Contraseña cambiada con éxito!");
} else {
    alert("Al menos una respuesta fue incorrecta, No se puede cambia la contraseña.");
}

//* 4 Examen aprobado

/* Crear un programa que pida al usuario ingresar la nota un examen y mostrar en un 
mensaje si el examen está aprobado, si debe recuperar o es un aplazo. Si la nota es 
mayor a 7 aprueba, si es mayor a 4 recupera y si es menor a 4 es un aplazo. */

let notaExamen = parseFloat(prompt("Ingresa la nota del examen:"))

if (notaExamen > 7){
    alert("¡Enhorabuena! Estas aprobado.");
} else if (notaExamen > 4){
    alert("Te toca recuperar.");
} else {
    alert("Lo siento. Aplazo.");
}

//* 5 Grupo de letras

/* Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje 
a qué grupo pertenece.
grupo A = {a, e, i, o ,u}
grupo B = {b, c, d, f, g}
grupo C = {h, j, k , l, m}
grupo D = {n, p, q, r}
grupo E = {s, t, v, w, x, y, z} */

let letra = prompt("Ingresa una letra (en minúsculas):").toLocaleLowerCase();

let grupo;

switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        grupo = "Grupo A";
        break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
        grupo = "Grupo B";
        break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
        grupo = "Grupo C";
        break;

    case "n":
    case "p":
    case "q":
    case "r":
        grupo = "Grupo D";
        break;

    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
        grupo = "Grupo E";
        break;

    default:
        grupo = "Carácter no reconocido";
}

alert(`La letra ${letra} pertenece al ${grupo}.`);

//* 6 Sandwich

/* Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir 
para armar su pedido. En caso de que no se elija una opción válida en cualquier paso 
debe mostrar un mensaje alertando que el pedido saldrá incompleto. Mostrar al final 
un mensaje con el pedido resultante. Debe preguntar:

Tipo de pan: blanco, negro, integral
Ingrediente 1: tomate, lechuga, pimiento
Ingrediente 2: cebolla, aceituna, pepino
Aderezos: mostaza, mayonesa, picante
Gaseosa: Coca Cola, Pepsi, Sprite */

let tipoPan = prompt("Tipo de pan: blanco, negro, integral").toLocaleLowerCase();
let pedidoIncompleto = false;

if(!(tipoPan === "blanco" || tipoPan === "negro" || tipoPan === "integral")){
    alert("Pedidio incompleto. ipo de pan no válido.");
    pedidoIncompleto = true;
}

let ingrediente1 = prompt("Ingrediente 1: tomate, lechuga, pimiento").toLocaleLowerCase();
if(!(ingrediente1 === "tomate" || ingrediente1 === "lechuga" || ingrediente1 === "pimiento")){
    alert("Pedidio incompleto. ipo de pan no válido.");
    pedidoIncompleto = true;
}

let ingrediente2 = prompt("Ingrediente 2: cebolla, aceituna, pepino").toLocaleLowerCase();
if(!(ingrediente2 === "cebolla" || ingrediente2 === "aceituna" || ingrediente2 === "pepino")){
    alert("Pedidio incompleto. ipo de pan no válido.");
    pedidoIncompleto = true;
}

let aderezos = prompt("Aderezos: mostaza, mayonesa, picante").toLocaleLowerCase();
if(!(aderezos === "mostaza" || aderezos === "mayonesa" || aderezos === "picante")){
    alert("Pedidio incompleto. ipo de pan no válido.");
    pedidoIncompleto = true;
}

let gaseosa = prompt("Gaseosa: Coca Cola, Pepsi, Sprite").toLocaleLowerCase();
if(!(gaseosa === "Coca Cola" || gaseosa === "Pepsi" || gaseosa === "Sprite")){
    alert("Pedidio incompleto. ipo de pan no válido.");
    pedidoIncompleto = true;
}

if (!pedidoIncompleto) {
    alert(`¡Pedido completo!
    \nTipo pan: ${tipoPan} 
    \nIngrediente 1: ${ingrediente1}
    \nIngrediente 2: ${ingrediente2}
    \nAderezo: ${aderezos}
    \nGaseosa: ${gaseosa}`);
} else {
    alert("Pedido incompleto. No se ha podido procesar el pedido:");
}

//* 7 Piedra, papel o tijera

/* Crear un programa que permita ingresar al jugador piedra, papel o tijera, 
genere de forma aleatoria la jugada de la computadora, y muestre en un mensaje 
quién ganó, con las jugadas respectivas.*/

function jugadaAleatoriaComputadora(){
    let opciones = ["piedra", "papel", "tijera"];
    let aleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[aleatorio];
}

let jugadaUsuario = prompt("Elige piedra, papel o tijera:").toLocaleLowerCase();

if (!(jugadaUsuario === "piedra" || jugadaUsuario === "papel" || jugadaUsuario === "tijera")) {
    alert("Elige una jugada válida (piedra, papel o tijera).");
} else {
    let jugadaComputadora = jugadaAleatoriaComputadora();

    alert(`Jugador: ${jugadaUsuario}\nOrdenador: ${jugadaComputadora}`);

    if (jugadaUsuario === jugadaComputadora) {
        alert("Empate");
    } else if (
        (jugadaUsuario === "piedra" && jugadaComputadora === "tijera") ||
        (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
        (jugadaUsuario === "tijera" && jugadaComputadora === "papel")
    ) {
        alert("¡Ganaste!");
    } else {
        alert("¡Perdiste! El ordenador gana.")
    }
}

//* 8 Simón dice 

/* Crear un programa que muestre una secuencia de 5 nombres de colores en orden 
aleatorio. Los colores posibles son 4: rojo, verde, azul y amarillo. 
Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si 
acertó la secuencia.
Ejemplo
Simón dice: rojo, rojo, azul, verde, amarillo.

Ingrese el primer color: rojo
Ingrese el segundo color: rojo
Ingrese el tercer color: azul
Ingrese el cuarto color: verde
Ingrese el quinto color: amarillo

Felicitaciones! Has ganado! */

function coloresAleatorios(){
    let coloresPosibles = ["rojo", "verde", "azul", "amarillo"];
    let secuencia = [];

    for (let i = 0; i < 5; i++){
        let indiceAleatorio = Math.floor(Math.random() * coloresPosibles.length);
        secuencia.push(coloresPosibles[indiceAleatorio]);
    }

    return secuencia;
}

function compararSecuencias(secuenciaGenerada, secuenciaIngresada){
    for (let i = 0; i < secuenciaGenerada.length; i++ ) {
        if (secuenciaGenerada[i] !== secuenciaIngresada[i]) {
            return false;
        }
    }
    return true;
}

let secuenciaAleatoria = coloresAleatorios();

alert(`Simón dice: ${secuenciaAleatoria.join(", ")}`);

let secuenciaIngresada = [];
for (let i = 0; i < 5; i++) {
    let colorIngresado = prompt("Ingrese el color "+ (i + 1) + ":")
    secuenciaIngresada.push(colorIngresado);
}

if (compararSecuencias(secuenciaAleatoria, secuenciaIngresada)) {
    alert("¡Felicitaciones! Has ganado.");
} else {
    alert(`Lo siento, has perdido. La secuencia correcta era: ${secuenciaAleatoria.join(", ")}`);
}

//! CONDICIONAL SWITCH

// Para los siguientes ejercicios utilizar el condicional switch donde sea necesario.

//* 9 Meses del año

/* Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre 
del mes correspondiente. */

let numeroMes = parseInt(prompt("Introduce un numero del 1 al 12 para saber el mes correspondiente:"));

let meses;

switch (numeroMes){

    case 1:
        meses = "Enero";
        break;
    case 2:
        meses = "Febrero";
        break;
    case 3:
        meses = "Marzo";
        break;
    case 4:
        meses = "Abril";
        break;
    case 5:
        meses = "Mayo";
        break;
    case 6:
        meses = "Junio";
        break;
    case 7:
        meses = "Julio";
        break;
    case 8:
        meses = "Agosto";
        break;
    case 9:
        meses = "Septiembre";
        break;
    case 10:
        meses = "Octubre";
        break;
    case 11:
        meses = "Noviembre";
        break;
    case 12:
        meses = "Diciembre";
        break;

    default:
        meses = "Número no válido. Por favor, ingresa un número del 1 al 12.";
}

alert(`El número ${numeroMes} corresponde al mes de ${meses}.`)

// OTRA MANERA DE HACERLO

let numeroMes = parseInt(prompt("Introduce un numero del 1 al 12 para saber el mes correspondiente:"));

if (numeroMes >= 1 && numeroMes <= 12){
    let mesesArray = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Obtener el nombre del mes usando el índice
    let nombreMes = mesesArray[numeroMes -1];

    alert(`El número ${numeroMes} corresponde al mes de ${nombreMes}.`);
} else {
    alert(`El número ${numeroMes} corresponde al mes de ${meses}.`);
}

//* Estaciones del año II

/* Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en 
la que comienza y termina */

let estacionesAño = prompt("Introduce la estacion del año (PRIMAVERA, VERANO, OTOÑO, INVIERNO").toLocaleUpperCase();

let fechasEstaciones;

switch (estacionesAño){

    case "PRIMAVERA":
        fechasEstaciones = "Comienza alrededor del 20 de marzo en el hemisferio norte\n" +
                            "Comienza alrededor del 23 de septiembre en el hemisferio sur\n" +
                            "Termina alrededor del 21 de junio en el hemisferio norte\n" +
                            "Termina alrededor del 21 de diciembre en el hemisferio sur.";
        break;

    case "VERANO":
        fechasEstaciones = "Comienza alrededor del 21 de junio en el hemisferio norte\n" +
                            "Comienza alrededor del 21 de diciembre en el hemisferio sur\n" +
                            "Termina alrededor del 23 de septiembre en el hemisferio norte\n" +
                            "Termina alrededor del 20 de marzo en el hemisferio sur"
        break;

    case "OTOÑO":
        fechasEstaciones = "Comienza alrededor del 23 de septiembre en el hemisferio norte\n" +
                            "Comienza alrededor del 21 de marzo en el hemisferio sur\n" +
                            "Termina alrededor del 21 de diciembre en el hemisferio norte\n" +
                            "Termina alrededor del 21 de junio en el hemisferio sur"
        break;

    case "INVIERNO":
        fechasEstaciones = "Comienza alrededor del 21 de diciembre en el hemisferio norte\n" +
                            "Comienza alrededor del 21 de junio en el hemisferio sur\n" +
                            "Termina alrededor del 20 de marzo en el hemisferio norte\n" +
                            "Termina alrededor del 23 de septiembre en el hemisferio sur"
        break;

    default:
        fechasEstaciones = " Estación no válida. Por favor, introduce PRIMAVERA, VERANO, OTOÑO o INVIERNO."
}

alert(fechasEstaciones);

// OTRA MANERA DE HACER ESTE EJERCICIO

let estacionIngresada = prompt("Introduce la estacion del año (PRIMAVERA, VERANO, OTOÑO, INVIERNO").toUpperCase();

let inicio, fin;

switch (estacionIngresada) {
    case "PRIMAVERA":
        inicio = "20 de marzo (hemisferio norte) / 23 de septiembre (hemisferio sur)";
        fin = "21 de junio (hemisferio norte) / 21 de diciembre (hemisferio sur)";
        break;

    case "VERANO":
        inicio = "21 de junio (hemisferio norte) / 21 de diciembre (hemisferio sur)";
        fin = "23 de septiembre (hemisferio norte) / 20 de marzo (hemisferio sur)";
        break;

    case "OTOÑO":
        inicio = "23 de septiembre (hemisferio norte) / 21 de marzo (hemisferio sur)";
        fin = "21 de diciembre (hemisferio norte) / 21 de junio (hemisferio sur)";
        break;

    case "INVIERNO":
        inicio = "21 de diciembre (hemisferio norte) / 21 de junio (hemisferio sur)";
        fin = "20 de marzo (hemisferio norte) / 23 de septiembre (hemisferio sur)";
        break;

    default:
        inicio = fin = "Estación no válida";
}

alert(`La estación ${estacionIngresada} comienza alrededor del ${inicio} y termina alrededor del ${fin}.`);


//* 11 Calculadora

/* Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION 
y MULTIPLICACION, y luego de elegida, ingresar dos números y hacer dicha operación 
con ella. */

let operacion = prompt("Elige una operación: SUMA, RESTA, DIVISION, MULTIPLICACION").toUpperCase();

if (operacion !== "SUMA" && operacion !== "RESTA" && operacion !== "DIVISION" && operacion !== "MULTIPLICACION"){
    alert("Operación no válida. Por favr, elige entre SUMA, RESTA, DIVISION o MULTIPLICACION");
} else {

    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número"));

    let resultado;

    switch (operacion){
        case "SUMA":
            resultado = numero1 + numero2;
            break;

        case "RESTA":
            resultado = numero1 - numero2;
            break;

        case "DIVISION":
            if (numero !== 0) {
                resultado = numero1 / numero2;
            } else {
                alert("No se puede dividir por cero.");
                resultado = "Error";
            }
            break;

        case "MULTIPLICACION":
            resultado = numero1 * numero2;
            break;
    }

    if (resultado !== "Error") {
        alert(`El resultado de ${operacion} entre ${numero1} y ${numero2} es: ${resultado}`);
    }
}


//* 12 Televisor 

/* Hacer un programa que empiece preguntando si se desea prender el televisor. 
Si elige que no, el programa debe terminar. Si elige que sí, debe mostrar un 
mensaje con el canal actual y el el nivel de volumen de un televisor, y debe 
permitir realizar las siguientes operaciones:

CAMBIAR CANAL: permite ingresar un canal (0 al 99)
CANAL SIGUIENTE: sube un canal
CANAL ANTERIOR: baja un canal
SUBIR VOLUMEN: sube en volumen en 5
BAJAR VOLUMEN: disminuye en volumen en 5
MUTEAR: pone el volumen en 0

Una vez elegida la opción e ingresado el valor si corresponde, 
debe mostrar un mensaje con el canal y el nivel del volumen actual. */

let televisorEncendido = confirm("¿Deseas encencer el televisor?");

if (televisorEncendido){
    let canalActual = 1;
    let volumenActual = 30;

    while (true) {
        let opcion = prompt(
            `Canal actual: ${canalActual}\nVolumen actual: ${volumenActual}\n\n` +
            "elige un opción:\n" +
            "1. Cambiar canal (0 al 99)\n" +
            "2. Canal siguente\n" +
            "3. Canal anterior\n" +
            "4. Subir volumen\n" +
            "5. Bajar volumen\n" +
            "6. Mutear\n" +
            "7. Apagar el televisor"
        );

        if (opcion === null || opcion === "7") {
            alert("Apagando el televisor.");
            break;
        }

        switch (opcion){
            case "1":
                let nuevoCanal = parseInt(prompt("Ingresa el nuevo calanl (0 al 99)"));
                if (!isNaN(nuevoCanal) && nuevoCanal >= 0 && nuevoCanal <= 99){
                    canalActual = nuevoCanal;
                } else {
                    alert("Canal no válido. Debe estar entre 0 y 99.");
                }
                break;

            case "2":
                canalActual = (canalActual +1) % 100;
                break;

            case "3":
                canalActual = (canalActual - 1 + 100) % 100;
                break;

            case "4":
                volumenActual = Math.min(volumenActual + 5, 100);
                break;

            case "5":
                volumenActual = Math.max(volumenActual - 5, 0);
                break;

            case "6":
                volumenActual = 0;
                break;


            default:
                alert("Opción no válida. Por favor, elige una opción válida.");
                break;
        }

        alert(`Canal acutual: ${canalActual}\nVolumen actual: ${volumenActual}`)
    }
} else{
    alert("El televisor está apagando. ¡Hasta luego!");
}