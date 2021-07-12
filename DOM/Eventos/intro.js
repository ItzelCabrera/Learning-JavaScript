const button = document.getElementById('button');
const box = document.getElementById('box');
const key = document.getElementById('input');

//button.addEventListener('evt',triggger)--el boton se pone a la escucha

button.addEventListener('click',()=>{ 
    console.log('click');
});

button.addEventListener('dblclick',()=>{
    console.log('double click');
});

//Cambiando los estilos de la hoja (forma no apropiada)
    /*
    box.addEventListener('mouseenter',()=>{
        box.style.background='green';
    });
    box.addEventListener('mouseleave',()=>{
        box.style.background='rebeccapurple';
    });*/

//Cambiando los estilos de la hoja (forma apropiada)
    box.addEventListener('mouseenter',()=>{
        box.classList.replace('rebec','green');
    });

    box.addEventListener('mouseleave',()=>{
        box.classList.replace('green','rebec');
    });

box.addEventListener('mousedown',()=>{
    console.log('Has pulsado el btn izquierdo del mouse');
});

box.addEventListener('mouseup',()=>{
    console.log('Has dejado de pulsar el btn izquierdo del mouse');
});

box.addEventListener('mousemove',()=>{
    console.log('estas moviendo el mouse');
});

key.addEventListener('keypress',()=>{
    console.log('Presionaste una tecla');
});

key.addEventListener('keydown',()=>{
    console.log('Pulsando una tecla');
});

key.addEventListener('keyup',()=>{
    console.log('Soltando una tecla');
});