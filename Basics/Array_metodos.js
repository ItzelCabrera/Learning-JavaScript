/*MÁS METODOS PARA LOS ARRAYS
callback : una funcion que la ejecuta otra funcion

	*(a,b)=>a-b	
	FuncionMenor_a_Mayor(a,b){
	if(a-b <0) return -1 --> no switchea
	if(a-b == 0) return 0 --> no switchea
	if(a-b>0)  return 1 --> switchea
	}

	*(a,b)=> b-a
	FuncionMayor_a_Menor(a,b){
	if(b-a <0) return -1 --> no switchea
	if(b-a == 0) return 0 --> no switchea
	if(b-a>0)return 1 --> switchea
	}

*/

//Array.from(<objetoIterable>): convierte el objeto iterable en un array

let saludo = 'hola mundo, que tal, como has estado?';
console.log(Array.from(saludo)); 

/*<array>.sort([callback]): ordena los elementos de un array alfabeticamente (Unicode); */
const letters = ['b','a','z'];
const numbers = [1,400,100,3,350,8];
console.log(letters.sort());
console.log(numbers.sort((a,b)=>a-b));
console.log(numbers.sort((a,b)=>b-a));

/*<array>.forEach(callback(currentValue,[index]))*/
numbers.forEach((n,index)=>console.log(`${n} se encuentra en la posicion ${index}`));

/*<array>.some(callback): checa si algun elemento del array cumple la condicion*/
/*<array>.every(callback): checa si todos los elementos del array cumplen la condicion*/
const words = ['HTML','JAVA','JAVASCRIPT','C','C++','C#']
console.log(words.some(word=>word.length>3));
console.log(words.every(word=>word.length>3));

/*<array>.map(callback): transforma todos los elementos del array y devuelve un array*/
console.log(numbers);
let nuevoNumbers = numbers.map(elem=>elem*2);
console.log(nuevoNumbers);

/*<array>.filter(callback): filtra todos los elementos del array que cumplen la condi
cion y devuelve un nuevo array*/
let nuevoNumbers2 = nuevoNumbers.filter(elem=>elem>300);
console.log(nuevoNumbers2);

/*<array>.reduce(callback): reduce todos los elementos del array a un unico valor y 
devuelve un nuevo array*/
let suma = nuevoNumbers2.reduce((a,b)=>a+b);
console.log(suma);

const users = [ //array de objeto de usuarios {objetoUusuario_1},{objetoUsuario_2},...
	{
		name:'user1',
		online: true
	},
	{
		name:'user2',
		online: true
	},
	{
		name:'user3',
		online: true
	},
	{
		name:'user4',
		online: false
	}
]

let usuariosConectados = users.reduce //(callback)
(
	(cont,user)=>{
		if(user.online) cont++
		return cont
	},cont = 0 
	/*despues de declarar lo que va a hacer el callback (despues de =>{}),
	, se pone una ',' y a continuacion los valores inicales de los argumentos del callback
	*/
);

console.log(`Hay ${usuariosConectados} usuarios conectados`);