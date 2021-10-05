// Registro

// Controles registro

const registroAbrir = document.getElementById("modalAbrir");
const registroCerrar = document.getElementById("modalCerrar");
const modalContainer = document.getElementById("modalContainer");

const abrirRegistro = () => {
  modalContainer.classList.toggle("modal-active");
};
registroAbrir.addEventListener("click", abrirRegistro);
registroCerrar.addEventListener("click", abrirRegistro);
modalContainer.addEventListener("click", abrirRegistro);

const modal = document.getElementById("modal");

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

//Guardado registro

const registro = document.getElementById("modalRegistro");

const guardarRegistro = () => {
  const nombre = document.getElementById("nombre")
  const mail = document.getElementById("mail");
  const pass = document.getElementById("pass")

  localStorage.setItem("nombre",JSON.stringify(nombre.value));
  localStorage.setItem("mail",JSON.stringify(mail.value));
  localStorage.setItem("pass",JSON.stringify(pass.value));
  abrirRegistro();
}

registro.addEventListener("click",guardarRegistro);