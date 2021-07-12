/*
ObjetoMath es estática: no se pueden crear instancias; los métodos son <NombreClase>.<método>
*/

console.log(Math.E);
console.log(Math.PI);

let num = -5.4;

console.log(Math.abs(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.pow(5,3));

r = Math.random()*100;
console.log(r);
console.log(Math.round(r));

/*Formula para un numero aleatorio entre un límite. Sea el límite min y el max
	Math.random() * (max - min)+min --> este tiene un limite minimo abierto y un limite max cerrado
*/

console.log(Math.sign(num));
console.log(Math.sign(r));

console.log(Math.sqrt(36));
