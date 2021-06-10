window.addEventListener("load", function () {

    console.log(window.location.search);

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString)
    let busqueda = queryStringObj.get('id');
    
    let track = document.querySelector("#tracksnour")

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${busqueda}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (datos) {
            console.log(datos)

            let nombreTrack = datos.title
            let autorTrack = datos.artist.name
            let imagenTrack = datos.artist.picture_medium
            let albumTrack = datos.album.title
            let linkTrack = datos.preview
            console.log(nombreTrack);
            console.log(autorTrack);
            console.log(imagenTrack);
            console.log(albumTrack);
            console.log(linkTrack);
            

            track.innerHTML += 
            `<a href="./detail-track.html"><div class= "divtrack"><div class= "divtrackhijo"><img class= "imgtrack" src="${imagenTrack}" alt="${nombreTrack}"></a>
            <a href="./detail-track.html"><h1 class= "headtrack" id="h1track">${nombreTrack}<h1>
            <h3 class= "headtrack" id="h3track">${albumTrack}</h3>
            <h4 class= "headtrack">${autorTrack}</h4>
            <audio controls class="audiotrack">
            <source src="${linkTrack}">
            </audio>
            </div>
            </div>
            </a>`
        })
        .catch(function (error) {
            console.log(error)
        })
})
