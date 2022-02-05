console.log(document.querySelector("title").textContent);

// Minuto 50
/*=================================================== */
//AJAX
/*=================================================== */
function start() {
	function ajax(url, metodo) {
		// argumentos con valores por default
		let xhr = new XMLHttpRequest();
		xhr.open(metodo || "get", url);
		xhr.send();

		return xhr;
	}

	function getNombreArchivo(id) {
		return "vistas/" + id + ".html"; // short circuit operator
	}

	function marcarLink(id) {
		let links = document.querySelectorAll(".main-header nav a");
		links.forEach((link) => {
			if (link.id == id) link.classList.add("active");
			else link.classList.remove("active");
		});
	}

	function initJS(id) {
		if (id == "alta") {
			initAlta();
		} else if (id == "cards") {
			initCards();
		} else if (id == "carrito") {
			initCarrito();
		} else if (id == "contacto") {
			initContacto();
		} else if (id == "nosotros") {
			initNosotros();
		}
	}

	function cargarPlantilla(id) {
		let archivo = getNombreArchivo(id);
		let xhr = ajax(archivo);
		xhr.addEventListener("load", () => {
			if (xhr.status == 200) {
				let plantilla = xhr.response;

				// Cargar del codigo de vista HTML de la plantilla
				let main = document.querySelector("main");
				main.innerHTML = plantilla;

				// Carga del codiog script (JS) de la plantilla

				initJS(id);
			}
		});
	}

	function getPlantillas() {
		/*=================================================== */
		/* Carga inicial de la vista determinada por la url visitada */
		/*=================================================== */
		let id = location.hash.slice(1) || "inicio";
		marcarLink(id);
		cargarPlantilla(id);

		/*=================================================== */
		/* Carga de cada uno de los contenidos según la navegación local */

		/*=================================================== */
		let links = document.querySelectorAll("header nav a");
		// console.log(links)

		links.forEach((link) => {
			link.addEventListener("click", (e) => {
				e.preventDefault();

				let id = link.id;
				console.log(id);
				location.hash = id;
			});
		});

		window.addEventListener("hashchange", () => {
			let id = location.hash.slice(1) || "inicio";
			marcarLink(id);

			cargarPlantilla(id);
		});
	}

	getPlantillas();
}

start();
