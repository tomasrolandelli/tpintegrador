window.addEventListener("load", function(){
    //QUERYSTRING
    let queryStringObj = new URLSearchParams(location.search);
    queryStringObj.get('buscador')
    let busqueda = queryStringObj.get('q');
    
    //QUERY SELECTORS
    let resultado = document.querySelector('#resultados')
    let secciones = document.querySelector('#resultadoTitulo')


    //FETCH

        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=eminem`)
        .then(function(response){
            console.log(response);
            return response.json()
        })
        .then(function(datos){
            console.log(datos);
            let cantResultados = datos.total
            let resultados = datos.data
            for (let i = 0; i>resultados.length ;i++){

                let nombreArtista = resultados[i].artist.name;
                let nombreAlbum = resultados[i].title;
                let type = resultados[i].record_type;
                let cover = resultados[i].cover_medium;

                

                secciones.innerHTML+=`<article class="track">
                <a href="./detail-track.html"><img src="${cover}" alt="${nombreAlbum}"></a>
                <div>
                   <a href="detail-album.html"><h2>${nombreAlbum}</h2></a>
                   <a href="detail-artist.html"><h2>${nombreArtista}</h2></a>
                   <h3>Type: ${type}</h3>
                </div>    
                <a href="detail-track.html" class="punto"><i class="fas fa-ellipsis-h"></i></a> 
                </article>`
    
                resultado.innerHTML+=`${busqueda}`
            }
        })
        .catch(function(error){
            console.log(error);
        })
    

})