const crear = document.querySelector("#crear-sesion");
const obtener = document.querySelector("#obtener-sesion");
const eliminar = document.querySelector("#eliminar-sesion");

crear.onclick = function(){
    //para poder creae la vaiable desde session storage ... invocamos  
   sessionStorage.setItem(
    "variable_1",
    "Mi primer variable en session"
   )

}

obtener.onclick = function(){
    const variable = sessionStorage.getItem("variable_1")
    console.log(variable)
}

eliminar.onclick=function(){
    sessionStorage.removeItem("variable_1")
}