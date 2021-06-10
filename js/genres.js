window.addEventListener("load", function () {

    console.log(window.location.search);

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString)
    let busqueda = queryStringObj.get('id');
    
    let generos = document.querySelector("#nourgeneros")

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (datos) {
            console.log(datos)
            let genres = datos.data
            console.log(genres);
            
            for(let i=0; i<genres.length; i++){
                let id = genres[i].id;
                let name= genres[i].name;
                let pictureMedium = genres[i].picture_medium;
            
            
                generos.innerHTML+=`
                <article class="nourcajita">
                <img class="imgmedium" src="${pictureMedium}" alt="${id}">
                <a href="genres.html"><h2 class="generosname">${name}</h2></a>
                </article>`
            }
            
          
            
        })
        .catch(function (error) {
            console.log(error)
        })
})