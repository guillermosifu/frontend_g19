// API (APLICAION PROGRAMIMNG IONTERFACE)
//ES UN SERVICIO----formato json
// va,o usar el api de github 
//esto nos devuelve informacionnn


//en js existe una funcion especifica para ello .. esto hace una peticion a un URL 
// fetch
// fuincion nativa  de js 
// esxiste vario tipos de 'peticiones ... las principales son;
//GET = OBTENER INFORMACION
//POST = SIRVE PARA CREAR DATOS 
//PUT = SIRVE PARA ACTUALIZAR DATOS
//DELETE = PARA ELMINAR DATOS 

//FUNCION ASYNC   ASINCRONA
//LAS FUNIONES ASINCRONAS FUERON CREAADAS PARA EJECUTAR ALGO Y EN CASO LA EJCUCION
//DEMORE MAS DE LO NORMAL SE ESPERE PARA PODER EJECUTAR EL SGTE

//https://api.github.com/users/guillermosifu 
//hay un tiempo d espera el cual no conocemos , 
//no es automatico ... debemos decirle a nuestra funcione que se espera un pqito antes de pasar
//a la sgte lines

//estuctura de funcion async
// al aumentar el async estamos convirtiendo nuestra funcion aun funcione async
//async function obtenerDatos(){}

//const obtenerDAtosGit = async ()=>{}

//existe una palabra clave la cual le dira el codigo que espere
//await =>

const imageProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUsername = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubLocation = document.querySelector("#github-location");
const githubUrl=document.querySelector("#github-url")

//action button  input 
const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search");


githubActionSearch.onclick = ()=>{
    const username = githubInputSearch.value;
    githubInputSearch.value = "";
    //aca nos falta validar si el input esta vacio
    if(username === ""){
        Swal.fire({
            title:"Error",
            text: "debe llenar el campo usuario",
            icon:"error"
        });
    return;
    }
    //ojooooo  solo llega a ejecutar la fucion si el username no esta vacio 
    //recuerde que el return termina la ejecucion
    //q funcion debo llamar ??
    obtenerDatosGithub(username); 
}

githubInputSearch.addEventListener("keyup",function(event){
    if(event.key ==="Enter"){
        obtenerDatosGithub(event.target.value)
    }
});

// el valor guillermosifu solo sera validoc uando username este vacio 
const obtenerDatosGithub = async (username = "guillermosifu")=>{
    //ejecita fetch con la url y una vez que acabe la ejeucion  recien sde ejeciutar la sgt funcion

    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    //data meassega error .. solo no exista el usuario
    //su valor not found
    if(data.message === "Not Found"){
        Swal.fire({
            title : "Error",
            text : "no existe usuario",
            icon:"error"
        });
        return;
    }
   
    setDataUSer(data)
   
};
const formatDate =(fecha)=>{
    let date = new Date(fecha);
    return date.toISOString().split("T")[0];
}

// es la insercion al documento..
const setDataUSer =(data)=>{
    imageProfile.src = data.avatar_url;
    githubName.textContent = data.login;
    githubBio.textContent= data.bio;
    githubJoined.innerHTML= formatDate(data.created_at);
    githubUrl.innerHTML=data.html_url;
    githubLocation.innerHTML=data.location;
    

}

//llama funcion peticion
 obtenerDatosGithub()

