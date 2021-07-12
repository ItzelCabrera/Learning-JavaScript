class Book{
	constructor(){
		this.title = ' ';
		this.author = ' ';
		this.year = 0;
		this.gender = ' ';
	}

	getData(){
		return `Titulo: ${this.title}//Autor: ${this.author}//Year: ${this.year}//Gender: ${this.gender}`;
	}

	setData(){
		let t = '';
		let a = '';
		let y = 0;
		let g = ' ';
		do{
			t = prompt("Introduce el tItulo del libro_");
		}while(t.lenght==0)
		
		do{
			a = prompt("Introduce el autor del libro_");
		}while(a.lenght==0)
		
		do{
			y = prompt("Introduce el anio del libro_");
			y = parseInt(y,10);
		}while((y<=999) || (y >= 9999))

		do{
			g = prompt(`Introduce el genero del libro 1.-Aventuras,2.-Terror,3.-Fantasia[F])_`);
			g = parseInt(g,10);
		}while(g>3)

		this.title = t;
		this.author = a;
		this.year = y;
		switch(g){
			case 1:
				this.gender = 'Aventuras';
				break;
			case 2:
				this.gender = 'Terror';
				break;
			case 3:
				this.gender = 'Fantasia';
				break;
			default:
				break;
		}
	}


}

function showBooks(arrayB){
	for (elem of arrayB){
		console.log(elem.getData());
	}
}

const b1 =  new Book();
const b2 =  new Book();
const b3 =  new Book();

b1.setData();
b2.setData();
b3.setData();

let arrayB = [b1, b2, b3];

showBooks(arrayB);

function showBG(arrayB,g){
	console.log(`Libros de ${g}`);
	for (elem of arrayB){
		if(elem.gender == g){
			console.log(elem.getData());
		}
	}
}

showBG(arrayB,'Aventuras');
showBG(arrayB,'Terror');
showBG(arrayB,'Fantasia');

