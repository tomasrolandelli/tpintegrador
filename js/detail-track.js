window.addEventListener("load", function(){
console.log(window.location.search)

let track= document.querySelector("#tracks") 

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556')
.then(function(response){
    console.log(response)
return response.json()
})
.then(function(data){
    let canciones = data
    console.log(canciones)

for (let i=0; i<canciones.length; i++){
    let nombreTrack= canciones[i].title
    let autorTrack= canciones[i].artist.name
    let imagenTrack= canciones[i].artist.picture_small

    track.innerHTML+= 
    `<article>
    <a href="./detail-track.html"><img src="${imagenTrack}"
            alt="${nombreTrack}"></a>
    <a href="./detail-track.html">
        <h3>${nombreTrack}</h3>
    </a>
    <a href="./detail-track.html">
        <h4>${autorTrack}</h4>
    </a>
</article>`
}
})
.catch(function(error){
    console.log(error)
  }) 
})