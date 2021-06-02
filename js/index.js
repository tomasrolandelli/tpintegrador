window.addEventListener("load", function(){

let track= document.querySelector("#tracks") 
console.log(track) 
let album= document.querySelector("#album")
let artist= document.querySelector("#artistas")

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
.then(function(response){
    console.log(response)
return response.json()
})
.then(function(datos){
let canciones= datos.tracks.data
let albums= datos.albums.data
let artistas= datos.artists.data

for (let i=0; i<canciones.length; i++){
    let nombreTrack= canciones[i].title
    let autorTrack= canciones[i].artist.name
    let imagenTrack= canciones[i].artist.picture_small
    track.innerHTML+= 
    `<article>
    <a href="./detail-track.html"><img src="${imagenTrack}"
            alt="${nombreTrack}"></a>
    <a href="./detail-track.html">
        <h3>${nombreTrack}</h3>
    </a>
    <a href="./detail-track.html">
        <h4>${autorTrack}</h4>
    </a>
</article>`
}


for (let i=0;i<albums.length; i++){
let nombreAlbum= albums[i].title
let artistaAlbum= albums[i].artist.name
let imagenAlbum= albums[i].artist.picture_small
album.innerHTML += ` <article>
<a href="./detail-album.html" ><img src="${imagenAlbum}" alt="${nombreAlbum}"></a>
<a href="./detail-album.html">
 <h3>${nombreAlbum}</h3>
</a>
<a href="./detail-album.html">
    <h4>${artistaAlbum}</h4>`
}

for (let i=0;i<artistas.length; i++){
let nombreArtista= artistas[i].name
let imagenArtista= artistas[i].picture_small

    artist.innerHTML += ` <article>
    <a href="./detail-artist.html"><img class="artistatomi" src="${imagenArtista}"
            alt=${nombreArtista}></a>
    <a href="./detail-artist.html">
        <h3>${nombreArtista}</h3>
    </a>
</article>`
}
})
.catch(function(error){
        console.log("el error fue:" + error);
})





})