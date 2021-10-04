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
