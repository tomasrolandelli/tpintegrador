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
    .then(function (data) {
        console.log(data)
      let name = data.name

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
    .then(function (data) {
        console.log(data)
    let artistas = data.data

    for(let i=0; i<artistas.length; i++){
        let artistID= artistas[i].id
        let nameArtist = artistas[i].name
        let pictureArtist = artistas[i].picture_medium

    artist.innerHTML+=`
    <article>
    <a href="detail-artist.html?id=${artistID}" > <img class="imaghtml" src="${pictureArtist}"></a>
    <a href="detail-artist.html?id=${artistID}" > <h2 class="artisthtml">${nameArtist}</h2></a>
    </article>`
    }
    })
    .catch(function (error) {
        console.log(error)
    })
})



