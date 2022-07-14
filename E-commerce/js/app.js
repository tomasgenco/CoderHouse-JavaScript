// querySelector
let renderProductos = document.querySelector('#contenedorProductos')


let btnVaciar = document.querySelector('#btn-vaciar')

let contadorCarrito = document.querySelector('#contadorCarrito')

let renderTotal = document.querySelector('#total')





// arrays

let carrito = []




renderProductos.innerHTML = ``

BBDD.forEach((producto) => {
  renderProductos.innerHTML +=  `
  
  <div class="card" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${producto.nombre}</h5>
  <p class="card-text">Talle: ${producto.talle}</p>
  <p class="card-text">Precio por unidad: $${producto.precio}</p>
  
  <a href="#" id='btnAgregarCarrito' onclick='agregarAlCarrito(${producto.id})' class="btn btn-primary">Agregar al carrito</a>
  </div>
  </div>
  
  `
})



const hide = () => {
  
  let y = document.querySelector('#noProductos')
  
  y.innerHTML = `
  <h5 id="noProductos" hidden >No hay ningun producto!</h5>
  `
}
const noHide = () => {
  
  let y = document.querySelector('#noProductos')
  
  y.innerHTML = `
  <h5 id="noProductos" >No hay ningun producto!</h5>
  `
}

function agregarAlCarrito(itemId){
    
  let itemEnCarrito = carrito.find(producto => producto.id === itemId)
  
  
  
  hide()

  
  if(itemEnCarrito){

    itemEnCarrito.cantidad++


  } else {
    const {id,nombre,precio} = BBDD.find(producto => producto.id === itemId)

    let itemAlCarrito = {

      id,
      nombre,
      precio,
      cantidad: 0

    }
    
    if(itemAlCarrito){
      itemAlCarrito.cantidad++
    }

    carrito.push(itemAlCarrito)

    localStorage.setItem('carrito', JSON.stringify(carrito))

  

    
  }
  
    
    
  
  Swal.fire({
    position: 'bottom-right',
    icon: 'success',
    title: 'Su producto se guardo correctamente!' ,
    showConfirmButton: false,
    timer: 500,
  })
  
  renderizarCarrito()
  renderizarCantidad()
  renderizarTotal()
  
}



const vaciarCarrito = () => {
  carrito = []
  localStorage.setItem('carrito', JSON.stringify(carrito))


  renderizarCarrito()
  renderizarTotal()
  renderizarCantidad()
}

btnVaciar.addEventListener('click', () => {

  Swal.fire({
    title: 'Está seguro?',
    text: "Está a punto de vaciar el carrito",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, vaciar',
    cancelButtonText: 'No, cancelar'
  }).then( (result) => {
        if (result.isConfirmed) {
            vaciarCarrito()
        }
  } )
})



function eliminarProductoDelCarrito(itemId){

    let item = carrito.find(producto => producto.id === itemId)

  

  item.cantidad--

  if(item.cantidad === 0){
    let indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
  }

  console.log(carrito)
  
  
  
  localStorage.setItem('carrito', JSON.stringify(carrito))
  
  renderizarCarrito()
  renderizarTotal()
  renderizarCantidad()

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tu producto se elimino correctamente!',
    showConfirmButton: false,
    timer: 500
  })
  
}







const renderizarCarrito = () => {
  
  let renderCarrito = document.querySelector('#contenedorProductosCarrito')

  
  
  
  renderCarrito.innerHTML = " "


    carrito.forEach((producto) => {

      renderCarrito.innerHTML += `
                    <div class='productoCarrito'>
                      <p id="producto-nombre" > <b> Nombre: </b> ${producto.nombre}</p>
                      <p id="producto-cantidad" > <b> Cantidad: </b> ${producto.cantidad}</p>
                      <p id="producto-precio" > <b> Precio por unidad:  </b> $ ${producto.precio}</p>
                      <button id="eliminarProductoCarrito" onclick="eliminarProductoDelCarrito(${producto.id})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                      `
                    })


 



}




const renderizarCantidad = () => {

  contadorCarrito.innerHTML = `
                      <p> ${carrito.length} </p>
                                  `

  
}



const renderizarTotal = () => {
  let total = 0

  carrito.forEach((producto) => {

    total += producto.precio * producto.cantidad;

    renderTotal.innerText = `Total: $ ${total}`

    
  })

  if(carrito.length === 0){

    renderTotal.innerText = 'Total: $0'
   noHide()

  }





}

renderizarTotal()
renderizarCantidad()
renderizarCarrito()

// utilizando fetch

let url = `https://pokeapi.co/api/v2/pokemon/1/`

fetch(url)
.then(response => response.json() )
.then(data => {

  let container = document.querySelector('#containerPokemons')
  container.innerHTML =`
  
  <div class="card" style="width: 18rem;">
  <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${data.name}</h5>
  <p class="card-text">Orden: ${data.order}</p>
  
  <a href="#" id='btnAgregarCarrito' onclick='agregarAlCarrito(${data.id})' class="btn btn-primary">Agregar al carrito</a>
  </div>
  </div>
  
  `

  console.log(data)
})
.catch(err => console.log(err))





