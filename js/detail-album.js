window.addEventListener("load", function(){
  console.log(window.location.search)

let canciones= document.querySelector(".track");

let queryString= location.search;
let queryStringObj= new URLSearchParams(queryString);//modelo de obj en js
let busqueda= queryStringObj.get('id');


fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127`+ busqueda)
.then(function(response){
console.log(response)
return response.json()
})
.then(function(data){
let album = data
console.log(album)
let info= document.querySelector(".portada ");
for (let i=0; i<1; i++){
  let title= data.title
  let artist= data.artist.name
  let urlImagen = data.genres.data[i].picture
  let imagenArtista= dara.artist.picture_medium
  info.innerHTML= info.innerHTML +
  ` <figure class="banner"> <img src= "${urlImagen}" ></figure>           
     <div class="info">
     <h1>${title}</h1>
     <div>
     <figure><img url= "${imagenArtista}"></figure>    
    <h5>${artist}</h5>
    </div>   
    </div>`
}
})
.catch(function(error){
  console.log(error)
}) 


/*
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums')
    .then(function (respuesta) {
    console.log(respuesta)
    return respuesta.json()
})
   .then(function (data) {
         let album= data.data
 console.log(album)
 for (let i=0; i<1; i++){
   let titles= data.data[i].title
   let artist= data.data[i].artist.name
   let imagen= data.data[i].cover_medium
   
     info.innerHTML= info.innerHTML +
     ` <figure class="banner"> <img src= "${imagen}" ></figure>           
     <div class="info">
     <h1>${titles}</h1>
     <div>
     <figure><img url= ""></figure>    
    <h5>${artist}</h5>
    </div>   
    </div>`
     
 
 }
})

 .catch(function (error) {

})
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127?0=${busqueda}`')
.then(function (respuesta) {
console.log(respuesta)
return respuesta.json()
})
.then(function (data) {
     let album= data
console.log(album)
for (let i=0; i<album.length; i++){
let nombreCancion= data.tracks[i].title
let imagen= data.

 canciones.innerHTML= canciones.innerHTML +
`  <a href="./playlist.html" class="corazon"><i class="far fa-heart"></i></a>  
 <a href="./detail-track.html"><img src= "${imagen}" alt=true-cover></a>
 <div>
      <a href="detail-track.html"><h2 ${nombreCancion}></h2></a>                    
 </div> 
   <a href="detail-track.html" class="punto"><i class="fas fa-ellipsis-h"></i></a>`
 
 

}
})

.catch(function (error) {

})

})*/


})

