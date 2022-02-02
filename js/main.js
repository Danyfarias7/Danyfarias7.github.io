
/*

1. Se buscan la plantilla navbar con Ajax  ✅

       - Create an XMLHttpRequest object
       - Define a callback function
       - Open the XMLHttpRequest object
       - Send a Request to a server

2. Se inyecta el contenido a cada elemnto del nav ✅

3. Conectar las navegaciones con el historial del navegador y los botones atras y delante  ✅

4. Carga inicial de la vista determinada por la url visitada  ✅

5. Cuando se llega a la primera navegacion dando atras atras nos da error
    -Simplificacion de codigo  ✅

6. Marcar la navegacion, cuando demos click los links queden con otro color
    -  funcion dentro un  un foreach agregar las clases de boostrap siempre y cuando el id de la url sea el mismo que el del elemento a clickeado, en caso que no borrarla, esta funcion se pasa en todos los lugares donde se cambia la url 
 */
 
 
 
 
    console.log(document.querySelector('title').textContent)


    /*=================================================== */
    //AJAX
    /*=================================================== */
function start(){

    function ajax(url, metodo) {    // argumentos con valores por default
        let xhr = new XMLHttpRequest
        xhr.open(metodo || 'get', url)
        xhr.send()
    
        return xhr
    }
    
    
    function getNombreArchivo(id) {
        return 'vistas/' + id  + '.html'      // short circuit operator
    }
    
    
    
    function marcarLink(id) {
        let links = document.querySelectorAll('.main-header nav a')
        links.forEach( link => {
            if(link.id == id) link.classList.add('active')
            else link.classList.remove('active')
        })
    }
    
        /*=================================================== */
    /* Carga de la barra de navegación */
        /*=================================================== */
    let header = document.querySelector('header')
    
    let archivo = getNombreArchivo('navbar')
    let xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            header.innerHTML = xhr.response
    
            getPlantillas()
        }
    })
    
    
  
    
   function  initJS(id){
    
    if(id == 'alta'){
 
      initAlta()

    }else if(id =='cards'){
    
      initCards()
    }else if(id == 'carrito'){
    
      initCarrito()
    
    }else if(id =='contacto'){
    
      initContacto()
  
    
    }else if(id == 'nosotros'){
    
    initNosotros()
    
    }
  }
   
    
    
    function cargarPlantilla(id){
 
      let archivo = getNombreArchivo(id)
      let xhr = ajax(archivo)
      xhr.addEventListener('load', () => {
          if (xhr.status == 200) {
              let plantilla = xhr.response
              
              
              // Cargar del codigo de vista HTML de la plantilla 
              let main = document.querySelector('main')
              main.innerHTML = plantilla
              
              // Carga del codiog script (JS) de la plantilla 
              
              initJS(id)
              
          
              
          }
      })
    }
    
    function getPlantillas() {
    
    
    /*=================================================== */
    /* Carga inicial de la vista determinada por la url visitada */
    /*=================================================== */
        let id = location.hash.slice(1)  || 'modal-carrito' || "inicio"
        marcarLink(id)
        cargarPlantilla(id)
  
         /*=================================================== */
        /* Carga de cada uno de los contenidos según la navegación local */
  
         /*=================================================== */
        let links = document.querySelectorAll('header nav a')
        // console.log(links)
    
        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault()
    
                let id = link.id
                console.log(id);
                location.hash = id
            })
        })
    
        window.addEventListener('hashchange', () => {
         
            let id = location.hash.slice(1) || 'modal-carrito' || "inicio"
            marcarLink(id)
    
            cargarPlantilla(id)
     
            
            
        })
    
    }
    
    getPlantillas()
    
}

start()