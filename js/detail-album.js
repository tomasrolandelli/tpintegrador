window.addEventListener("load", function(){
  console.log(window);
  console.log(window.location.search);
let info= document.querySelector("#datosPortada ");
let canciones= document.querySelector(".canciones");
let img=document.querySelector(".banner img");
let h1=document.querySelector("h1")
let imgArtista= document.querySelector(".info-avicii figure img")
let h5=document.querySelector("h5")
let h2= document.querySelector("h2")
let time=document.querySelector("h6 time")
let h6=document.querySelector("h6")
let h4= document.querySelector("h4")



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
let album= datos.tracks.data
let artistaAlbum= datos.artist.name
let imagenAlbum=datos.cover_medium
let imagenChica= datos.cover_small
let imagenArtista= datos.artist.picture_small
let releaseDate= datos.release_date
let genero= datos.genres.data[0].name

img.src=imagenAlbum
img.alt=nombreAlbum
h1.innerText=nombreAlbum
imgArtista.src=imagenArtista
imgArtista.alt=artistaAlbum
h5.innerText=artistaAlbum
h6.innerText=releaseDate
h4.innerText=genero


for (let i=0; i<album.length; i++){
  let nombreCancion= album[i].title

 
   canciones.innerHTML= canciones.innerHTML +
  ` <article class="track">
  <a href="./playlist.html?id=${album[i].id}" class="corazon"><i class="far fa-heart"></i></a> 
  <a href="./detail-track.html"><img src= "${imagenChica}" alt="${nombreAlbum}"></a> 
 
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

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${busqueda}`)
.then(function(response){
console.log(response)
return response.json
})
})
/*
  info.innerHTML +=  ` 
<article class="portada">
<figure class="banner"> <img src= "${imagenAlbum}"alt="${nombreAlbum}"></figure> 
<div class="nn" >
<h1 id="album">${nombreAlbum}</h1>
<div class="info-avicii">
<div>
    <figure><img src="${imagenArtista}"></figure>    
     <h5 id="artista">${artistaAlbum}</h5>
  </div> 
  <h6><time datetime="${releaseDate}">${releaseDate}</time>-${genero} --</h6>         
</div>
<div >
</article>`*/