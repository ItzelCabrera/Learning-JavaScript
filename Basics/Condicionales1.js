/*
Condicionales
-Simples 
	if (condicion){...}
-Compuestos (comprueba una cosa y su caso contrario)
	if (condicion) {...}
	else {...}
-Múltiples  
*/

/*
let num = 0;

if(num > 0) 
	console.log('Numero mayor a cero');
else if(num == 0)
	console.log('Numero igual a cero');
else
	console.log('Numero menor a cero');

*/

/*
Operadores lógicos: AND (&&) o OR (||)
*/
let num1 = 9;
let num2 = 0;

if(num1 > 0){
	if(num2>0){
		console.log(`${num1}*${num2} > 0`);
	}else if(num2 == 0){
		console.log(`${num1}*${num2} = 0`);
	}else{
		console.log(`${num1}*${num2} < 0`);
	}
}

let respuesta = false;

if(!respuesta) console.log(`Respuesta es ${respuesta}`);