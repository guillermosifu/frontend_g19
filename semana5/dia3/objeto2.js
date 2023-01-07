// crear un objeto persona

// creen que un objeto puede tener una funcion??

const persona = {
    nombre : "juanito",
    edad: 30,
    talla: 1.80,
    calcularEdad : function(){    
        console.log("calculando la edad");
    },
};


//la primera forma de llamar a una funcion que esta dentro de un objerto 

console.log("1era forma");
persona.calcularEdad();

// 2da forma de llamar un FUNCION dentro de un objeto 

console.log("2da forma");
persona.calcularEdad;

// vamoa a ver como cceder a las ropiedad de un objeto desde una funcion interna
//this  : esto va permitir accede a los dagtos del objeto padre 

const computadora ={
    color:"azul",
    marca:"hp",
    nuevo: true,
    mostrarDetalle : function(){
        //color no pertene a al ambito (scope)
    console.log("color",this.color )
    },

    mostrarDetalleCompleto : function(){
        console.log(
            "Deatalle",
            `color : ${this.color} marca :${this.marca} es nuevo? ${
                this.nuevo ? "si" : "no"} `
        );
    },
   
}

computadora.mostrarDetalle();
computadora.mostrarDetalleCompleto() 


// se podra tner un array dentro de un objeto ?


const alumno = {
    nombre: "juanito",
    notas:[10,5,8,9],
    cursos :["html","css","js"]
}

console.log("notas", alumno.notas)

//creareos un arrayy de objetos 


const alumnos =[
    {
        nombre:"luciano",
        edad:18,
        promedio:15
    },
    {
        nombre:"pepe",
        edad:21,
        promedio:14,
        direccion : "callao",
    }
]
//como imprimir la nota de luciano 

console.log(`Nota de ${alumnos[0].nombre}`,alumnos[0].promedio)


//esta estructura tamb es conocida como JSON
//json es un formato de archivos 

const laptops = [
    {
        marca: "lenovo",
        imagen:"url",
        nombre: "ide 23",
        vendedor :"falabella",
        precio : 2500,
        caracteristicas:{
            procesador : "i7",
            tarjetaDeVideo : "integrada",
            discoDuro : "solido",
        }
    },
    {
        marca: "mac",
        imagen:"url",
        nombre: "catalia",
        vendedor :"ripley",
        precio : 3500,
        caracteristicas:{
            procesador : "i3",
            tarjetaDeVideo : "independiente",
            discoDuro : "solido",
        },
    }

]
// esto es un bucle
for (o = 0; o <= laptops.length; o++){
    console.log(laptops[o].marca)
}



//--------------------------------------------


const components = {
    nombre : "lenovo ipad",
    caracteristicas:{
        ram:16,
        tarjeta : "3900 super",
        memoria : 512,
        extra:{
            pantalla:"4k"
        }
    }
}


console.log("componentes", components.caracteristicas.tarjeta)