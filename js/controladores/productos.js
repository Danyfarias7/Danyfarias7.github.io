


let productos = [];


// Obtener produtos 
async function obtenerProductos() {
	productos = await obtenerProductosService();
	renderProds();
}


// Guardar Productos 

async function guardarProducto() {
	let producto = leerProductoIngresado();
	limpiarFormulario();

	let productoGuardado = await guardarProductoService(producto);
	console.log(productoGuardado);

	productos.push(productoGuardado);

	renderProds();
}

// Actualizar Producto


// MIN 28

async function actualizarProducto(id){

	let producto = leerProductoIngresado();
	limpiarFormulario();

	let productoActualizado = await actualizarProductoService(id, producto);
	console.log(productoActualizado);

let index = productos.findIndex(producto => producto.id == productoActualizado.id )
productos.splice(index,1,productoActualizado)// Para eliminar o actualizar productos


	renderProds();



}

//Borrar producto

async function borrarProducto(id){

	let productoBorrado = await borrarProductoService(id)
	
	
	let index = productos.findIndex(producto => producto.id == productoBorrado.id )
	productos.splice(index,1)// Para eliminar o actualizar productos

	renderProds()
	

}