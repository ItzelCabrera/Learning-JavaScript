/*
class <nombreClase>{
	constructor(p1,p2,..p3){
	this.<a> = <v>;
	this--> hace referencia al objeto creado
	}
}

Métodos(función que pertenecen al objeto)

Acceder a los atributos/métodos usamos la estructura 
	<nObjeto>.<nAtributo> o <nObjeto>.<nMetodo>()
	<nObjeto>[<'nAtributo'>] o <nObjeto>[<'nFuncion'>]() 
*/

class Persona{
	constructor(name,surname,age){
		this.nombre = name;
		this.apellido = surname;
		this.edad = age;
		this.datos = `${this.nombre}//${this.apellido}//${this.edad}`;
	}

	saludar(){
		return (`Hola soy ${this.nombre} y tengo ${this.edad} años`);
	}
}

const p1 = new Persona('Itzel','Cabrera',19);
const p2 = new Persona('Abril','Cabrera',12);

console.log(p1.datos);
console.log(p1.nombre);
console.log(p1.saludar());

console.log(p2.datos);
console.log(p2.nombre);
console.log(p2.saludar());