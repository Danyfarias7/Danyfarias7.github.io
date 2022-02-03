var links = document.querySelectorAll("header nav li a ");
var body = document.querySelector("body");
var clase = "";

function background() {


	const idArray = [];

	links.forEach((link, index) => {
		link.addEventListener("click", (e) => {
			idArray.push(link.id);

			var id = idArray[0];
			console.log(id);

			clase = body.classList;

			// Se borra la primera clase del body
			body.classList.remove(body.classList[0]);
			// Se añade la clase correspondiente
			body.classList.toggle(`body-${id}`);

			if (idArray.length == 1) {
				idArray.shift();
			}
		});
	});
}





// Se toma el id del url y cuando se carga la pagina se le añade ese id como clase que su vez es una clase de css

function backgroundLoad() {

     
     
     	window.addEventListener("load", () => {
     	
               links.forEach((link) => {
                    links.forEach((link) => {
                    
                         let id = location.hash.slice(1);
     
                    
                         // Se borra la primera clase del body
                         body.classList.remove(body.classList[0]);
                         // Se añade la clase correspondiente
                         body.classList.toggle(`body-${id}`);
     
                         
                    });
               });
               
               
          });
     
     


	
}


     function backgroundHashChange(){
     
     
          window.addEventListener('hashchange', ()=>{

               links.forEach((link) => {
                    links.forEach((link) => {
                    
                         let id = location.hash.slice(1);
          
                    
                         // Se borra la primera clase del body
                         body.classList.remove(body.classList[0]);
                         // Se añade la clase correspondiente
                         body.classList.toggle(`body-${id}`);
          
                         
                    });
               });
          
          
          })
     
     }
     

     background();
     backgroundLoad() 
     backgroundHashChange()

