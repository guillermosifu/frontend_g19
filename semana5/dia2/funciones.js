// una funcion es un conjunto de soluciones instrucciones
//realizar tareas- eventos -ejecucion numerica - fecth


// existes 3 tipos e funciones 

//funcions declarativa  

function nombreDelaFuncion(){
    //una ves declarada mi funcion todo el codigo que haga en su interior
    //se va ejecutar solo al llamar a la funcion -

    console.log("mi primera funcion")
}

// para poder llamar a la funcion necesito el nombr seguido de parentesis 
//ua vez que llame a la funion el codigo se ejecutara 

nombreDelaFuncion()

//una funcion es creada para poder retutilizar codigo 
//una de las misiones de la funcion es hacer un trabjao repetitivo 
//al estar este trabajo em una ufuncion solo ncesito escrubur el codigo en una variable

// una funcion puede recibir parametros (son variavble que les pasa al definirla s
//estos paramtereo van dentro de los parentesis al iniciar la funcion )


function sumar(){
    numero1=20 ;
    numero2=30  
 
   return (numero1 * numero2)  

}
   console.log("suma",sumar())


// tipos de funciones 
//funcion declartiva 
function suma (a,b,y){
    return a+b-y
}
console.log("suma",suma(100,20,10))


//funcion expresiva o anonima 
// es la que se declara dentro de una variable 

let suma2 = function(a,b){
    return a+b
}

console.log("suma2", suma2(20,20))

//arrow funcion  - funcion flecha 

const suma3 =(a,b,y)=>{
return a+b-y
}

console.log("suma3",suma3(20,20,20))

//funciones flecha cuando solo tien un argumento o parametro no nescia parentesis

const saludar =(nombre,apellido)=>{
 //como imprime una manehra mas elegante 
 //reurn "hola mi nombre es" + nombre "y mi apellido es" + apellido
    return `hola mi nombres es ${nombre} y mi apellido es ${apellido}`
}

console.log(saludar("guillermo","sifuentes"))

const hello =()=>"hola grupo 19"

console.log(hello())