/*Recordando que en html, las etiquetas tienen atributos y clases...*/
const title = document.getElementById('title');
const name = document.getElementById('name');

console.log(title);
console.log(name);

//Accediendo a los atributos
    console.log(name.getAttribute('type')); //obtiene el valor del atributo type
    name.setAttribute('type','text');
    //name.setAttribute('type','radio');
    //name.setAttribute('type','number');
    title.id = 'titulo'; //configurando el id del elemento
    console.log(title.innerHTML); //devuelve con todo y etiquetas
    console.log(title.textContent); //devuelve el texto plano
    console.log(name.value);
    console.log(name.value.length);

//Accediendo a las clases
    /*
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.toogle('class'[,force]) --si tiene la clase, la quita; si no la tiene, la pone
    element.classList.contains('class')
    element.classList.replace('oldClass','newClass')
    */
   title.classList.add('main-title','other-title');
   title.classList.remove('main-title');

   if(title.classList.contains('title')){
       console.log("Tiene la clase title");
   }else{
       console.log('No tiene la clase');
   }

   title.classList.replace('other-title','new-title');