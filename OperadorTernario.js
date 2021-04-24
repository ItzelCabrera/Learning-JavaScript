/*
Sintaxis:
	(condicion) ? sentencia en caso de ser true:sentencia en caso de ser false
	(condicion) ?
		(1ra sentencia en caso de ser true,
		2da sentencia en caso de ser true,
		...,
		enésima sentencia en caso de ser true)
		:
		(1ra sentencia en caso de ser false,
		2da sentencia en caso de ser false,
		...,
		enésima sentencia en caso de ser false):};
*/

let num = 101;

(num%2 == 0) ? 
(
	console.log(`${num} es par`),
	console.log(`${num} es par`),
	console.log(`${num} es par`)
)
:
(
	console.log(`${num} es impar`),
	console.log(`${num} es impar`),
	console.log(`${num} es impar`)
)