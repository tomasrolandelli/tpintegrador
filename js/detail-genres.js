window.addEventListener("load", function () {

    console.log(window.location.search);

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString)
    let busqueda = queryStringObj.get('id');
    
    let generos = document.querySelector("#generosid")
    let artist = document.querySelector('.nomelacontainer')


    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${busqueda}`)
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (datos) {
        console.log(datos)
        let genres = datos
        console.log(genres);
    
    let name = genres.name

        generos.innerHTML+=`
        ${name}`
            
    })
    .catch(function (error) {
        console.log(error)
    })

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${busqueda}/artists`)
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (datos) {
        console.log(datos)
    let artistas = datos.data

    for(let i=0; i<artistas.length; i++){
        let nameArtist = artistas[i].name
        let pictureArtist = artistas[i].picture_medium

        console.log(nameArtist);

    artist.innerHTML+=`
    <article>
    <img class="imaghtml" src="${pictureArtist}">
    <h2 class="artisthtml">${nameArtist}</h2>
    </article>`
    }
    })
})

