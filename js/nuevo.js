//Variables

window.onload = function () {
  const baseDeDatos = [
    {
      id: 1,
      nombre: "Master Origins Colombia",
      descripcion: "AFRUTADO Y VIBRANTE",
      precio: 1000.90,
      img: "images/col.png",
    },
    {
      id: 2,
      nombre: "Nicaragua La Cumplida",
      descripcion: "AFRUTADO Y DULCE",
      precio: 2000,
      img: "images/nic.png",
    },
    {
      id: 3,
      nombre: "Vanilla Éclair",
      descripcion: "VANILLA",
      precio: 1100,
      img: "images/vanila.png",
    },
    {
      id: 4,
      nombre: "Master Origins India",
      descripcion: "INTENSO Y ESPECIADO",
      precio: 1500,
      img: "images/india.png",
    },
    {
      id: 5,
      nombre: "Master Origins Indonesia",
      descripcion: "SABROSO Y AMADERADO",
      precio: 1500,
      img: "images/ind.png",
    },
    {
      id: 6,
      nombre: "Buenos Aires Lungo",
      descripcion: "CEREALES Y CARAMELO",
      precio: 1499,
      img: "images/bl.png",
    },
    {
      id: 7,
      nombre: "Tokyo Vivalto Lungo",
      descripcion: "FLORAL Y TOSTADO",
      precio: 1200,
      img: "images/tokio.jpg",
    },
    {
      id: 8,
      nombre: "Vienna Linizio Lungo",
      descripcion: "MALTEADO, CEREALES",
      precio: 1350,
      img: "images/viena.png",
    },
    {
      id: 9,
      nombre: "Shanghai Lungo",
      descripcion: "CÍTRICOS Y AFRUTADO",
      precio: 1499,
      img: "images/shangai.png",
    },
    {
      id: 10,
      nombre: "Stockholm Fortissio Lungo",
      descripcion: "TOSTADO Y MALTEADO",
      precio: 1500,
      img: "images/stk.png",
    },
    {
      id: 11,
      nombre: "Shanghai Lungo",
      descripcion: "CÍTRICOS Y AFRUTADO",
      precio: 1499,
      img: "images/shangai.png",
    },
    {
      id: 12,
      nombre: "Stockholm Fortissio Lungo",
      descripcion: "TOSTADO Y MALTEADO",
      precio: 1500,
      img: "images/stk.png",
    },
  ];

  let carrito = [];
  let total = 0;
  const DOMcontainer = document.getElementById("container"); //listo
  const DOMcarrito = document.getElementById("carrito");
  const DOMtotal = document.getElementById("total");
  const DOMbotonVaciar = document.getElementById("boton-vaciar");
  const siteLocalStorage = window.localStorage;

  // Funciones

  //Creación de elementos

  function crearProductos() {
    baseDeDatos.forEach((info) => {
      const product = document.createElement("div");
      product.classList.add("card", "col-sm-4");

      const productCardBody = document.createElement("div");
      productCardBody.classList.add("card-body");

      const productTitle = document.createElement("h2");
      productTitle.classList.add("card-title");
      productTitle.textContent = info.nombre;

      const productDesc = document.createElement("h4");
      productDesc.classList.add("card-text");
      productDesc.textContent = info.descripcion;

      const productImagen = document.createElement("img");
      productImagen.classList.add("img");
      productImagen.setAttribute("src", info.img);

      const productPrecio = document.createElement("h2");
      productPrecio.classList.add("card-text");
      productPrecio.textContent = "$" + info.precio;

      const productBoton = document.createElement("button");
      productBoton.classList.add("btn", "btn-primary");
      productBoton.textContent = "Agregar al Carrito";
      productBoton.setAttribute("marcador", info.id);
      productBoton.addEventListener("click", agregarAlCarrito);

      productCardBody.appendChild(productImagen);
      productCardBody.appendChild(productTitle);
      productCardBody.appendChild(productDesc);
      productCardBody.appendChild(productPrecio);
      productCardBody.appendChild(productBoton);
      product.appendChild(productCardBody);
      DOMcontainer.appendChild(product);
    });
  }

  // Carrito

  // Agregar producto

  function agregarAlCarrito(e) {
    carrito.push(e.target.getAttribute("marcador"));
    totalCarrito();
    actualizarCarrito();
    salvarCarrito();
  }

  // Actualizar carrito

  function actualizarCarrito() {
    DOMcarrito.textContent = "";
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((prod) => {
      const prodCarrito = baseDeDatos.filter((prodBaseDatos) => {
        return prodBaseDatos.id === parseInt(prod);
      });
      const unidadesProd = carrito.reduce((total, prodId) => {
        return prodId === prod ? (total += 1) : total;
      }, 0);
      const listaProducto = document.createElement("li");
      listaProducto.classList.add("list-group-item", "text-right", "mx-2");
      listaProducto.textContent = `${prodCarrito[0].nombre} - Cantidad ${unidadesProd} - $ ${prodCarrito[0].precio}`;
      const botonCarrito = document.createElement("button");
      botonCarrito.classList.add("btn", "btn-danger", "mx-5");
      botonCarrito.textContent = "X";
      botonCarrito.style.marginLeft = "1rem";
      botonCarrito.dataset.item = prod;
      botonCarrito.addEventListener("click", borrarCarrito);
      listaProducto.appendChild(botonCarrito);
      DOMcarrito.appendChild(listaProducto);
    });
  }

  // Eliminar del carrito

  function borrarCarrito(e) {
    const id = e.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    actualizarCarrito();
    totalCarrito();
    salvarCarrito();
  }

  // Total

  function totalCarrito() {
    total = 0;
    carrito.forEach((prod) => {
      const prodCarrito = baseDeDatos.filter((prodBaseDatos) => {
        return prodBaseDatos.id === parseInt(prod);
      });
      total = total + prodCarrito[0].precio;
    });
    // Renderizamos el precio en el HTML
    DOMtotal.textContent = total.toFixed(2);
  }

  // Vaciar todo el carrito

  function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    totalCarrito();
    localStorage.clear();
  }

  function salvarCarrito() {
    siteLocalStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function cargarCarrito() {
    if (siteLocalStorage.getItem("carrito") !== null) {
      carrito = JSON.parse(siteLocalStorage.getItem("carrito"));
    }
  }

  // Eventos
DOMbotonVaciar.addEventListener("click", vaciarCarrito);

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

  // Inicio
  cargarCarrito();
  crearProductos();
  totalCarrito();
  actualizarCarrito();
};

