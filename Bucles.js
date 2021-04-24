/*
Bucles determinados: especifica el numero de veces que 
	for(let i=0; i<numbers.length;i++){
		console.log(numbers[i]);
	}
Bucles indeterminados
	let pass = '';

	while(pass != 'hola'){
		pass = prompt('Introduzca la contraseña');
	}


	do{
		pass = prompt('Introduzca la contraseña');
	}while(pass != 'hola')
	console.log('Fin del bucle');
*/
let numbers = [10,11,12,13,14,15,16]

//for in devuelve el valor del indice; indicado para objetos
for (let number in numbers){
	if(number == 2){
		break;//0 1
	}
	console.log(number);
}

for (let number of numbers){
	if(number == 2){
		continue;//10 11 13 14 15 16
	}
	console.log(number);
}

//Triple === para verificar que sea la misma info y que sea del mismo tipo de dato