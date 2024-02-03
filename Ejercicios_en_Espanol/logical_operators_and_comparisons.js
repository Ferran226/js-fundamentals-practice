//! OPERADORES LÓGICOS Y DE COMPARACIÓN

/* Usar confirm cuando se necesite obtener la respuesta a una pregunta de sí o no 
por parte del usuario. Mostrar true o false como respuesta (no hace falta poner un mensaje).*/

//* 1 Número mayor a 100

/* Crear un programa que permita ingresar tres número y muestre si alguno de ellos es mayor a 100 */

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

if (numero1 > 100 || numero2 > 100 || numero3 > 100) {
    alert("¡Al menos uno de los números es mayor a 100!");
} else {
    alert("Ninguno de los números es mayor a 100.");
}

//* 2 Número dentro de rango

/* Crear un programa que pida al usuario ingresar un número que represente el límite 
inferior del rango, uno que represente el límite mayor, y luego otro cualquiera y mostrar 
en un mensaje si el último número se encuentra dentro del rango ingresado.*/

let limiteInferior = parseFloat(prompt("Ingrese el limite inferior del rango:"));
let limiteSuperior = parseFloat(prompt("Ingrese el limite superior del rango:"));
let numero = parseFloat(prompt("Ingrese otro número:"));

if (numero >= limiteInferior && numero <= limiteSuperior){
    alert(`El número ${numero} está dentro del rango.`);
} else {
    alert(`El número ${numero} está fuera del rango.`);
}

//* 3 Donación de sangre

/* Crear un programa que realice al usuario 3 preguntas: si se ha hecho tatuajes 
recientemente, si ha tenido o tiene hepatitis, si tiene anemia. Si responde a alguna 
de ellas afirmativamente, debe mostrar un mensaje que indique si puede o no donar sangre */

let tatuajes = prompt("¿Se ha hecho tatuajes recientemente? (Ingrese 'SI' o 'NO')").toUpperCase();
let hepatitis = prompt("¿Ha tenido o tiene hepatitis? (Ingrese 'SI' o 'NO')").toUpperCase();
let anemia = prompt("¿Tiene anemia? (Ingrese 'SI' o 'NO')").toUpperCase();

if (tatuajes === 'NO' && hepatitis === 'NO' && anemia === 'NO') {
    alert("Puede donar sangre. ¡Gracias por su donación!");
} else {
    alert("Lo sentimos,no puede donar sangre en este momento.")
}


//OTRA MANERA DE HACER ESTE EJERCICIO

let haHechoTattuajes = confirm("¿Se ha hecho tatuajes recientemente?");
let haTenidoHepatitis = confirm("¿Ha tenido o tiene hepatitis?");
let tieneAnemia = confirm("¿Tiene anemia?");

if (!haHechoTattuajes && !haTenidoHepatitis && !tieneAnemia) {
    alert("Puede donar sangre. ¡Gracias por su donación!");
} else {
    alert("Lo sentimos,no puede donar sangre en este momento.")
}


//* 4 Autenticación

/* Crear un programa que pida ingresar el usuario y la contraseña y los 
compare con el usuario y contraseña guardados en variables, y muestre en un 
mensaje si tiene el acceso autorizado */

const usuario = "Pepe"
const pin = 1234

let inicioUsuario = prompt("Ingrese su usuario:");
let contraseña = parseInt(prompt("Ingres su contraseña:"));

if (inicioUsuario === usuario && contraseña === pin) {
    alert(`Bienvenido ${inicioUsuario}, tiene el acceso autorizado.`);
} else {
    alert("Usuario o contraseña inválido.");
}

//* 5 Mantenimiento

/* Hacer un programa que pregunte por separado si el auto tiene aceite, agua, 
y neumáticos con presión. Mostrar en un mensaje si tiene que hacer mantenimiento 
o no si alguna de las respuestas es negativa */

let aceite = prompt("¿Tiene aceite? (Ingrese 'SI' o 'NO')").toUpperCase();
let agua = prompt("¿Tiene agua? (Ingrese 'SI' o 'NO')").toUpperCase();
let neumatico = prompt("¿Tiene presion los neumáticos? (Ingrese 'SI' o 'NO')").toUpperCase();

if (aceite === 'SI' && agua === 'SI' && neumatico === 'SI') {
    alert("Su vehiculo no tiene que pasar ningún mantenimiento");
} else {
    alert("Su vehiculo es necesario un mantenimiento.");
}

//* 6 Acceso restringido

/* Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la 
cuota al día, o no miembros que tengan autorización. Hacer un programa que pregunte 
estas si es miembro, si tiene la cuota al día y si tiene autorización y muestre luego 
un mensaje indicando si tiene el acceso permitido o no. */

let miembro = prompt("¿Eres miembre del club? (Ingrese 'SI' o 'NO')").toUpperCase();
let cuota = prompt("¿Tienes la cuota al día? (Ingrese 'SI' o 'NO')").toUpperCase();
let autorizacion = prompt("¿Tienes autorización? (Ingrese 'SI' o 'NO')").toUpperCase();

if ((miembro === 'SI' && cuota === 'SI') || (miembro === 'NO' && autorizacion === 'SI')) {
    alert("Tienes acceso a nuetros maravilloso club")
} else {
    alert("Lo sientimos, no cumples los requisitos para entrar en nuestro club");
}

//* 7 Cátedra promocionada

/* Hacer un programa que pida ingresar los valores de los tres parciales de la cátedra 
mostrar un mensaje indicando si promociona o no la cátedra. La misma se promociona si al 
menos dos de ellos fueron aprobados con una nota de 8 o más. */

let parcial1 = parseFloat(prompt("Ingresa la nota del primer parcial:"));
let parcial2 = parseFloat(prompt("Ingresa la nota del segundo parcial:"));
let parcial3 = parseFloat(prompt("Ingresa la nota del tercer parcial:"));

if ((parcial1 >= 8 && parcial2 >= 8) || (parcial1 >= 8 && parcial3 >= 8) || (parcial2 >= 8 && parcial3 >= 8)){
    alert("¡Enhorabuena! Promocionaste la cátedra.");
} else {
    alert("Lo siento, no promocionaste la cátedra.");
}

//* 8 Número más grande (2 números)

/* Hacer un programa que pida ingresar 2 números, y muestre como resultado el más grande 
de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es 
igual a otro, debe mostrar un mensaje diciéndolo. */

let primerNumero = parseFloat(prompt("Introduce el primer número:"));
let segundoNumero = parseFloat(prompt("Ingresa el segundo número:"));

if (primerNumero > segundoNumero){
    alert(`El ${primerNumero} es mayor al ${segundoNumero}.`);
} else if (segundoNumero > primerNumero){
    alert(`El ${segundoNumero} es mayor que ${primerNumero}`);
} else {
    alert("Los dos números son iguales.");
}

//* 9 Número más grande (3 números)

/* Hacer un programa que pida ingresar 3 números, y muestre como resultado el más 
grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los 
números es igual a otro, debe mostrar un mensaje diciéndolo. */

let number1 = parseFloat(prompt("Introduce el primer número:"));
let number2 = parseFloat(prompt("Ingresa el segundo número:"));
let number3 = parseFloat(prompt("Ingresa el tercer número:"));

if (number1 > number2 && number1 > number3) {
    alert(`El ${number1} es el numero mayor`);
} else if (number2 > number1 && number2 > number3){
    alert(`El ${number2} es el numero mayor`);
} else if (number3 > number1 && number3 > number2){
    alert(`El ${number3} es el numero mayor`);
} else{
    alert("Los tres números son iguales.");
}

// OTRA MANERA DE HACER ESTE EJERCICIO MAS COMPACTA

let number_1 = parseFloat(prompt("Introduce el primer número:"));
let number_2 = parseFloat(prompt("Ingresa el segundo número:"));
let number_3 = parseFloat(prompt("Ingresa el tercer número:"));

let maxNumber = Math.max(number_1, number_2, number_3);

if (number_1 === number_2 && number_2 == number_3) {
    alert("Los tres números son iguales");
} else {
    alert(`El ${maxNumber} es le número mayor.`)
}

//* 10 Términos y condiciones de uso

/* Crear un programa que pregunte si acepta los términos y condiciones de uso. 
Si el usuario responde que sí, debe mostrar un mensaje que diga "Continuando con 
el proceso...". Si responde que no, debe mostrar un mensaje que diga "No se puede 
continuar con el proceso si no se aceptan los términos y condiciones de uso". */

let aceptaTerminos = prompt("¿Acepta los términos y condiciones de uso? (Ingrese 'SI' o 'NO')").toUpperCase();

if (aceptaTerminos === 'SI') {
    alert("Continuando con el proceso...");
} else if (aceptaTerminos === 'No') {
    alert("No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso");
} else {
    alert("Respuesta inválida. Por favor, ingrese 'SI' o 'NO'.");
}

//* 11 Quizz

/* Crear un programa que sea un cuestionario con 3 preguntas de sí o no. Al finalizar, 
mostrar un mensaje de felicitaciones si se respondió bien a todas, o uno de que ha 
perdido el juego si respondió mal al menos una. */

let pregunta1 = prompt("¿El Sol es una estrella? (Ingrese 'SI' o 'NO')").toUpperCase();
let pregunta2 = prompt("¿El agua hierve a 100 grados Celsius al nivel del mar? (Ingrese 'SI' o 'NO')").toUpperCase();
let pregunta3 = prompt("¿La Luna orbita alrededor de la Tierra? (Ingrese 'SI' o 'NO')").toUpperCase();

if ((pregunta1 === 'SI' || pregunta1 === 'NO') &&
    (pregunta2 === 'SI' || pregunta2 === 'NO') &&
    (pregunta3 === 'SI' || pregunta3 === 'NO')) {

        if (pregunta1 === 'SI' && pregunta2 === 'SI' && pregunta3 === 'SI'){
            alert("¡Felicitaciones! respondió bien a todas.");
        } else {
            alert("Los siento, no respondió bien a todas las preguntas.");
        }
} else {
    alert("Respuestas inválidad. Por favor, ingrese 'SI' o 'NO'.");
}

//* 12 Autenticación

/* Crear un programa que pida ingresar el usuario y la contraseña y los compare con el 
usuario y contraseña guardados en variables. Si coinciden debe mostrar un mensaje que 
diga "Autenticación exitoso" y si no, debe mostrar "Usuario o contraseña equivocados". */

const usuario_1 = "Juan"
const contraseña_1 = 1234

let inicioUsuario_1 = prompt("Ingrese su usuario:");
let contraseñaUsuario_1 = parseInt(prompt("Ingres su contraseña:"));

if (inicioUsuario_1 === usuario_1 && contraseñaUsuario_1 === contraseña_1) {
    alert(`Autenticación exitoso`);
} else {
    alert("Usuario o contraseña equivocados");
}

//* 13 Juez de gusto

/* Crear un programa que pida al usuario evaluar del 1 al 10 cuánto le gusta X cosa 
(a elección). Dependiendo de la respuesta, debe mostrar un mensaje en consonancia. 
Hacer mínimo 4 casos posibles. Si se ingresa algo que no sea un número del 1 al 10, 
 mostrar un mensaje de advertencia y volver a pedir dicho número. */

let calificacionRestaurante;
let calificacionPelicula;
let calificacionLibro; 
let calificacionComprasOnline; 


while (true){
    calificacionRestaurante = parseFloat(prompt("En una escala del 1 al 10, ¿cómo calificarías la calidad del servicio recibido en un restaurante reciente?"));

    if (!isNaN(calificacionRestaurante) && calificacionRestaurante >= 1 && calificacionRestaurante <= 10) {
        break;
    } else {
        alert("Error: Por favor, ingrese un número valido del 1 al 10.");
    }
}

while (true){
    calificacionPelicula = parseFloat(prompt("Del 1 al 10, ¿qué puntuación le darías a tu nivel de satisfacción con la última película que viste?"));

    if (!isNaN(calificacionPelicula) && calificacionPelicula >= 1 && calificacionPelicula <= 10) {
        break;
    } else {
        alert("Error: Por favor, ingrese un número valido del 1 al 10.");
    }
}

while (true){
    calificacionLibro = parseFloat(prompt("En una escala del 1 al 10, ¿cuánto disfrutaste el último libro que leíste?"));

    if (!isNaN(calificacionLibro) && calificacionLibro >= 1 && calificacionLibro <= 10) {
        break;
    } else {
        alert("Error: Por favor, ingrese un número valido del 1 al 10.");
    }
}

while (true){
    calificacionComprasOnline = parseFloat(prompt("Del 1 al 10, ¿cómo calificarías tu nivel de satisfacción con tu experiencia reciente de compras en línea?"));

    if (!isNaN(calificacionComprasOnline) && calificacionComprasOnline >= 1 && calificacionComprasOnline <= 10) {
        break;
    } else {
        alert("Error: Por favor, ingrese un número valido del 1 al 10.");
    }
}

alert(`Calificación Restaurante: ${calificacionRestaurante}`);
alert(`Calificación Película: ${calificacionPelicula}`);
alert(`Calificación Libro: ${calificacionLibro}`);
alert(`Calificación Compras Online: ${calificacionComprasOnline}`);

//* 14 Calificación

/* Crear un programa que permita ingresar el resultado de una evaluación con un puntaje 
del 1 al 10, y muestre un mensaje que diga:

¡Excelente!, si la nota es 10

¡Muy bien!, si la nota es 8 o 9

Aprobado, si la nota es 6 o 7

Reprobado, si la nota es menor a 6 */

let nota = parseFloat(prompt("Ingresa el resultado de la evalucavion (del 1 al 10):"));

if (!isNaN(nota) && nota >= 1 && nota <= 10) {
    if (nota === 10) {
        alert("¡Excelente!");
    } else if (nota >= 8 && nota <=9){
        alert("¡Muy bien!");
    } else if (nota >=6 && nota <=7){
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
} else {
    alert("Error: Ingrese un número válido del 1 al 10.");
}
