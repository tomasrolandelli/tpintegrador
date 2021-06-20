window.addEventListener("load", function(){

let recuperoStorage= localStorage.getItem("favoritos");
let track = document.querySelector(".canciones")

let listaFavoritos= []
//en el caso de que haya elementos en storage. Osea no sea nulo,
if (recuperoStorage != null){
    //transformo el string en array
    //parse transforma a json en obj literal
    listaFavoritos=JSON.parse(recuperoStorage)
    console.log(listaFavoritos)
}

for(let i=0; i<listaFavoritos.length; i++){
    let cancion= listaFavoritos[i];
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`)
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (datos) {
        console.log(datos)
        let nombreTrack = datos.title
        let autorTrack = datos.artist.name
        let imagenTrack = datos.artist.picture_medium
        let artistID= datos.artist.id

        track.innerHTML+=`<article class="track">
        <a href="./detail-track.html?id=${cancion}"><img src= "${imagenTrack}" alt="${nombreTrack}"></a>
        <div>
        <a href="detail-track.html?id=${cancion}"><h2>${nombreTrack}</h2></a>
        <a href="detail-artist.html?id=${artistID}"><h6>${autorTrack}</h6></a>
       </div>
        </article>`
    })
    .catch(function (error) {
        console.log(error)
    })

}





})