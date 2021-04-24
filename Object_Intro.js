const person = {
	name: "Itzel Cabrera",
	age: 19,
	pets:["Fulcrum","Teddy"]
};
	

//Primera forma de imprimir objetcos
console.log(person);

//Segunda forma de imprmir objetos
console.log(person.name);
console.log(person.age);
console.log(person.pets[0]);
console.log(person.pets[1]);

//Tercer forma de imprimir objetos
/*Los objetos no son cosas iterables, pero mediante el uso de for in se puede recorrer
simulando un array*/
for (const key in person){
	console.log(person[key]);
}

//Cuarta forma de imprimir los objetos
console.log(person['name']);

//Acceder a un atributo de tipo array
for (let pet of person.pets){
	console.log(pet);
}

console.log(`Hola ${person.name}, tienes ${person.age} y tus mascotas son ${person.pets.join(',')}`);