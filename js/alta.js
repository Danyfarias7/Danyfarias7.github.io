//=============================================================
//=============================================================
//=============================================================
//=============================================================
// Variables y Arrays


let productos = [];

const inputs = document.querySelectorAll(".reg-form input");

// Obteniedo el value de los select alamcenandolos en un array e enviadolos al objeto producto
const selectBrand = document.querySelectorAll("form select")[0];
const selectCategory = document.querySelectorAll("form select")[1];
let brandArray = [];
let categoryArray = [];

selectBrand.addEventListener("change", () => {
	if (brandArray.length == 1) {
		brandArray.shift();
	}
	brandArray.push(selectBrand.options[selectBrand.selectedIndex].text);
});

selectCategory.addEventListener("change", () => {
	if (categoryArray.length == 1) {
		categoryArray.shift();
	}
	categoryArray.push(selectCategory.options[selectCategory.selectedIndex].text);
});

const form = document.querySelector(".reg-form-container");
const button = document.querySelector(" form .button");
let span = document.querySelector('.submit-button span ')
span.classList.add('enable-button')




//=============================================================
//=============================================================
// ACTIVAR o DESCATIVAR BOTON DE envio

//Cuando todos los campos sean true la variable valido sera true si 1 solo es false valido sera false 



button.disabled = true 
let camposValidos = [false,false,false,false]



function algunCampoNoValido(){

     let valido =
          camposValidos[0] &&
          camposValidos[1] &&
          camposValidos[2] &&
          camposValidos[3] 
    

     // Si todos son true valido sera false por el ! y el boton se activara
          return  !valido
          
     

}






//=============================================================
//=============================================================

// 1- ) CARTEL l HTML, se encarga de p resentar o oculatar el cartel


const setCustomValidityJS = function (mensaje, index) {
	let divs = document.querySelectorAll("form .pop-up-alert");

	divs[index].innerHTML = mensaje;
	divs[index].style.display = mensaje ? "" : "none";
};



//============================================================
//============================================================
// 2-) FUNCION VALIDAR

function validar(valor, validador, index){

     console.log(valor, index);
     
     if(!validador.test(valor)){
     
          setCustomValidityJS("Este campo no es valido", index);
          camposValidos[index] = false
          button.disabled = true  // button activado
          return null
          
          
     }
          
          camposValidos[index] = true
          button.disabled = algunCampoNoValido()
        
         
     
          
          setCustomValidityJS("", index);
          return valor
     
}



//============================================================
//============================================================
// 3-) EVENTO INPUT

// Array de expresiones regulares que seran llamadas acorde  su indice
const regExpValidar = [

     /^.+$/, // regexp nombre
     /^[0-9]+$/, // regexp precio
     /^[0-9]+$/, //regexp  stock
     /^.+$/, //regexp  foto
   
]

/*La funcion validar sera llamada en el evento input y recibira el valor del input que estoy clickeando   */


inputs.forEach((input, index)=>{

     input.addEventListener('input', ()=>{
     
     validar(input.value, regExpValidar[index], index )
     
     })

})

 

//============================================================
//============================================================
// 4-) EVENTO SUBMIT  

//se toman los values del formulario que se enviaran al array de productos cuando esten validados

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let producto = {
		marca: brandArray[0],
		categoria: categoryArray[0],
		nombre: inputs[0].value,
		precio: inputs[1].value,
		stock: inputs[2].value,
		foto: inputs[3].value,
		detalles: inputs[4].value,
		envio: inputs[5].checked,
	};
          
          productos.push(producto)
	//Borro el formulario despues de enviarse
	console.log(producto);
	inputs.forEach(input => input.value = '')
	brandArray[0] = ''
	categoryArray[0] = ""
	inputs[4].checked = false
	
	
	// Se resetea el array de campos validos y el boton se vuelve a descativar 
	
	button.disabled = true 
     camposValidos = [false,false,false,false]
     
     renderProdsTemplateStrings()
	
});


//============================================================
//============================================================


     // 5-) Creacion de tabla  de productos TABLAAA

     function renderProdsTemplateStrings(){
          let html = ' '
          
          html +=   ` <table> `
          html +=   ` 
               <tr class="table-heading">
                            <th>Brand </th> 
               		   <th>Category </th> 
               		   <th> Name </th> 
               		   <th>Price </th> 
               		   <th>Stock </th> 
               		   <th>Photo </th> 
               		   <th>Details </th> 
               		   <th>Shipping </th>
               </tr>
          
           `
          const listado = document.getElementById('listado-productos')
          for(let i = 0 ; i < productos.length;  i++){
          
               html+= ` 
                
                     <tr>
                                  <th>${productos[i].marca} </th> 
                                  <th>${productos[i].categoria}</th> 
                                  <th>${productos[i].nombre}</th> 
                                  <th>${productos[i].precio}</th> 
                                  <th>${productos[i].stock}</th> 
                                  <th>${productos[i].foto }</th> 
                                  <th>${productos[i].detalles}</th> 
                                  <th>${productos[i].envio }</th>
                     </tr>
               
               
               `
          }
          
              
          html += `</table>`
     
          listado.innerHTML = html 
      
     
     }