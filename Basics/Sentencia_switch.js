/*
Sintaxis simple
	switch (evaluacion){
		case 1:
			//codigo
			break;
		case 2:
			//codigo
			break;
		...
		case n:
			//codigo
			break;
		default:
			//código
	}

Sintaxis multiple
	switch (evaluacion){
		case 1:
		case 2:
		case 3:
			//codigo a ejecutar 
			break;
		default:
			//codigo
	}

Sintaxis multiple encadenada
	algunos cases no llevan breaj, por lo tanto se ejecuta el siguiente bloque case

**EL BREAK ROMPE LA EJECUCIÓN Y PASA A LA SIGUIENTE ESTRUCTURA 
*/

let number = 1;

switch(number){
	case 1:
	case 3:
	case 5:
		console.log(`${number} es 1,3 o 5`);
		break;
	default:
		console.log(`El numero es diferente a 1,3 o 5`);
}