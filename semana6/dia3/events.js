//addEventLsitener
//la forma de js moderno me permite agrefgar los evenos de una forma mas legible 


const btnPrueba = document.querySelector("#btn-prueba");
const btnMouseover = document.querySelector("#btn-mouseover")

//------------------------------------------




btnPrueba.onclick = function (e){
    console.log("click desde otro archivo")
    Swal.fire("Hola mundo ")

}
btnPrueba.onmouseover = function (event){
    console.log("click desde mouseover")
}

//......................
const btnPregunta=document.querySelector("#btn-pregunta");
btnPregunta.onclick = function(){
    Swal.fire("Alguna pregunta","Aca el texto","question")
    
}

//--------------------------------------
function showAlert(icon,title,text){
    Swal.fire({
            icon,
            title,
            text,
            footer: "<a href='https://google.com'>Link de footer</a>"}
        
    )
}

//--------------------------------------
btnError = document.querySelector("#btn-error");

btnError.onclick = function(e){
    showAlert("error","Hubo un error","Email or password erroneos")

}