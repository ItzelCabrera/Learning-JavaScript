var numbers = [1,2,3,4,5];
//console.log(numbers);
console.log(...numbers);

const addNumbers = (a,b,c)=>{
	console.log(a+b+c)
}

//Enviar los elementos de un array a una funcion
addNumbers(1,2,3);
addNumbers(...numbers);

//Añadir un array a otro array
let users = ['javier','itzel','adal'];
let newUsers =['julieta','pedro','zaid' ];
users.push(newUsers[0],newUsers[1],newUsers[2]);
users.push(...newUsers);
console.log(users);

//Copiar arrays
let a1 = [1,2,3,4];
let a2 = [...a1];
let a3 = [a1];
console.log(a2);
console.log(a3);

//Concat array
let aCC = a1.concat(a2);
let aCC2 = [...a1,...a2];
console.log(aCC);
console.log(aCC2);

//Enviar un numero de param indef
const restParam = (a,b,c) =>{
	console.log(a,b,c);
}

const restParam2 = (...numbers) =>{
	console.log(...numbers);
}

restParam(1,2,3);
restParam2(1,2,3,4,5,6);

//Usando en librería Math
console.log(Math.max(numbers)); //error
console.log(Math.max(...numbers));

//Eliminar elementos duplicados
const numeros = [12,54,6,12,5,7,54,7];
console.log(new Set(numeros));
console.log([new Set(numeros)]);
console.log([...new Set(numeros)]);