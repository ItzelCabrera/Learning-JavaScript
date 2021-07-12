/* 
Padre
    parentNode: devuelve el nodo padre  (para cuando el padre no es un elemento)
    parentElement: devuelve el elemento padre

    Obs: los nodos de tipo document o documentFragment nunva van a tener un elemento padre, 
    parentNode devolverá null.
Hermanos
    childNodes
    children
    firstChild
    firstElementChild
    lastChild
    lastElementChild
    hasChildNodes()
Hermanos
    nextSibling
    nextElementSibling
Cercano
    closest(selector)
*/
const parent = document.getElementById('parent');

console.log(parent.parentNode)
console.log(parent.parentElement.parentElement) //ir subiendo niveles

console.log(parent.childNodes   );
console.log(parent.children); //devuelve solo elementos
console.log(parent.children[2]);
console.log(parent.firstChild);
console.log(parent.firstElementChild);//devuelve el primer elemento hijo
console.log(parent.lastChild);
console.log(parent.lastElementChild);
console.log(parent.hasChildNodes());
console.log(parent.lastElementChild.hasChildNodes());
console.log(parent.firstElementChild.nextSibling);
console.log(parent.firstElementChild.nextElementSibling);
console.log(parent.parentElement.previousSibling);
console.log(parent.parentElement.previousElementSibling);
console.log(parent.closest('li'))