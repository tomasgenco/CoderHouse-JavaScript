let total = document.querySelector('#total')
let carrito = []
let containerProductosCarrito = document.querySelector('#body-pago')
let containerCarrito = document.querySelector('#carrito-pago')
let contadorCarrito = document.querySelector('#contadorCarrito-pago')

// agarrando carrito del LS
let carritoLs = JSON.parse(localStorage.getItem('carrito'))

const itemCarrito =  () => {
    carritoLs.forEach(item => {
        carrito.push(item)
    })
    
}


itemCarrito()






// Renderizando productos de carrito para finalizar la compra
const renderCarrito = () => {

    containerProductosCarrito.innerHTML = " "
    
    
    carrito.forEach((item) => {
        containerProductosCarrito.innerHTML += `
        <div id='containerCarrito'>
        <div>
        <h5 id="nombreProducto"> ${item.nombre}   </h5>
        </div>
        
        <div>
        
        <p> Cantidad: ${item.cantidad} </p>
        
        </div>
    
        <div>
        
        <span>$${item.precio}</span>
        <button id="eliminarProductoCarrito" onclick="eliminarProductoDelCarrito(${item.id})"><i class="fa-solid fa-trash"></i></button>

        
        </div>
        </div>
        
        
        
        `
        renderizarTotal()  
        
        
        
    })
    
}


function eliminarProductoDelCarrito(itemId){

    let item = carrito.find(producto => producto.id === itemId)

  

  item.cantidad--

  if(item.cantidad === 0){
    let indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
  }

  console.log(carrito)
  
  
  
  localStorage.setItem('carrito', JSON.stringify(carrito))
  
  renderCarrito()
  renderizarTotal()
  mostrarMensajeEliminar()
  renderizarCantidad()
  
}

const renderizarTotal = () => {
    let resultado = 0
    
    carrito.forEach(item => {
        resultado += item.cantidad * item.precio
    })
    
    total.innerText = " "
    
    total.innerText +=  `Total: $${resultado}`
    
    
}

const renderizarCantidad = () => {
    contadorCarrito.innerText = carrito.length

}


const mostrarMensajeEliminar = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu producto se elimino correctamente!',
      showConfirmButton: false,
      timer: 500
    })
  
  }

renderCarrito()
renderizarCantidad()


























