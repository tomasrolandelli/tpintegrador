window.addEventListener("load", function(){
  console.log(window);
  console.log(window.location.search);
let info= document.querySelector("#datosPortada ");
let canciones= document.querySelector(".canciones");


let queryString= location.search;
let queryStringObj= new URLSearchParams(queryString);
let busqueda= queryStringObj.get('id');

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${busqueda}`)

.then(function(response){
  console.log(response)
return response.json()
})
.then(function(datos){

let nombreAlbum= datos.title
console.log(nombreAlbum)
let artistaAlbum= datos.artist.name
let imagenAlbum=datos.cover_medium
let imagenArtista= datos.artist.picture_small
let releaseDate= datos.release_date
info.innerHTML +=  
` 
<article class="portada">
<figure class="banner"> <img src= "${imagenAlbum}"alt="${nombreAlbum}"></figure> 
<div class="nn" >
   <h1 id="album">${nombreAlbum}</h1>
            
<div class="info-avicii">
  <div>
    <figure><img src="${imagenArtista}"></figure>    
     <h5 id="artista">${artistaAlbum}</h5>
  </div> 
  <h6><time datetime="${releaseDate}">${releaseDate}</time></h6>         
</div>
<div >
</article>`


})
 .catch(function (error) {
console.log(error)
})

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${busqueda}`)
.then(function (respuesta) {
console.log(respuesta)
return respuesta.json()
})
.then(function (data) {
  let nombreDelAlbum= data.title
  let imagenn=data.cover_small
  let album= data.tracks.data
console.log(album)
for (let i=0; i<album.length; i++){
let nombreCancion= album[i].title

 canciones.innerHTML= canciones.innerHTML +
` <article class="track">
<a href="./playlist.html" class="corazon"><i class="far fa-heart"></i></a>  
<a href="./detail-track.html"><img src= "${imagenn}" alt="${nombreDelAlbum}"></a>
<div>
   <a href="detail-track.html"><h2>${nombreCancion}</h2></a>                    
</div>    
<a href="detail-track.html" class="punto"><i class="fas fa-ellipsis-h"></i></a> 
</article>`
 

}
})

.catch(function (error) {
console.log(error)
})




})
/*
ESTE NO
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')

    .then(function (respuesta) {
    console.log(respuesta)
    return respuesta.json()
})
   .then(function (datos) {
    let albums= datos.albums.data
    console.log(albums)
    for(let i=0; albums.length;i++){
    let nombreAlbum= albums[i].title
    console.log(nombreAlbum)
let artistaAlbum= albums[i].artist.name
let imagenAlbum= albums[i].artist.picture_medium

/*   let titles= album.data[i].title
   console.log(titles)
   let artist= album[i].artist.name
   console.log(artist)
   let imagenAlbum= album[i].artist.picture_medium
   console.log(imagen)
     info.innerHTML= info.innerHTML +
     ` <figure class="banner"> <img src= "${imagenAlbum}" ></figure>           
     <div class="info">
     <h1>${nombreAlbum}</h1>
     <div>
     <figure><img url= ""></figure>    
    <h5>${artistaAlbum}</h5>
    </div>   
    </div>`
     
    }*/
/*
`  <a href="./playlist.html" class="corazon"><i class="far fa-heart"></i></a>  
 <a href="./detail-track.html"></a>
 <div>
      <a href="detail-track.html"><h2> ${nombreCancion}</h2></a>                    
 </div> 
   <a href="detail-track.html" class="punto"><i class="fas fa-ellipsis-h"></i></a>`*/
   /*//edte no
fetch
(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127`+busqueda)
.then(function(response){
console.log(response)
return response.json()
})
.then(function(data){
let album = data
console.log(album)
let tracks= data.tracks.data
console.log(tracks)

  let title= data.title
  console.log(title)
  let artist= data.artist.name
  console.log(artist)
  let urlImagen = data.cover_medium
  let imagenArtista= data.artist.picture_medium
  info.innerHTML= info.innerHTML +
  ` <article class="portada">
  <figure class="banner"> <img src= "${urlImagen}" ></figure>           
     <div class="info">
     <h1>${title}</h1>
     <div>
     <figure><img url= "${imagenArtista}"></figure>    
    <h5>${artist}</h5>
    </div>   
  </div> </article> `
  
/*
for (let i=0; i<tracks.length; i++){

let imagenTrack= tracks[i].md5_image
let nombreTrack= tracks[i].title
canciones.innerHTML +=`
<article class="track">
  <a href="./playlist.html" class="corazon"><i class="far fa-heart"></i></a>  
  <a href="./detail-track.html"><img src= "${imagenTrack}" alt=true-cover></a>
<div>
    <a href="detail-track.html"><h2>${nombreTrack}</h2></a>                    
</div>    
<a href="detail-track.html" class="punto"><i class="fas fa-ellipsis-h"></i></a>
</article> `

}
})
.catch(function(error){
  console.log(error)
}) */