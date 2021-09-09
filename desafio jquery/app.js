$(document).ready(()=>{
    $('#input-carrito').trigger('focus')
})



$('#boton-form').click((event)=>{
    event.preventDefault()
    alert("Producto agregado")
    $('#formCarrito').trigger('submit')
})

$('#input-carrito').on('input', (e)=>{

    const valor = e.target.value.trim()
    
    if (valor.length <= 1) {
        $('#input-carrito').addClass('invalido')
        $('#input-carrito').removeClass('valido')


    } else {
        $('#input-carrito').addClass('valido')
        $('#input-carrito').removeClass('invalido')

    }
})


let contadorTarea = 0

$('#formCarrito').submit((e)=>{
    e.preventDefault()

    const valor = $('#input-carrito').val().trim()

    if (valor.length > 3) {
        contadorTarea++

        $('#listado').append(`
            <li>
                <h4>${valor}</h4>
                <button id="eliminar-${contadorTarea}">Eliminar</button>
            </li>
        `)

        $(`#eliminar-${contadorTarea}`).click(() => {
            $(`#eliminar-${contadorTarea}`).parent().remove()
        })

        $('#input-carrito').val('')
        $('#input-carrito').removeClass('valido')
        $('#input-carrito').trigger('focus')
    }
})

