const btnLogin = document.querySelector("#btn-login");

btnLogin.onclick= function(event){
    event.preventDefault();

    const inputs = document.querySelectorAll("input");
    
    inputs.forEach((input)=>{
        localStorage.setItem(input.name,input.value)       
    })
    login()
};

//vamos atrapar los valores desde localstorge
// la forma que obtenemos los datos es 
// localstorage.getItem(key)

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login(){
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    form.style.display ="none";
    usuarioSection.style.display="block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML= password

}

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#cerrar-session");
const usuarioSection = document.querySelector("#usuario-logged");


if(email !== null && password !== null){
    //el usuario ya esta loqueado
    //si el suaurio esta logueADO voy ocualter el form
    login()
}else{
    usuarioSection.style.display="none"
}

btnCerrarSesion.onclick = function(){
    //vamoa a eliminar las variables del local storage 
    //localStorage.removeItem(key)
    localStorage.removeItem("password");
    localStorage.removeItem("email");
// es mostrar el formulario y cultar el mensaje capturadp 
form.style.display="block";
usuarioSection.style.display="none";

}