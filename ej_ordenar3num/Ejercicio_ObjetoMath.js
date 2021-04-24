const numbers = document.getElementById('numbers'); //obtiene la div numbers
const result = document.getElementById('result'); //obtiene la div result

//pide los datos mediante un cuadro emergente
let a = prompt('Introduzca el primer numero'); 
let b = prompt('Introduzca el segundo numero');
let c = prompt('Introduzca el tercer numero');

//mediante numbers.textContent se accede al contendido de la div numbers
numbers.textContent = `Los numeros introducidos son ${a},${b},${c}`;

//Ordenar los tres numeros de menor a mayor
if (a > b){
	if (a>c) {
		if(b>c) result.textContent = `El orden correcto es ${a}, ${b},${c}`
		else result.textContent = `El orden correcto es ${a}, ${c},${b}`
	}
	else result.textContent = `El orden correcto es ${c}, ${a},${b}`
}else{
	if(b>c){
		if(a>c)result.textContent = `El orden correcto es ${b}, ${a},${c}`
		else result.textContent = `El orden correcto es ${b}, ${c},${a}`
	}else result.textContent = `El orden correcto es ${c}, ${b},${a}`
}
