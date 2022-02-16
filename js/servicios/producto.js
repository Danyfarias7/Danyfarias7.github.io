// MINUTO 1:10 MIN

const URL_PRODUCTOS =
	"https://61d6f1eb35f71e0017c2e905.mockapi.io/api/v1/productos/";
	

     async function obtenerProductosService() {
          let productos = await get(URL_PRODUCTOS)
          //console.log(productos)
          return productos
      }
      
      async function guardarProductoService(producto) {
          let productoGuardado = await post(URL_PRODUCTOS, producto)
          //console.log(productoGuardado)
          return productoGuardado
      }
      
      async function actualizarProductoService(id,producto) {
          let productoActualizado = await put(URL_PRODUCTOS, id, producto)
          //console.log(productoActualizado)
          return productoActualizado
      }
      
      async function borrarProductoService(id) {
          let productoBorrado = await del(URL_PRODUCTOS, id)
          //console.log(productoBorrado)
          return productoBorrado
      }
      
 