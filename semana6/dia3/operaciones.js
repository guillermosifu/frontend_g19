function validarSiEsNumero(numero,tipo){
     return isNaN(numero) ? `Mensaje Error: no se puede ${tipo}` : numero;
}

// una forma diferente de r¿hacer parseint es colocando el signo + delante de cada parametro 
function sumar(numero1,numero2){
    const suma = +numero1 + +numero2

    return validarSiEsNumero(suma,"sumar")
   
}