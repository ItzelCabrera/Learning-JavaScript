const form = document.getElementById('form');
const input = document.getElementById('input');
const btn = document.getElementById('button')
const gallery = document.getElementById('gallery');
const link = document.getElementById('link');

input.addEventListener('keyup',(e)=>{
    console.log(event);
    console.log(e.key);
    console.log(e.target.attributes[0].nodeValue) //target:pto donde se origina el evt
});

/*addEventListener('click',(e)=>{
    console.log(e);
}); //el evento global de js es window*/

/*btn.addEventListener('mousedown',(e)=>{
    console.log(e);
    e.target.hidden = true;
});*/

//poner a la escucha al gallery-container y ver en que hijo se ha hecho click
gallery.addEventListener('click',(e)=>{
    console.log(e.target.textContent);
    e.target.classList.add('red');
});

form.addEventListener('submit',(e)=>{
    e.preventDefault(); //CAMBIA EL COMPORTAMIENTO PREDETERMINADO
    console.log('El formulario se ha enviado');
});

//Forzar a que un evento determinado suceda
    //form.submit();

    btn.addEventListener('click',()=>{
        link.click();
    });