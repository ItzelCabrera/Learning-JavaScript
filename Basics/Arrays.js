/*
Permite almacenar datos, independientemente del tipo de datos; datos separados por comas
Pueden declararse vacíos o con datos
Se comportan como listas, se pueden eliminar elementos en cualquier momento

let array = []
*/

let array = [1,2,3,4,5,6,7,8,9,10];
let palabra = 'Hellou';
let palabras = ['hola','Itzel','como','estas','?'];

console.log(array[2]);
console.log(`La suma de ${array[2]} con ${array[4]} es ${array[2]+array[4]}`);
console.log(array);

//Método LENGTH: cantidad de elementos que tiene el array
console.log(`La palabra "${palabras[2]}" tiene ${palabras[2].length} letras`);

//Metodo ISARRAY--> Array.isArray(<array>) ? true: false
console.log(`"palabra" es un array ? ${Array.isArray(palabra)} `);
console.log(`"palabras" es un array ? ${Array.isArray(palabras)} `);

//Método SHIFT --> <array>.shift(); elimina el primer elemento del array y así mismo lo devuleve;
console.log(palabras);
console.log(palabras.shift()); //elimina el primer elemento y lo imprime
console.log(palabras); //se ve afectado el array

//Método POP --> <array>.pop(); elimina el ultimo elemento del array y así mismo lo devuelve;
console.log(palabras);
console.log(palabras.pop()); //elimina el ultimo elemento y lo imprime
console.log(palabras); //se ve afectado el array

let newL;
//Metodo PUSH --> añade uno o más elementos al final del array y devulve la nueva longitud
console.log(palabras);
newL = palabras.push('Bien', 'y', 'tu','?');
console.log(newL);
console.log(palabras);

//Metodo UNSHIFT --> añade uno o más elementos al iniicio del array y devuelve la nueva logitud
console.log(palabras);
newL = palabras.unshift('¡','Hola','Itzel','!');
console.log(newL);
console.log(palabras);

/*Metodo INDEXOF --> devuelve el primer indice del elemento que coincida con el argumento (empieza desde el inicio)
, o -1 si no se ha encontrado tal elemento*/
console.log(palabras);
console.log(`La palabra "como" se encuentra en la posicion ${palabras.indexOf('como')}`);
console.log(`La palabra "como" se encuentra en la posicion ${palabras.indexOf('Juan')}`);

/*Método LASTINDEXOF devuelve el primer indice del elemento que coincida con el argumento (empieza desde el final)
, o -1 si no se ha encontrado tal elemento*/
console.log(palabras);
console.log(`La palabra "Itzel" se encuentra en la posicion ${palabras.lastIndexOf('Itzel')}`);
console.log(`La palabra "como" se encuentra en la posicion ${palabras.lastIndexOf('pepe')}`);

//Metodo REVERSE  --> devuelve el array invertido
console.log(array);
array.reverse();
console.log(array);

//Metodo JOIN-->junta los elementos del array y los separa mediante el argumento (por defecto, los separa con comas)
console.log(palabras);
let arrayComas = palabras.join();
let arrayEspacios = palabras.join(' ');
console.log(arrayComas);
console.log(arrayEspacios);
console.log(palabras);

/*Metodo SPLICE--> cambia el contenido de un array eliminando elementos existentes y/0 agregando elementos al array
<array>.splice(a,{b},{items})
*si solo se envía 'a' --> elimina desde la posicion 'a' hasta el final del array
*si solo se envía 'a' y 'b' --> se recorre a la posicion 'a' y elimina 'b' elementos
*con los tres argumentos: se recorre a la posicion 'a', elimina 'b' elementos,y añade los elemetos items
*/
console.log(array);
array.splice(8);
console.log(array);
array.splice(1,2);
console.log(array);
array.splice(2,3,5,7,9,10);
array.splice(2,0,5,7,9,10); //'b' tiene valor 0 y no elimina nada
console.log(array);

/*Metodo SLICE--> extrae elementos de un array, desde 'a' hasta 'b' y devuelve los elemetos en un array
<array>.slice(a,{b})
*si solo se envía 'a' --> extrae desde la posicion 'a' hasta el final del array
*si no hay argumentos--> devuelve una copi exacta
*OBSERVACION: 'b' es un límite superior abierto, por lo tanto llega a un elemento antes
*/

console.log(array);
let arrayCompleto = array.slice();
let arraySemiCompleto = array.slice(4);
let arraySegmentado = array.slice(2,7);
console.log(arrayCompleto);
console.log(arraySemiCompleto);
console.log(arraySegmentado);
console.log(array);

/*METODO SPLIT, <array>.split(<parteArray>) separa un array dado una parte dell array
, esta parte del array la omite
Ejemplo: let word = 'hola que tal, como has estado?'

console.log(word.split(' ')); --> 'hola', 'que', 'tal,','como','has', 'estado?'
*/

