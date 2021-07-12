let cadena = 'Hola mundo';

/*Metodo lenght

let longitud = cadena.length;*/

/*Metodo toUpperCase() and toLowerCase() : no cambian la variable (string) original

console.log(cadena.toUpperCase());
console.log(cadena);
cadena = cadena.toUpperCase();
console.log(cadena);	

console.log(cadena.toLowerCase());
cadena = cadena.toLowerCase();
console.log(cadena);*/

/*Metodo indexOf(stringToSearch)--> devuelve la posición del string (argumento)

console.log(cadena.indexOf('Mundo'));*/

/*Metodo replace(valorBuscar,valorReemplazo)

console.log(cadena.replace("mundo","Itzel"));
console.log(cadena);*/

/*Metodo substring(inicio[,final]) : extrae los caracteres del "inicio" al "final"; el final es uno antes

console.log(cadena.substring(3));
console.log(cadena.substring(5,8));
console.log(cadena.substring(5,25));
console.log(cadena);*/

/*Metodo slice(incio[,fin]): igual que substring, con el único cambio de que este método sí admite valores
negativos (al poner valores negativos, empieza desde atrás). Ejemplo: cadena.slice(2,-3) --> no considera 
los últimos tres caracteres

console.log(cadena.slice(-3)); //de -3 hasta el final
console.log(cadena.slice(0,-6)); //del incio e ignora los ultimos 6 caracteres*/

/*Metodo trim(): elimina los espacios al inicio y al final de la cadena

cadena2 = '		Hola youtube, estamos trabajando con cadenas	';
console.log(cadena2.trim());*/

/*Metodo startsWith(valor[,inicio]): Si la cadena empieza con ese valor --> True or False

console.log(cadena.startsWith('Hola')); //True
console.log(cadena.startsWith('Holaa')); //False
console.log(cadena.startsWith('mund',5)); //True*/

/*Metodo endsWith(valor[,longitud]): evalua si la cadena termina con ese valor
longitud =  límite de la búsqueda (es un límite abierto)

console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a',4));
console.log(cadena.endsWith('mundo'));*/

/*Metodo includes(string[,inicio]): igual que indexOf, pero devulve True or False

console.log(cadena.includes('n')); 
console.log(cadena.includes('n',8)); */

/*Metod repeat(valor) : repite el string el numero de veces que indiquemos

cadena3 = 'Hola';
console.log(cadena3.repeat(5));*/

/*Template de Strings: escribir con variables

*/
let nombre = 'Itzel';
let apellido = 'Cabrera';
let edad = 19;

console.log(`Hola ${nombre} ${apellido} tienes ${edad} anios. El anio que viene tendras ${(edad+1)} anios`);