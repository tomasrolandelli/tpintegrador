addEventListener("load", function(){
    
    console.log(window.location.search);


    let nombre = document.querySelector("#artista")
    let album = document.querySelector("#albumes-artista")

    //FETCH
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
.then(function(response) {
    console.log(response)
  return response.json()
})
.then(function(data) {
  console.log(data);
  let artistas= datos.artists.data
  let albums= datos.albums.data

  for (let i=0;i<artistas.length; i++){
    let nombreArtista= artistas[i].name
    let imagenArtista= artistas[i].picture_small
    
        nombre.innerHTML += ` <article>
        <a href="./detail-artist.html"><img class="artistatomi" src="${imagenArtista}"
                alt=${nombreArtista}></a>
        <a href="./detail-artist.html">
            <h3>${nombreArtista}</h3>
        </a>
    </article>`
    }

    for (let i=0;i<albums.length; i++){
        let nombreAlbum= albums[i].title
        let imagenAlbum= albums[i].artist.picture_small
        album.innerHTML += ` <article>
        <a href="./detail-album.html" ><img src="${imagenAlbum}" alt="${nombreAlbum}"></a>
        <a href="./detail-album.html">
         <h3>${nombreAlbum}</h3>
        </a>`
        }
})
.catch(function(error) {
  console.log("Error: " + error);
})

})