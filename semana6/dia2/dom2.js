// js tiene el poder de escirbiur en el dom 
// asi como puede obtener los elementos -puedes escribir 



document.write("hola galaxia");

//vamos a crear una lista usando JS 
//


const containerList = document.querySelector("#container-list");
//js tienes una fuincion llamada createElement la ual me permite crear un elemento de html 

const ul = document.createElement("ul");
ul.className = "lista";

containerList.appendChild(ul)



//para acceder e todo el body 

const body = document.body;
body.style.backgroundColor = "yellow";
body.style.fontFamily ="Helvetica";





