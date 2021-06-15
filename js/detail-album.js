window.addEventListener("load", function(){
  console.log(window);
  console.log(window.location.search);
let info= document.querySelector("#datosPortada ");
let canciones= document.querySelector(".canciones");
let corazon= document.querySelector(".corazon")
let div= document.querySelector(".track div a")
let h2= document.querySelector("h2")
let imagenChicaa= document.querySelector(".track a img")

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
let artist= datos.artist.id

info.innerHTML+=` <article class="portada">
<figure class="banner"><img src="${imagenAlbum}" alt="${nombreAlbum}"></figure>
<div class="info" >
   <h1 id="album">${nombreAlbum}</h1>
<div class="info-avicii">
    <div>
     <figure><img src= "${imagenArtista}" alt= "${artistaAlbum}"></figure> 
     <a href="./detail-artist.html?id=${artist}"><h4>${artistaAlbum}</h4></a>
     <h6>${releaseDate}</h6>
    </div>
    <h4>${genero}</h4>
</div> 
</article>`

for (let i=0; i<album.length; i++){
 /* let track=album[i].id*/
 let nombreCancion= album[i].title
 let track=album[i].id

imagenChicaa.src=imagenChica
imagenChicaa.alt=nombreAlbum
h2.innerText=nombreCancion
div.href=`detail-track.html?id=${track}`

/*
   canciones.innerHTML= canciones.innerHTML +
   
  ` <article class="track">
  <a  class="corazon"><i class="far fa-heart"></i></a> 
  <a href="./detail-track.html?id="><img src= "${imagenChica}" alt="${nombreAlbum}"></a> 
 
  <div>
     <a href="detail-track.html?id=${track}"><h2>${nombreCancion}</h2></a>                    
  </div>    
  </article>`*/
}
})
 .catch(function (error) {
console.log(error)
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
/*
img.src=imagenAlbum
img.alt=nombreAlbum
h1.innerText=nombreAlbum
h5.innerText=artistaAlbum
h6.innerText=releaseDate
h4.innerText=genero
a.innerHTML=`<div><figure><img src="${imagenArtista}" alt="${artistaAlbum}"></figure>   
<a href="./detail-artist.html?id=${artist}"><h4>${artistaAlbum}</h4></a>
</div>`*/
/*
let time=document.querySelector("h6 time")
let h6=document.querySelector("h6")
let h4= document.querySelector("h4")
let corazon= document.querySelector(".corazon")

let div= document.querySelector(".track div a")
let a = document.querySelector(".info-avicii")
let canciones= document.querySelector(".canciones");
let img=document.querySelector(".banner img");
let h1=document.querySelector("h1")
let imgArtista= document.querySelector(".info-avicii figure img")
let h5=document.querySelector("h5")
let h2= document.querySelector("h2")
let imagenChicaa= document.querySelector(".track a img")
let div= document.querySelector(".track div a")


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${busqueda}`)
.then(function(response){
console.log(response)
return response.json
})
let listaFavoritos= []

//Recuperso datos del storage
//set item agrega una propiedad y sus valores a obj literal
//para ver si habia algo
let recuperoStorage= localStorage.getItem('favoritos');
console.log(recuperoStorage)
//en el caso de que haya elementos en storage. Osea no sea nulo,
if (recuperoStorage != null){
    //transformo el string en array
    //parse transforma a json en obj literal
    listaFavoritos=JSON.parse(recuperoStorage)
}
// Me fijo si el id de la canción esta en la lista
//si esta cambio el texto para sacar
//includes servia para ver si está o no
if (listaFavoritos.includes(busqueda)){
document.querySelector("corazon").innerHTML=`  <a  class="corazon"><i class="far fa-heart"></i></a> `
}
//Agregar a favs

let agregarAFav= document.querySelector('.corazon');
agregarAFav.addEventListener('click', function(e){
    e.preventDefault();
    //si esta en la lista
    if (listaFavoritos.includes(busqueda)){
        //lo localizo en array INDEXOF-->LOCALIZAR
        let sacarID= listaFavoritos.indexOf(busqueda);
        //y lo saco SPLICE-->SACAR
        listaFavoritos.splice(sacarID, 1);
        //Si ya lo saque --> cambio el texto de link
        document.querySelector(".corazon").innerHTML =`
        <a class="divplayer" id="agregarAFav"><i class="far fa-heart"></i></a>`
        console.log(listaFavoritos)
    }
    //si no esta en mi lista
   else {
        //se agrega la canción actual
        listaFavoritos.push(busqueda);
        //si ya lo agregué-->cambio texto 
        document.querySelector(".corazon").innerHTML=`
        <a class="divplayer" id="agregarAFav"><i class="fas fa-heart"></i></a>`;

    }
    //guardo el array actualizado como string
    let trackAStorage= JSON.stringify(listaFavoritos);
    //Guardo el string en local storage
    localStorage.setItem('favoritos', trackAStorage)
    //chequeo
    console.log(localStorage) 
  })*/