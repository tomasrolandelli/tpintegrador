window.addEventListener("load", function () {

    //QUERY SELECTORS
    let formulario = document.querySelector("form");
    let inputT = document.querySelector("#tomInput");
    let primero = document.querySelector(".primeroH");
    let segundo = document.querySelector(".segundoH");


    //EVENTO Y CONDICIONAL
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        if (inputT.value.length == 0) {
            primero.style.display = "block";
            segundo.style.display = "none";
        } else if (inputT.value.length < 3 && inputT.value.length != 0) {
            segundo.style.display = "block";
            primero.style.display = "none";
        } else {
            this.submit()
        }
    })
})