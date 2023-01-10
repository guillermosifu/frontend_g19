// existe dentro js el documento este es ela rchivo princiapl que envuelve todo nuestro proycto

//obtener elemento html 

// podemo hacerlo mdiant su etiqueta su clase o su id en base de selectores 

// como tengo 4 elemntos  esto sera una arrays de inputs 
const inputs = document.getElementsByTagName("input")
console.log("inputs",inputs)
//recoedemos que input es un HTMLcollection pero para poder ser iterado deber ser convertido 
//a un array normal -- 
// usando Array.from   convierte un HTMLcollection 

const newInputs = Array.from(inputs);
console.log("new",newInputs)    

newInputs.map((newinput)=>{
    console.log(newinput)
})


const form = document.getElementsByTagName("form")

//aceder al boton 
const button = document.getElementsByTagName("button");

//VOY ACCEDER AL IDE DE UN INPUT Y CAMBIARLE EL COLOR 

const inputPassword = document.getElementById("input_password");
inputPassword.style.backgroundColor ="#000";
inputPassword.style.fontFamily="Arial"
inputPassword.style.color="#fff";

console.log("password",inputPassword.value)

// atrapar por la clase 
//en js class se conoce como className

const inputsName = document.getElementsByClassName("input_name")

console.log(inputsName);

const newInputsName=Array.from(inputsName);
newInputsName.forEach((input)=>{
    console.log(input.value)
})

console.log(newInputsName)


const buttons = document.getElementsByClassName("btn_registro")
console.log(buttons)


//selectores querys selectors

//los hermano menor de los selctores 

// es con clase 

const inputNAme= document.querySelector(".input_name");
console.log(inputNAme.value)
// esto como id

const inputMail = document.querySelector("#input_email");
console.log(inputMail.value)

// query selectoAll es para mas de un elemento 
//al ser un node list esto es compatible con forEach
const inputs2 = document.querySelectorAll("input");
console.log(inputs2)
//quiero filtrar los input que sea tipo text

const arrayInputsText = [];
inputs2.forEach((input)=>{
    if (input.type === "text"){
        arrayInputsText.push(input)
    }
});

console.log(arrayInputsText)



