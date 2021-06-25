window.addEventListener("load", function(){

let track= document.querySelector("#tracks");
let album= document.querySelector("#album");
let artist= document.querySelector("#artistas");

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
.then(function(response){
return response.json()
})
.then(function(datos){

let albums= datos.albums.data
let artistas= datos.artists.data
let canciones= datos.tracks.data

for (let i=0; i<albums.length; i++){
let nombreAlbum= albums[i].title
let artistaAlbum= albums[i].artist.name
let imagenAlbum= albums[i].cover_medium
let artistID= albums[i].artist.id

album.innerHTML += 
` 
    <article>
<a href="./detail-album.html?id=${albums[i].id}" ><img src="${imagenAlbum}" alt="${nombreAlbum}"></a>
<a href="./detail-album.html?id=${albums[i].id}"> <h3>${nombreAlbum}</h3> </a>
<a href="./detail-artist.html?id=${artistID}"> <h4>${artistaAlbum}</h4></a>
    </article>
 `
}

for (let i=0;i<artistas.length; i++){
let nombreArtista= artistas[i].name
let imagenArtista= artistas[i].picture_medium

    artist.innerHTML += 
` <article>
    <a href="./detail-artist.html?id=${artistas[i].id}"><img class="artistatomi" src="${imagenArtista}" alt=${nombreArtista}></a>
    <a href="./detail-artist.html?id=${artistas[i].id}"> <h3>${nombreArtista}</h3> </a>
   </article>`
}

for (let i=0; i<canciones.length; i++){
    let nombreTrack= canciones[i].title
    let autorTrack= canciones[i].artist.name
    let imagenTrack= canciones[i].artist.picture_medium
    let albumTrack = canciones[i].album.title
    let artistID = canciones[i].artist.id
    track.innerHTML+= 
`<article>
    <a href="./detail-track.html?id=${canciones[i].id}"><img src="${imagenTrack}" alt="${nombreTrack}"></a>
    <a href="./detail-track.html?id=${canciones[i].id}"> <h3 id="indexhead3">${albumTrack}</h3></a>
    <a href="detail-artist.html?id=${artistID}"> <h4>${autorTrack}</h4></a>
</article>`
}

})


.catch(function(error){
        console.log("el error fue:" + error);
})





})