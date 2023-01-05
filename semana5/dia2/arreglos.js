//cuantos datos tienes una variable 
//una  airbale solo tiene un dato 

// iun areglo es un conjunto de datos 
// la form DE DECLARAR un arreglo  es parecido a declarar una vairbale 
// sin embargo debemos colorcar [] despues del ingual , ejemplo

//array
//tener diferentes tipos de dsatos?

const alumnos =["guillermo","ana","jorge",true,33,[]]
let frutas = ["fresa","naranja","tomate","pitahaya"]

console.log("alumnos", alumnos)
console.log("frutas", frutas)


//habra de forma de acceder a nu elemento en especifico 
//como accedemos a un eleemnto --se accede por su indice-numerico

console.log("alumnos",alumnos[2 + 2])

// se podra alterar un dato en un arry
// vamod a reasignar el valor del indice 0 

alumnos[0]="jhair";
console.log("reasignado", alumnos)

//podemos crear un nuevo elemento a un array 

alumnos[6]="diago";
alumnos[100]="guillermo";

console.log("cantidad de alumnos ",alumnos.length)
