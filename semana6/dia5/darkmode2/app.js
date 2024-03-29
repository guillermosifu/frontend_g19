let button = document.querySelector(".switch");
let circle = document.querySelector(".circle");

let mode = "light";

let title = document.querySelector("h1");
let container = document.querySelector(".container");

function lightMode(){
    button.className = "switch";
    container.className= "container";
    circle.className="circle";
    title.textContent = "Light Mode";
}

function darkMode(){
    button.className = "switchDark";
    container.className= "containerDark";
    circle.className="darkCircle";
    title.textContent = "Dark Mode";

}

circle.addEventListener("click",()=>{
    if(mode == "light"){
        darkMode()
        mode = "dark"
    }else if(mode =="dark"){
        lightMode();
        mode = "light"
    }

})