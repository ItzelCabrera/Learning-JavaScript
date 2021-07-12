/*Acceder a los elementos

    document.getElementById('<id>') --a través del id
    document|element.querySelector('<selector CSS>') --accede al primer elemento que coincida con el selector CSS
    document|element.querySelectorAll('<selector CSS>') --accede a todos los elementos que coincidan con el selector CSS, devuelve un nodelist
*/

const title = document.getElementById('title'); //guardamos la referencia de acceso del elemento
title.textContent = 'DOM: accediendo a los nodos'; //Modifica el contenido de forma dinámica 

const p1 = document.querySelector('.paragraph:nth-child(2)');
p1.textContent = 'PARRAFO 1 CAMBIADO CON ÉXITO';

const p = document.querySelector('.paragraph');
const sp = p.querySelector('span');
//const sp = document.querySelector('.paragraph').querySelector('span');

const paragraphs = document.querySelectorAll('.paragraph');
console.log(paragraphs);
paragraphs[0].style.color = 'red'; 
const paragraphsSpread = [...document.querySelectorAll('.paragraph')]; //se trata como un array
paragraphsSpread.map(p=>p.style.color='green');
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph')); //se trata como un array
paragraphsArray.map(p=>p.style.color='yellow');