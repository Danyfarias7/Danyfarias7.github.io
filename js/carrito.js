
var elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]

 


var btnCarrito = document.querySelector(".search-bar__carrito-container a")

btnCarrito.addEventListener('click', ()=>{


var nuevaCardCarrito = document.createElement('div')
nuevaCardCarrito.innerHTML = "algo"


    elemSectionCarrito.classList.toggle('section-carrito--visible')
    elemSectionCarrito.appendChild(nuevaCardCarrito)
  

})