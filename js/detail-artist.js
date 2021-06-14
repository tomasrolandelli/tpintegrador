// CARGAR PAGINA ANTES DE TODO
window.addEventListener("load", function () {

  console.log(window);
  console.log(location);
  console.log(location.search);

  //QUERYSTRING
  let queryString = location.search;
  let queryStringObj = new URLSearchParams(queryString);//modelo de obj en js
  let busqueda = queryStringObj.get('id');

  //DECLARO VARIABLES
  let artista = document.querySelector("#artistatom");
  let albumes = document.querySelector("#albumes-artista");

  //FETCH
  fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${busqueda}`)
    .then(function (response) {
      console.log(response);
      return response.json()
    })
    .then(function (datos) {
      //DECLARO VARIABLES
      let cantantes = datos
      console.log(cantantes);

      //DECLARO NUEVAS VARIABLES
      let fotoArtista = cantantes.picture_medium;
      let nombreArtista = cantantes.name;

      artista.innerHTML += `
      <article class="portada">
      <figure class="banner"><img src="${fotoArtista}" alt="${nombreArtista}"></figure>
      <div class="nn"
      <h1>${nombreArtista}</h1>
      </div>
      </article>
      `
    }

    )
    .catch(function (error) {
      console.log(error);
    })

  //SEGUNDO FETCH PARA BUSCAR ALBUMES POR ARTISTA
  fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${busqueda}/albums`)
    .then(function (response) {
      console.log(response);
      return response.json()
    })
    .then(function (datos) {
      console.log(datos);
      //PREPARO BUCLE
      for (let i = 0; i < 5; i++) {
        let albumTitle = datos.data[i].title;
        let albumCover = datos.data[i].cover;
        albumes.innerHTML += `
      <article class="track">
      <a href="./playlist.html" class="corazon"></a>
      <a href="./detail-album"><img src="${albumCover}" alt="${albumTitle}"></a>
      <div>
      <a href="detail-track.html"><h2>${albumTitle}</h2></a>
      </div>
      <a href="detail-track.html" class="punto"><i class="fas fa-ellipsis-h"></i></a>
      </article>
      `
      }

    })
    .catch()
})