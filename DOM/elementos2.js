/* 
SOPORTE TOTAL
    insertBefore(newElement,elementoReferencia)
    parent.insertAdjacentElement(pos,element)
    parent.insertAdjacentHTML(pos,HTML)
    parent.insertAdjacentText(pos,text)

        positions:
            beforebegin -antes de que empiece (hermano anterior)
            afterbegin -despues de que empiece (primer hijo)
            beforeend -antes de que acabe (utimo hijo)
            afterend(hermano siguiente)

    parent.replaceChild(newChild,oldChild)
    
NUEVOS
    parent.before() --hermano anterior
    parent.prepend() --primer hijo
    parent.append() --ultimo hijo
    parent.after() --hermano siguiente

    nodo.replaceWith(newElement)

CLONAR Y ELIMINAR ELEMENTOS
    element.clone(true|false)
        true: clona el elemento con hijos
        false: clona el elemento sin hijos
    element.remove(): elimina el nodo del DOM
    element.removeChild(child): elimina el nodo hijo del DOM
*/

const list = document.getElementById('list');
const li = document.createElement('li');
li.textContent = 'I am a new element';
//list.appendChild(li)

//list.insertBefore(li,list.children[4])--insertando un elemento creado antes de un elemento de referencia

//list.insertAdjacentElement('beforebegin',li);--insertando el elemento como hermano anterior
//ist.insertAdjacentElement('afterbegin',li);--insertando elemento como primer hijo
//list.insertAdjacentElement('beforeend',li); --insertando elemento como ultimo hijo
//list.insertAdjacentElement('afterend',li); //--insertando elemento como   hermano siguiente

//list.insertAdjacentHTML('beforeend','<li>I am a new element :)</li>');
//list.children[2].insertAdjacentText('afterbegin','<li>I am a new element :)</li>');
//list.replaceChild(li,list.children[4]);

//list.before(li); --inserta como hermano anterior
//list.prepend(li); --inserta como primer hijo
//list.append(li); --inserta como ultimo hijo
//list.after(li); --inserta como hermano siguiente
//list.children[2].after(li)

//list.children[2].replaceWith(li);

//list.after(list.cloneNode(true))

list.removeChild(list.children[0]);