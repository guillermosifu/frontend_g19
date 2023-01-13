

function imprimir(){
    console.log("imprimo desde js")
}

//la idea es tener una funcion que reciba un parametro el cual me diga si es +-*/
//en base a ese parameto llama a la funcion que necesite -- desde el acarchivo operaciones 


function calculadorHTML(operacion){
    //obtener el valor de los inputs 
    const numero1 = document.querySelector("#numero1").value;
    const numero2 = document.querySelector("#numero2").value;
    //validar que no este vacio---

    if(numero1 ==="" || numero2 === ""){
        alert("Debes completar los datoss");
        return;
    }

    //una vez que validamos los cmapos debo hallar la operacion matematica 
    //necsito una variable que se encargue de guarader el resultado

    let resultado= 0;
    
    if(operacion === "+"){
        resultado = sumar(numero1,numero2);
    }

     
    //para acabar mas bonito e insertalo en html 

    const p =document.createElement("p");
    const value = document.createTextNode(resultado);
    p.appendChild(value);
    const contenedor = document.querySelector("#resultado")
    contenedor.appendChild(p);

}

