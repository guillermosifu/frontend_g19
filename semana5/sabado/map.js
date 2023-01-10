// existen muchas funciones que no ayudan a leer arrays y objetos de una form secnilla
//map es un bucle que sirve pqrq poder lee arrelos y lo que lo hce especial
// es que este te retorna un array


const productos =[
    {
        name:"laptop",
        price :1500
    },
    {
        name:"celular",
        price :1800
    },
    {
        name:"monitor",
        price :2000
    }
]

productos.map((productito,index)=>{
    console.log("indices",index);
    console.log("producto",productito.price)
})

//-----------------------------------

const nombres =["guille","pedro","maria", "jose"]

nombres.map((nombre,indicador)=>{
    if(indicador >= 0){
        console.log(nombre)
    }
})


//----------------
//arrays de lugares name- ubicacion
//return name de los lugares 


const lugares =[
    {
        name:"tecsup",
        location: "san salvador"
    },
    {
        name:"codigo facilito",
        location:"lima"
    },
    {
        name:"conversa",
        location:"arequipa"
    }

]

lugares.map((place)=>{
    console.log(place.name)
})



// veamo como return un map 

const numeros =[1,2,3,4,5,6,7,8,9,10];

const operacionProducto = numeros.map((numerito)=>{
    return numerito * 2
})


console.log(operacionProducto)


//----------------------------

const producto2 =[
    {
        name:"laptop",
        price :1500
    },
    {
        name:"celular",
        price :1800
    },
    {
        name:"monitor",
        price :2000
    }
]

//reto cambair o modificar el precio al doble 

const precioCyberwow = producto2.map((producto)=>{
    //en cada vuelta del elemento modifiar el return
    //producto2={name:"laptop", price :1500}
    return{
        name:`Cyberwow ${producto.name}`,
        price:producto.price /2
    }
})

console.log("preciomodficado",precioCyberwow)

//escribir un programaita que muestre la tabla de multiplicar del 1 al 10 

const imprimirTable=(numero)=>{
    //esta instancia esta creanado un array
    const arrayDiez =[1.2,3,4,5,6,7,8,9,10]

    arrayDiez.map((table,index)=>{
        console.log("producto",numero *(index + 1))
    });

}

imprimirTable(3)

//------------------------------------------
//crear una array de numero y luego calculemos el cubo de cada numero 
// y hy qye guardarlo en una variable 

const numeroCubo=[1,2,3,4,5,6,7,8,9,10];
