/*
EJERCICIO 1: pedir datos

let nombre = prompt('Escribe tu nombre: ');
let edad = prompt('Escribe tu edad:');

console.log(`¡Hola ${nombre}! Tienes ${edad} años y el próximo año tendrás ${parseInt(edad,10)+1} años.`)
*/

/*
EJERCICIO 2: eterminar el area de una fig geometrica
let figura = prompt(`Programa que calcula dimensiones.Ingrese 'A' para un triangulo; Ingrese 'B' para un rectángulo; Ingrese 'C' para un círculo`);
let base =0;
let radio=0;
let altura=0;
switch(figura){
	case 'a':
	case 'A':
		base = prompt(`Ingresa la medida de la base (sin importar unidades, sólo magnitudes)`);
		altura = prompt(`Ingresa la medida de la altura (sin importar unidades, sólo magnitudes)`);
		console.log(`EL área es de ${(parseInt(base,10)*parseInt(altura,10))/2} unidades`);
		break;
	case 'b':
	case 'B':
		base = prompt(`Ingresa la medida de la base (sin importar unidades, sólo magnitudes)`);
		altura = prompt(`Ingresa la medida de la altura (sin importar unidades, sólo magnitudes)`);
		console.log(`EL área es de ${parseInt(base,10)*parseInt(altura,10)} unidades`);
		break;
	case 'c':
	case 'C':
		radio = prompt(`Ingresa la medida del radio (sin importar unidades, sólo magnitudes)`);
		console.log(`EL área es de ${Math.pow(parseInt(radio,10),2)*Math.PI} unidades`);
		break;
	default:
		console.log('Opción ingresada no encontrada, refresque el navegador.')
}
*/

/*
EJERCICIO 3
let number = prompt('Enter any number');

for(let i = 1; i<=number;i++){
	if(i%2 == 0)console.log(`${i} es par `)
	else console.log(`${i} es impar `)
}
*/

/*
EJERCICIO 4: determinar si un numero es primo
let number = 0;
let v = true;
do{
	number = prompt('Enter any number greater than one:');
}while(number <=1)

for(let i=number-1; i>1; i--){
	if(number%i==0){
		v = false;
		console.log(`${number} NO es un numero primo`);
		break;
	}
}
if(v)console.log(`${number} es un numero primo`);
*/

/*EJERCICIO 5: determina el factorial de un numero
let number = 0;
do{
	number = prompt('Enter any number greater than cero:');
}while(number <=0)

let record = number;

for(let i = number-1; i >=1; i--){
	number = number*i;
}

console.log(`El factorial de ${record} es ${number}`);
*/

/*
EJERCICIO 6: pedir numeros seimpre y cuando la suma sea menor a 50
let number = 0;
let n = 0;
let v = true;
while(v){
	n = prompt('Enter any number ');
	number +=parseInt(n,10);
	if(number>50) {
		v = false;
		console.log(`La suma de los números introducidos es mayor a 50`);
	}
}

console.log(`La suma de los números introducidos es ${number}`);
*/

/*
EJERCICIO 7: pide numeros y los multiplica por un numero aleatorio, si el resultado
de esa multiplicacion es par, lo agrupa en un array llamado 'pares' y viceversa

let numeros = [];
let pares = [];
let impares = [];
let nA = 0;
let mult = 0;

for(let i = 0; i<5;i++){
	numeros[i] = prompt(`Introduce el elemento numero ${i+1} del array 'numeros`);
}

for(let j = 0; j<5;j++){
	nA = Math.round(Math.random()*10);
	mult = parseInt(numeros[j],10)*nA;
	console.log(`La multiplicación ${numeros[j]} x ${nA} = ${mult}`);
	if(mult%2 == 0)pares.push(mult);
	else impares.push(mult);
}

console.log(`El array de numeros es :${numeros}`);
console.log(`El array de pares es :${pares}`);
console.log(`El array de impares es :${impares}`);
*/

/*
EJERCICIO 8: dadou un numero reistrado, menor a 99999999 y que sea positivo
const letras=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X'];

number = prompt(`Escribe tu DNI, HASTA 8 DIGITOS Y EL NUMERO DEBE SER POSITIVO`);
while(isNaN(parseInt(number,10)) || parseInt(number,10)>99999999){
	number = prompt(`Intente de nuevo: Escribe tu DNI, HASTA 8 DIGITOS Y EL NUMERO DEBE SER POSITIVO`);
}

number%=23;

console.log(`Tu letra es ${letras[number]}`);
*/

/*EJERCICIO 9: de una palabra, se cuentan las vocales y consonantes
palabra = prompt(`Inserte una palabra`);
palabra = palabra.toUpperCase();
vocales = ['A','E','I','O','U'];
c_Vocales = 0;
c_Consonantes = 0;

for (let elem of palabra){
	if(vocales.indexOf(elem) != -1)c_Vocales++;
	else c_Consonantes++;
}

console.log(`Numero de vocales = ${c_Vocales}`);
console.log(`Numero de consonantes = ${c_Consonantes}`);
console.log(`Longitud de la cadena = ${palabra.length}`);
*/

/*EJERCICIO 10: 
colores = ['AMARILLO','AZUL','MORADO','GUINDA','ROJO','AMARILLO'];

color = prompt('Ingrese un color');
color = color.toUpperCase();

if(colores.indexOf(color) != -1)console.log('Ese color se encuentra en la gama');
else console.log('Ese color NO se encuentra en la gama');
*/