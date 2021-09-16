let productos = [
  {
    id: 1,
    nombre: "Master Origins Colombia",
    descripcion: "AFRUTADO Y VIBRANTE",
    precio: 1000,
    img: "images/col.png"
  },
  {
    id: 2,
    nombre: "Nicaragua La Cumplida",
    descripcion: "AFRUTADO Y DULCE",
    precio: 2000,
    img: "images/nic.png"
  },
  {
    id: 3,
    nombre: "Vanilla Éclair",
    descripcion: "VANILLA",
    precio: 1100,
    img: "images/vanila.png"
  },
  {
    id: 4,
    nombre: "Master Origins India",
    descripcion: "INTENSO Y ESPECIADO",
    precio: 1500,
    img: "images/india.png"
  },
  {
    id: 5,
    nombre: "Master Origins Indonesia",
    descripcion: "SABROSO Y AMADERADO",
    precio: 1500,
    img: "images/ind.png"
  },
  {
      id: 6,
      nombre: "Buenos Aires Lungo",
      descripcion: "CEREALES Y CARAMELO",
      precio: 1499,
      img: "images/bl.png"
    },
    {
      id: 7,
      nombre: "Tokyo Vivalto Lungo",
      descripcion: "FLORAL Y TOSTADO",
      precio: 1200,
      img: "images/tokio.jpg"
    },
    {
      id: 8,
      nombre: "Vienna Linizio Lungo",
      descripcion: "MALTEADO, CEREALES",
      precio: 1350,
      img: "images/viena.png"
    },
    {
      id: 9,
      nombre: "Shanghai Lungo",
      descripcion: "CÍTRICOS Y AFRUTADO",
      precio: 1499,
      img: "images/shangai.png"
    },
    {
      id: 10,
      nombre: "Stockholm Fortissio Lungo",
      descripcion: "TOSTADO Y MALTEADO",
      precio: 1500,
      img: "images/stk.png"
    },
];

const productCard = document.getElementById("contenedor");

productos.forEach((producto) => {
  const div = document.createElement('div');
  div.className = "card";
  div.style = "width: 18rem";
  div.innerHTML = `
  <img src=${producto.img} class="card-img-top img" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Precio $${producto.precio}</p>
    <p class="card-text">${producto.descripcion}</p>
    <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary">Agregar al carrito</button>
  </div>
`;

  contenedor.appendChild(div);
});

//carrito

const carrito = []

function agregarAlCarrito(prodId){ //recibe el id de producto y lo busca en el array
  let producto = productos.find ((el) => el.id === prodId)
  carrito.push(producto)
  mostrarCarrito()
}    

//subtotal

let totalOrden = carrito.reduce(
  (acumulador, el) => (acumulador += el.precio), 0);

  const totalCarrito = document.getElementById('modalTotal')

  totalCarrito.innerText = "Precio total $" + totalOrden


//Carrito tabla

const tableBody = document.getElementById('modalCarritoContent')

const mostrarCarrito = () => {

  tableBody.innerHTML = ""

  carrito.forEach((prod) =>{

  const tr = document.createElement('tr')
  tr.className = "table-primary"
  tr.innerHTML = `
      <th scope="row"><img src=${prod.img} class="fotoCarrito" alt="..."></th>
      <td>${prod.nombre}</td>
      <td>$${prod.precio}</td>
      
  `;

  tableBody.appendChild(tr)
})
}

//carrito botones

const vaciarCarrito = document.getElementById("modalVaciarCarrito")



vaciarCarrito.addEventListener('click', function(){
  carrito.splice(0,carrito.length)
  mostrarCarrito()
})

const modalAbrirCarrito = document.getElementById('modalAbrirCarrito')
const modalCerrarCarrito = document.getElementById('modalCerrarCarrito')
const modalContainerCarrito = document.getElementById('modalCarrito') 


const abrirModalCarrito = () => {
    modalContainerCarrito.classList.toggle('modal-active')
}
modalAbrirCarrito.addEventListener('click', abrirModalCarrito)
modalCerrarCarrito.addEventListener('click', abrirModalCarrito)
modalContainerCarrito.addEventListener('click', abrirModalCarrito)
  
const modalCarrito = document.getElementById('modalCart')

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation()
})





//Registro


const registroAbrir = document.getElementById('modalAbrir')
const registroCerrar = document.getElementById('modalCerrar')
const modalContainer = document.getElementById('modalContainer') 


const abrirModal = () => {
    modalContainer.classList.toggle('modal-active')
}
registroAbrir.addEventListener('click', abrirModal)
registroCerrar.addEventListener('click', abrirModal)
modalContainer.addEventListener('click', abrirModal)

const modal = document.getElementById('modal')

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})

$('.animacion')
    .animate({
        "opacity": "1",
        "font-size": "80px"
    }, 1000)
    .animate({
        "font-size": "24px"
    }, 1000)
    .slideUp(300)
    .delay(1000)
    .slideDown(200)
    .delay(1000)
  
  
