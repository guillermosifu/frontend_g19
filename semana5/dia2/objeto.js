//un objeto s una cantidad independite de datos . diferentes tipos de datos 

//Carro = Atributos ese carro -llantas - timpo -alarma 
//numero de puertos 
//color
//placa
//motor
//hp 

// un objeto se defini un key (llave ) un value (valor)

//crear el bjeto carro 

const carro = {
    color:"azul",
    motor:2.0,
    modelo: "GTR",
    marca:"nissan",
    nuevo:true,
};

const persona = {
    edad:35,
    nombre:"juanito",
    sexo:"M",
    talla:1.75,
    estadoCivil : "cazado",
    mayorEdad : true,
    donanteOrganos : false,
    tatuajes: true
}

//se captur un key  luego de colocar el . a lado del objeto 
console.log("carro",carro.color)
console.log("persona",persona)

//se podra agregar mas atributos o keys? 
persona.celular = 999999999;

//segunda forma de agregar un akeys

persona["profesion"]="ingeniero";

//reto: reemplazar el atributo juanito y el estadocivil del objetc persona,
