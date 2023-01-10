//while tamb sirve para poder hacver una accion un numero determinado de veces 
//es decir un bucle 

//la estrutura de while siempre va acompañada de un contador

//while(la_comdicioon){

//}


// let contador = 0;  // este sera el valor inicial

// while (contador <=100){
//     console.log("contador", contador)
//     // no se olviden de alterar el contador en cada vuelta
//     contador+=5; 

// }

// escribir un programa que pida al usuario una palabra y lo muestre 10 veces


const imprimirDiezVeces =(palabra)=>{
    let contador = 0;

    while(contador < 10){
        console.log(palabra)
        contador++;
    }
}

imprimirDiezVeces("hola tecsup")

//escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10 





//escribir un programa que pida al usuario un numero entero positivo y muestre por panatlla
// todos los numero impares desde 1 hasta ese numero, separado por comas
//todo:10
// resultado : 1,3,5,7,9
