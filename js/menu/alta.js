/*=======================================================================

Declaracion de Variables y fucniones globales 

===================================================================*/

//VARIABLES
let inputs;
let form;
let button;
let selectBrand;
let selectCategory;

//ARRAYS
let brandArray;
let categoryArray;
let camposValidos;
let textareaArray;


//=============================================================

// 1- ) CARTEL l HTML, se encarga de p resentar o oculatar el cartel

const setCustomValidityJS = function (mensaje, index) {
	let divs = document.querySelectorAll("form .pop-up-alert");

	divs[index].innerHTML = mensaje;
	divs[index].style.display = mensaje ? "" : "none";
};

//=============================================================
//=============================================================
// 2-) ACTIVAR o DESCATIVAR BOTON DE envio

//Cuando todos los campos sean true la variable valido sera true si 1 solo es false valido sera false

function algunCampoNoValido() {
	let valido =
		camposValidos[0] &&
		camposValidos[1] &&
		camposValidos[2] &&
		camposValidos[3];

	// Si todos son true valido sera false por el ! y el boton se activara
	return !valido;
}

//============================================================
//============================================================
// 3-) FUNCION VALIDAR

function validar(valor, validador, index) {
	// console.log(valor, index);

	if (!validador.test(valor)) {
		setCustomValidityJS("Este campo no es valido", index);
		camposValidos[index] = false;
		button.disabled = true; // button activado
		return null;
	}

	camposValidos[index] = true;
	button.disabled = algunCampoNoValido();

	setCustomValidityJS("", index);
	return valor;
}

//============================================================
//============================================================
// 4-) EVENTO INPUT

// Array de expresiones regulares que seran llamadas acorde  su indice
const regExpValidar = [
	/^.+$/, // regexp nombre
	/^[0-9]+$/, // regexp precio
	/^[0-9]+$/, //regexp  stock
	/^.+$/, //regexp  foto
];

//============================================================
//============================================================

// 6-)Inyeccion de  tabla con HANDLEBAR a traves de peticion  AJAX

function renderProds() {
	const xhr = new XMLHttpRequest();
	xhr.open("get", "plantillas/listado.hbs");
	xhr.addEventListener("load", () => {
		if (xhr.status == 200) {
			let plantillaHbs = xhr.response;
			// console.log( plantillaHbs);

			//                                 metodo               parametro plantilla 🥝
			var template = Handlebars.compile(plantillaHbs);
			// execute the compiled template and print the output to the console

			// Se le pasa un objeto que replaza arriba 🥝
			// let html = template({ productos: productos, validos: !algunCampoNoValido()});
			let html = template({productos, validos: !algunCampoNoValido()});

			document.getElementById("listado-productos").innerHTML = html;
		}
	});

	xhr.send();
}

function leerProductoIngresado() {
	return {
		marca: brandArray[0],
		categoria: categoryArray[0],
		nombre: inputs[0].value,
		precio: inputs[1].value,
		stock: inputs[2].value,
		detalles: textareaArray[0],
		foto: inputs[3].value,
		envio: inputs[4].checked,
	};
}

function limpiarFormulario() {
	//Borro los inputs  despues de enviarse
	inputs.forEach((input) => {
		input.value = "";
		if (input.checked == true) {
			inputs[4].checked = false;
		}
	});

	button.disabled = true;
	camposValidos = [false, false, false, false];
}

/*=======================================================================

Inicializaciones para el funconamiento del modulo 

======================================================================*/

function initAlta() {
	console.warn("InitAlta");

	// Variables y Arrays

	inputs = document.querySelectorAll(".reg-form input");
	form = document.querySelector(".reg-form-container");
	button = document.querySelector(" form .button");

	//=======================================selectValues
	// Obteniedo el value de los select almcenandolos en un array e enviadolos al objeto producto
	selectBrand = document.querySelectorAll("form select")[0];
	selectCategory = document.querySelectorAll("form select")[1];
	brandArray = [];
	categoryArray = [];

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
		categoryArray.push(
			selectCategory.options[selectCategory.selectedIndex].text
		);
	});

	//=======================================valueTextarea
	// Textarea value

	 textareaArray = [];

	var valueInVar = "";
	function textareaToVar() {
		valueInVar = document.querySelector(
			".reg-form__description textarea"
		).value;

		if (textareaArray.length == 1) {
			textareaArray.shift();
		}
		textareaArray.push(valueInVar);
	}

	//===================================

	button.disabled = true;
	camposValidos = [false, false, false, false];

	//============================================================
	/*La funcion validar sera llamada en el evento input y recibira el valor del input que estoy clickeando   */

	inputs.forEach((input, index) => {
		if (input.type != "checkbox") {
			input.addEventListener("input", () => {
				validar(input.value, regExpValidar[index], index);
				textareaToVar();
				renderProds()
			});
		}
	});

	//============================================================

	// 5-) EVENTO SUBMIT

	//se toman los values del formulario que se enviaran al array de productos cuando esten validados

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		guardarProducto();
	});

	obtenerProductos();
}



