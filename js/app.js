// Alta Cliente
class Cliente {
  constructor(nombre, apellido, mail) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
  }
  registro() {
    this.nombre = prompt("Ingresa tu nombre");
    this.apellido = prompt("Ingresa tu Apellido");
    this.mail = prompt("Ingresa tu mail");

    console.log(this);
  }
  saludo() {
	const saludo = document.getElementById("saludo")
	saludo.innerHTML =  `Bienvenido ${this.nombre} tenemos 5 productos disponibles hoy: Lapicera $100; Tijera $399; Goma $50; Calculadora $609 y Hoja $20`
  }
}

const nuevoCliente = new Cliente(this.nombre, this.apellido, this.mail);

nuevoCliente.registro();
nuevoCliente.saludo();




//Lista de productos

class Productos {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}
const productos = [
  { id: 1, nombre: "Lapicera", precio: 100 },
  { id: 2, nombre: "Tijera", precio: 399 },
  { id: 3, nombre: "Goma", precio: 50 },
  { id: 4, nombre: "Calculadora", precio: 609 },
  { id: 5, nombre: "Hoja", precio: 20 },
];


//carrito
class Bag {
  constructor(producto, precio) {
    this.producto = producto.toUpperCase();
    this.precio = parseFloat(precio);
  }
}
let bag = [];
let cantidad = parseInt(prompt("Cuantos productos desea comprar?"));
for (let i = 1; i <= cantidad; i++) {
  let producto = prompt("Ingresa el nombre del producto que deseas comprar");
  if (producto == "Lapicera") {
    bag.push(new Bag(producto, 100));
  } else if (producto == "Tijera") {
    bag.push(new Bag(producto, 399));
  } else if (producto == "Goma") {
    bag.push(new Bag(producto, 50));
  } else if (producto == "Calculadora") {
    bag.push(new Bag(producto, 609));
  } else if (producto == "Hoja") {
    bag.push(new Bag(producto, 20));
  }
  console.log(bag);
}
const precioTotal = bag.reduce(
  (acumulador, el) => (acumulador += el.precio),
  0
);
console.log("El total de tu orden es " + precioTotal);

//Calculos compra
const calculoIva = (x) => x * 0.2;
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const dividir = (a, b) => a / b;

let precioFinal = suma(precioTotal, calculoIva(precioTotal));
let envio = 50;

console.log("El precio, IVA incluido es " + precioFinal);

let precioConEnvio = suma(precioFinal, envio);

alert("El precio final con envío es " + precioConEnvio);

let cuotas = parseInt(prompt("Ingresa la cantidad de cuotas"));
let pagoCuotas = dividir(precioConEnvio, cuotas);

console.log("El valor de la cuota es " + pagoCuotas);

let cierreOrden =
  "El total de la orden es " + precioFinal + " IVA incluido. El precio con envío es " + precioConEnvio + ". Si pagas en " + cuotas + " cuota/s, tendrás un costo mensual de " + pagoCuotas;

  const mensaje = document.getElementById("mensaje")
  mensaje.innerHTML =  cierreOrden