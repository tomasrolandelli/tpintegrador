window.addEventListener("load", function(){

    console.log(window);
    console.log(window.location.search);
    
    let queryString= location.search;
let queryStringObj= new URLSearchParams(queryString);
let busqueda= queryStringObj.get('id');






})