
const formulario = document.querySelector("#formulario");



//crear mi funcion-

const validarFormulario =(e)=>{
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value
    const edad = document.querySelector("#edad").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent =`Hola ${nombre} tienes la edad de ${edad}`

}
//crear evento 

formulario.addEventListener("submit" , validarFormulario)