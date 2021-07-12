/*
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = textContent
Escribir HTML en un elemento: element.innerHTML = codigoHTML --cuando necesitemos insertar etiquetas

Añadir un elemento al DOM: parent.appendChild(element);

Fragmentos de código: document.createDocumentFragment();
 */

const days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const daysSelect = document.getElementById('daysSelect');

/*const itemList = document.createElement('li');
itemList.textContent = 'Lunes';
console.log(itemList);
daysList.appendChild(itemList);*/

const fragmentList = document.createDocumentFragment();
const fragmentSelect = document.createDocumentFragment();
for(const day of days){
    //crean y modifican elementos
    const itemList = document.createElement('li');
    const option = document.createElement('option');
    itemList.textContent = day;
    option.setAttribute('value',day);
    option.textContent = day;
    //se insertan los elementos creados-editados al fragmento
    fragmentList.appendChild(itemList);
    fragmentSelect.appendChild(option);
}
//se inserta el fragmento al DOM
daysList.appendChild(fragmentList);
daysSelect.appendChild(fragmentSelect);

