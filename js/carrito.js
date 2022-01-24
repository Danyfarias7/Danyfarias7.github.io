

// Abrir y cerrar el modal
var elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]

 


var btnCarrito = document.querySelector(".search-bar__carrito-container a")

btnCarrito.addEventListener('click', ()=>{



    elemSectionCarrito.classList.toggle('section-carrito--visible')

  

})



// Añadir contenido al modal

// var modalPLus = document.getElementsByClassName('plus-and-minus__plus')[0]


// modalPLus.addEventListener('click', ()=>{

//      console.log('hola');

// })