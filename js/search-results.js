window.addEventListener("load", function () {
    //QUERYSTRING
    let queryStringObj = new URLSearchParams(location.search);
    queryStringObj.get('buscador')
    let busqueda = queryStringObj.get('q');
    


    /* descargar gif
    seccion o articulo que va  acargar lainfo pongo el gif como fondo o imagen
    pero cuando el feth llega lo oculto
    
    */

    //QUERY SELECTORS
    let resTitu = document.querySelector("#resultadoTitulo");
    let resGral = document.querySelector('#resultadosGral');
    let resCanc = document.querySelector("#resultadosCanciones");
    let resAlbu = document.querySelector("#resultadosAlbumes .nomelacontainer");
    let resArti = document.querySelector("#resultadosArtistas .nomelacontainer")
    let all = document.querySelector("#all");
    let track = document.querySelector("#track");
    let artist = document.querySelector("#artist");
    let album = document.querySelector("#album");
    let totuloUno = document.querySelectorAll(".totuloUno");
    let totuloDos = document.querySelectorAll(".totuloDos");
    let totuloTres = document.querySelectorAll(".totuloTres");
    let totuloCuatro = document.querySelectorAll(".totuloCuatro");
    let resultadoArtista=document.querySelector("#resultadosArtistas");
    let resultadoAlbum= document.querySelector("#resultadosAlbumes");


    //RESULTADO DE...

    resTitu.innerText+=` "${busqueda}"`


    //ALL


    //FETCH GENERAL
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${busqueda}`)
        .then(function (response) {
            console.log(response);
            return response.json()
        })
        .then(function (datos) {
            let aprobar = datos.data
            if (aprobar.length!=0) {
                let imagenGral = aprobar[0].album.cover;
            let titleGral = aprobar[0].title;
            let typeGral = aprobar[0].type;
            let linkGral = aprobar[0].link;
            resGral.innerHTML += `
    <div>
    <a href="./detail-track.html?id=${linkGral}">
    <img src="${imagenGral}">
    <h3>${titleGral}</h2>
    <p>${typeGral}</p>
    </a>
    </div>
    `
            } else {
                resGral.innerHTML = `NO SE ENCONTRARON RESULTADOS DE ${busqueda}`
                resCanc.style.display = "none";
                resArti.style.display = "none";
                resAlbu.style.display = "none";
                totuloTres.style.display = "none";
                totuloCuatro.style.display = "none";


            }
            
        })
        .catch(function (error) {
            console.log(error);
        })

    //FETCH TRACK
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${busqueda}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (datos) {
            let aprobarDos = datos.data
            if (aprobarDos.length != 0) {
                for (let i = 0; i < 4; i++) {
                    let titleCanc = aprobarDos[i].title;
                    let imagenCanc = aprobarDos[i].album.cover_small;
                    let artistsCanc = aprobarDos[i].artist.name;
                    let artistsIdCanc = aprobarDos[i].artist.id;
                    let trackIdCanc = aprobarDos[i].id
                    resCanc.innerHTML += `
            <article class="track">
            <a href="./detail-track.html?id=${trackIdCanc}"><img src="${imagenCanc}" alt="${titleCanc}"></a>
            <h4 class="dobleTitulo">
            <a href="./detail-track.html?id=${trackIdCanc}">${titleCanc}</a>
            
            <a href="detail-artist.html?id=${artistsIdCanc}">${artistsCanc}</a>
            </h4>
            <a href="detail-track.html?id=${trackIdCanc}" class="punto"><i class="fas fa-ellipsis-h"></i></a>
            </article>
            `

                }
            } else {
                resCanc.innerHTML = `<h1>NO SE ENCONTRARON RESULTADOS DE ${busqueda}</h1>`
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    //FETCH ARTISTAS
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${busqueda}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (datos) {
            let aprobarSeis = datos.data;
            if (aprobarSeis.length != 0) {
                for (let i = 0; i < 5; i++) {
                    let nombreArti = aprobarSeis[i].name;
                    let idArti = aprobarSeis[i].id;
                    let fotoArti = aprobarSeis[i].picture_medium;
                    resArti.innerHTML += `
            <article>
            <a href="./detail-artist.html?id=${idArti}" ><img src="${fotoArti}" alt="${nombreArti}"></a>
            <a href="./detail-artist.html?id=${idArti}">
             <h3>${nombreArti}</h3>
            </a>
        </article>`

                }
            } else {
                resArti.innerHTML = `<h1>NO SE ENCONTRARON RESULTADOS DE ${busqueda}</h1>`
            }
        })
        .catch(function (error) {
            console.log(error);
        })

    //FETCH ALBUMES
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${busqueda}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (datos) {
        console.log(datos);
        let aprobarTres = datos.data;
        if (aprobarTres.length != 0) {
            for (let i = 0; i < 10; i++) {
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
        } else {
            resAlbu.innerHTML = `<h1>NO SE ENCONTRARON RESULTADOS DE ${busqueda}</h1>`

        }
    })
    .catch(function (error) {
        console.log(error);
    })

    //TRACK

    track.addEventListener("click", function () {
        resultadoArtista.style.display="none"
        resultadoAlbum.style.display="none"
        //FETCH TRACK
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${busqueda}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (datos) {
                let aprobarDos = datos.data
                if (aprobarDos.length != 0) {
                    for (let i = 0; i < 4; i++) {
                        let titleCanc = aprobarDos[i].title;
                        let imagenCanc = aprobarDos[i].album.cover_small;
                        let artistsCanc = aprobarDos[i].artist.name;
                        let artistsIdCanc = aprobarDos[i].artist.id;
                        let trackIdCanc = aprobarDos[i].id
                        resCanc.innerHTML += `
            <article class="track">
            <a href="./detail-track.html?id=${trackIdCanc}"><img src="${imagenCanc}" alt="${titleCanc}"></a>
            <h4 class="dobleTitulo">
            <a href="./detail-track.html?id=${trackIdCanc}">${titleCanc}</a>
            
            <a href="detail-artist.html?id=${artistsIdCanc}">${artistsCanc}</a>
            </h4>
            <a href="detail-track.html?id=${trackIdCanc}" class="punto"><i class="fas fa-ellipsis-h"></i></a>
            </article>
            `

                    }
                } else {
                    resCanc.innerHTML = `<h1>NO SE ENCONTRARON RESULTADOS DE ${busqueda}</h1>`
                    console.log("hola");
                }
            })
            .catch(function (error) {
                console.log(error);
            })
        resCanc.style.display = "block";
        resGral.style.display = "none";
        resArti.style.display = "none";
        resAlbu.style.display = "none";

    })

    //ARTIST
    artist.addEventListener("click", function () {
        resultadoAlbum.style.display="none"
        //FETCH ARTISTAS
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${busqueda}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (datos) {
                let aprobarSeis = datos.data;
                if (aprobarSeis.length != 0) {
                    for (let i = 0; i < 5; i++) {
                        let nombreArti = aprobarSeis[i].name;
                        let idArti = aprobarSeis[i].id;
                        let fotoArti = aprobarSeis[i].picture_medium;
                        resArti.innerHTML += `
                <article>
                <a href="./detail-artist.html?id=${idArti}" ><img src="${fotoArti}" alt="${nombreArti}"></a>
                <a href="./detail-artist.html?id=${idArti}">
                 <h3>${nombreArti}</h3>
                </a>
            </article>`

                    }
                } else {
                    resArti.innerHTML = `<h1>NO SE ENCONTRARON RESULTADOS DE ${busqueda}</h1>`
                }
            })
            .catch(function (error) {
                console.log(error);
            })

        resArti.style.display = "block";
        resultadoArtista.style.display = "block";
        resGral.style.display = "none";
        resCanc.style.display = "none";
        resAlbu.style.display = "none";
    })

    //ALBUM

    album.addEventListener("click", function () {
        resultadoArtista.style.display="none"

        //FETCH ALBUMES
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${busqueda}`)
            .then(function (response) {
                console.log(response);
                return response.json()
            })
            .then(function (datos) {
                console.log(datos);
                let aprobarTres = datos.data;
                if (aprobarTres.length != 0) {
                    for (let i = 0; i < 10; i++) {
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
                } else {
            
                    resAlbu.innerHTML = `<h1>NO SE ENCONTRARON RESULTADOS DE ${busqueda}</h1>`
                }
            })
            .catch(function (error) {
                console.log(error);
            })

        resAlbu.style.display = "block";
        resultadoAlbum.style.display = "block";
        resGral.style.display = "none";
        resCanc.style.display = "none";
        resArti.style.display = "none";
    })

    //ALL
    all.addEventListener("click", function () {
        return window.location.reload()
    })

})
