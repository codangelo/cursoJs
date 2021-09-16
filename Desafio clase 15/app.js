
let id = 1

$('#siguiente').on('click', ()=>{

    $.get(`https://swapi.dev/api/films/${id}/`, (res) => {

    
        $('.swFilmInfo').html(`
            <h2>${res.title}</h2>
            <h3>${res.opening_crawl}</h3>
        `)
    })
    id++

})


$('#btn-buscar').on('click', () => {
    const id = $('#input-busqueda').val()

    fetch(`https://swapi.dev/api/films/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            
            $('.swFilmInfo').html(`
                <h2>Titulo: ${data.title}</h2>
                <h2>Director: ${data.director}</h2>
                <h2>Fecha de estreno: ${data.release_date}</h2>
                <h3>Opening: ${data.opening_crawl}</h3>


            `)
    
            id = data.id
        })

})
