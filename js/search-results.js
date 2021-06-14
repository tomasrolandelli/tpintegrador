window.addEventListener("load", function () {
    //QUERYSTRING
    let queryStringObj = new URLSearchParams(location.search);
    queryStringObj.get('buscador')
    let busqueda = queryStringObj.get('q');

    //QUERY SELECTORS
    let resGral = document.querySelector('#resultadosGral');
    let resCanc = document.querySelector("#resultadosCanciones");
    let resAlbu = document.querySelector("#resultadosAlbumes");
    let resPlay = document.querySelector("#resultadosPlaylist");
    let resUser = document.querySelector("#resultadosUsuarios");
    let form= document.querySelector("#form");
    let search= document.querySelector("#search")

   
    //FETCH GENERAL
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${busqueda}`)
        .then(function (response) {
            console.log(response);
            return response.json()
        })
        .then(function (datos) {
            console.log(datos);
            let aprobar = datos.data
            console.log(aprobar);
            let imagenGral = aprobar[0].album.cover;
            let titleGral = aprobar[0].title;
            let typeGral = aprobar[0].type;
            let linkGral = aprobar[0].link;
            resGral.innerHTML += `
        <div>
        <a>
        <img src="${imagenGral}">
        <h3>${titleGral}</h2>
        <p>${typeGral}</p>
        </a>
        </div>
        `

        })
        .catch(function (error) {
            console.log(error);
        })

    //FETCH CANCIONES
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${busqueda}`)
        .then(function (response) {
            console.log(response);
            return response.json()
        })
        .then(function (datos) {
            console.log(datos);
            let aprobarDos = datos.data
            for (let i = 0; i < 4; i++) {
                let titleCanc = aprobarDos[i].title;
                let imagenCanc = aprobarDos[i].album.cover_small;
                let artistsCanc = aprobarDos[i].artist.name;
                let artistsIdCanc = aprobarDos[i].artist.id;
                let trackIdCanc = aprobarDos[i].id
                resCanc.innerHTML += `
            <article class="track">
            <a href="./playlist.html" class="corazon"><i class="far fa-heart"></i></a>
            <a href="./detail-album"><img src="${imagenCanc}" alt="${titleCanc}"></a>
            <div>
            <a href="detail-track.html"><h2>${titleCanc}</h2></a>
            <a href="detail-artists.html"><h3>${artistsCanc}</h3></a>
            </div>
            <a href="detail-track.html" class="punto"><i class="fas fa-ellipsis-h"></i></a>
            </article>
            `

            }
        })
        .catch(function (error) {
            console.log(error);
        })

    //FETCH ALBUMES
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${busqueda}`)
        .then(function (response) {
            console.log(response);
            return response.json()
        })
        .then(function (datos) {
            console.log(datos);
            let aprobarTres = datos.data;
            for (let i = 0; i < 4; i++) {
                let imagenAlbu = aprobarTres[i].cover_medium;
                let titleAlbu = aprobarTres[i].title
                let artistAlbu = aprobarTres[i].artist.name;
                let aidiAlbu = aprobarTres[i].id;

                resAlbu.innerHTML += `
            <article>
<a href="./detail-album.html?id=${aidiAlbu}" ><img src="${imagenAlbu}" alt="${titleAlbu}"></a>
<a href="./detail-album.html?id=${aidiAlbu}"> <h3>${titleAlbu}</h3> </a>
<a href="./detail-album.html?id=${aidiAlbu}"> <h4>${artistAlbu}</h4></a>
    </article>
            `
            }
        })
        .catch(function (error) {
            console.log(error);
        })

    //FETCH PLAYLIST
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/playlist?q=${busqueda}`)
        .then(function(response) {
            console.log(response);
            return response.json()
        })
        .then(function(datos) {
            console.log(datos);
            aprobarCuatro = datos.data
            for (let i = 0; i < 3; i++) {
                let imagenPlay = aprobarCuatro[i].picture;
                let titlePlay = aprobarCuatro[i].title;

                resPlay.innerHTML+=`
                <article>
                <img src="${imagenPlay}">
                <h2>${titlePlay}</h2>
                </article>
                `
            }
        })
        .catch(function(error){
            console.log(error);
        })

        //FETCH USUARIOS
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/user?q=${busqueda}`)
        .then(function(response){
            console.log(response);
            return response.json()
        })
        .then(function(datos){
            console.log(datos);
            let aprobarCinco = datos.data;
            for(let i=0;i<4;i++){
                let nameUser = aprobarCinco[i].name;
                let imagenUser = aprobarCinco[i].picture_small;

                resUser.innerHTML+=`
                <article class="track">
                <img src="${imagenUser}" alt="${nameUser}">
                <h2>${nameUser}</h2>
                </article>
                `
            }
        })
        .catch(function(error){
            console.log(error);
        })
})