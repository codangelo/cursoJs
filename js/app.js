// variables

let baseDeDatos = []
const carrito = []
const contenedorProductos = document.getElementById('contenedorProductos')
const contenedorCarrito = document.getElementById('contenedorCarrito')
const notifCarrito = document.getElementById('notifCarrito')
const total = document.getElementById('total')


//Llamado a Json y creación de arts.

const llamarProductos = async () => {

    const resp = await fetch('./stock.json')
    const data = await resp.json()

    baseDeDatos = data
    publicarProductos(baseDeDatos)
}

llamarProductos()

function publicarProductos(prod) { 

    contenedorProductos.innerHTML = ''

    prod.forEach( (producto) => {
        const div = document.createElement('div')
        div.classList.add('card', 'col-sm-4')
        div.innerHTML = `
                    <div class='card-body'>
                    <img class='img'src=${producto.img} alt="">
                    <h2 class='card-title'>${producto.nombre}</h2>
                    <h4 class='card-text'>${producto.descripcion}</h4>
                    <h2 class="card-text">Precio: $${producto.precio}</h2>
                    <button onclick=agregarAlCarrito(${producto.id}) class='btn btn-primary btnAgregarCarrito'>Agregar al carrito</button>
                    </div>
        `
        
        contenedorProductos.appendChild(div)
    } )
}

// Creación de arts en carrito y actualizaciones

function agregarAlCarrito(prodId) {

    let prodCarrito = carrito.find(el => el.id == prodId)

    if (prodCarrito) {
        prodCarrito.cantidad += 1
    } else {
        let {id, nombre, precio} = baseDeDatos.find( el => el.id == prodId )
        carrito.push({id: id, nombre: nombre, precio: precio, cantidad: 1})
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))

    actualizarCarrito()
}

function actualizarCarrito() {
    contenedorCarrito.innerHTML=''

    carrito.forEach( (producto) => {

        const div = document.createElement('div')
        div.classList.add('prodCarrito')
        div.innerHTML = `
                        <h3>${producto.nombre}</h3>
                        <p>Precio: $${producto.precio * producto.cantidad}</p>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <button onclick=borrarProducto(${producto.id}) class="btnCarrito btn btn-outline-danger">Eliminar</button>
                    `

        contenedorCarrito.appendChild(div)
    })

    notifCarrito.innerText = carrito.length
    total.innerText = carrito.reduce( (e, el) => e + (el.precio * el.cantidad), 0 )
}

function borrarTodo(){
    carrito.length = 0;
    localStorage.clear;
    actualizarCarrito();
}

function borrarProducto(prodId) {
    let productoBorrado = carrito.find( el => el.id == prodId )

    productoBorrado.cantidad--

    if (productoBorrado.cantidad == 0) {
        let indice = carrito.indexOf(productoBorrado)
        carrito.splice(indice, 1)
    }

    actualizarCarrito()
}

// Pago con MP

const pagar = async () => {

    const pagoMP = carrito.map( (producto) => {
        return {
            title: producto.nombre,
            description: "",
            picture_url: "",
            category_id: producto.id,
            quantity: producto.cantidad,
            currency_id: "ARS",
            unit_price: producto.precio
        }
    })

    const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer TEST-3522155382277355-100502-9c34279a3333f5c7cf419e9e7aaff36d-78467603'
                    },
                    body: JSON.stringify({
                        items: pagoMP,    
                    })
                })
    
    const data = await resp.json()

    window.open(data.init_point,'_blank')

}

// controles carrito

  const modalAbrirCarrito = document.getElementById("modalAbrirCarrito");
  const modalCerrarCarrito = document.getElementById("modalCerrarCarrito");
  const modalContainerCarrito = document.getElementById("modalCarrito");

  const abrirModalCarrito = () => {
    modalContainerCarrito.classList.toggle("modal-active");
  };
  modalAbrirCarrito.addEventListener("click", abrirModalCarrito);
  modalCerrarCarrito.addEventListener("click", abrirModalCarrito);
  modalContainerCarrito.addEventListener("click", abrirModalCarrito);

  const modalCarrito = document.getElementById("modalCart");

  modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
  });