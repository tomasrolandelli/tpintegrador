window.addEventListener("load", function () {

    console.log(window.location.search);

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString)
    let busqueda = queryStringObj.get('id');

    let track = document.querySelector("#tracksnour")

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (datos) {
            console.log(datos)

            let nombreTrack = datos.title
            let autorTrack = datos.artist.name
            let imagenTrack = datos.artist.picture_small
            console.log(nombreTrack);
            console.log(autorTrack);
            console.log(imagenTrack);

            track.innerHTML += 
            `<a href="./detail-track.html"><img src="${imagenTrack}" alt="${nombreTrack}"></a>
            <a href="./detail-track.html"><h1>${autorTrack}<h1>
            <h3>${nombreTrack}</h3>
            </a>`
        })
        .catch(function (error) {
            console.log(error)
        })
})