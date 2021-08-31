let productos = [
  {
    id: 1,
    nombre: "Master Origins Colombia",
    descripcion: "AFRUTADO Y VIBRANTE",
    precio: 1000,
    img: "../images/col.png"
  },
  {
    id: 2,
    nombre: "Nicaragua La Cumplida",
    descripcion: "AFRUTADO Y DULCE",
    precio: 2000,
    img: "../images/nic.png"
  },
  {
    id: 3,
    nombre: "Vanilla Éclair",
    descripcion: "VANILLA",
    precio: 1100,
    img: "../images/vanila.png"
  },
  {
    id: 4,
    nombre: "Master Origins India",
    descripcion: "INTENSO Y ESPECIADO",
    precio: 1500,
    img: "../images/india.png"
  },
  {
    id: 5,
    nombre: "Master Origins Indonesia",
    descripcion: "SABROSO Y AMADERADO",
    precio: 1500,
    img: "../images/ind.png"
  },
  {
      id: 6,
      nombre: "Buenos Aires Lungo",
      descripcion: "CEREALES Y CARAMELO",
      precio: 1499,
      img: "../images/bl.png"
    },
    {
      id: 7,
      nombre: "Tokyo Vivalto Lungo",
      descripcion: "FLORAL Y TOSTADO",
      precio: 1200,
      img: "../images/tokio.jpg"
    },
    {
      id: 8,
      nombre: "Vienna Linizio Lungo",
      descripcion: "MALTEADO, CEREALES",
      precio: 1350,
      img: "../images/viena.png"
    },
    {
      id: 9,
      nombre: "Shanghai Lungo",
      descripcion: "CÍTRICOS Y AFRUTADO",
      precio: 1499,
      img: "../images/shangai.png"
    },
    {
      id: 10,
      nombre: "Stockholm Fortissio Lungo",
      descripcion: "TOSTADO Y MALTEADO",
      precio: 1500,
      img: "../images/stk.png"
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

const carrito = []

function agregarAlCarrito(prodId){ //recibe el id de producto y lo busca en el array
  let producto = productos.find ((el) => el.id === prodId)
  carrito.push(producto)
  mostrarCarrito()
}    

let totalOrden = carrito.reduce(
  (acumulador, el) => (acumulador += el.precio), 0);
console.log(totalOrden);

const tableBody = document.getElementById('tabla-carrito')

const mostrarCarrito = () => {

  tableBody.innerHTML = ""

  carrito.forEach((prod) =>{

  const tr = document.createElement('tr')
  tr.className = "table-primary"
  tr.innerHTML = `
      <th scope="row"><img src=${prod.img} class="fotoCarrito" alt="..."></th>
      <td>${prod.nombre}</td>
      <td>${prod.precio}</td>
      
  `;

  tableBody.appendChild(tr)
})
}

const verCarrito = document.getElementById("verCarrito")
const tablaCarrito = document.getElementById("tablaCarrito")
const cerrarCarrito = document.getElementById("cerrarCarrito")
const vaciarCarrito = document.getElementById("vaciarCarrito")


verCarrito.addEventListener('click',()=>{
  tablaCarrito.classList.remove("ocultar")
  cerrarCarrito.classList.remove("ocultar")
  vaciarCarrito.classList.remove("ocultar")

})


vaciarCarrito.addEventListener('click', function(){
  tableBody.innerHTML = ""
})

cerrarCarrito.addEventListener('click',()=>{
  tablaCarrito.classList.add("ocultar")
  cerrarCarrito.classList.add("ocultar")
  vaciarCarrito.classList.add("ocultar")

})




