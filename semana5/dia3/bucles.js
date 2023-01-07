//bucle es una estructura repetitiva , es decir hace algo muchas veces

//son normalmeento usados para poder leer arrays , porque un bucle me va repetir
//leer cada elemento indepenedientemente

// for , en españo es para , y el bucle mas antiguo y conocido
//

//iterador  => indice de mi bucle
// i++
//i = i+i
//inidca que se hara de 1 en 1

// for(let j = 0;j <=10; j+=3){
// console.log("iterador",j);}

// reealizar  bucles for - de incremento de 5 -de 10 y de 50 100

//como recorremo una arrays con for ?

const alumnos = ["pepe", "guille", "carlos", "luis", "ana", "fernando"];

// for(let i = 0; i < alumnos.length; i++){
//     console.log(alumnos[i]);
// }

// const numeros =[1,2,3,4,5,6,7,8,9,10];

// for(let j = 0; j < numeros.length; j++){
//     // como haria si quiero imprimer solo los pares??

//     if(numeros[j]% 2 === 0){
//         console.log(numeros[j])
//     }
// }

//----------------------------------

const laptops = [
  {
    marca: "lenovo",
    imagen: "url",
    nombre: "ide 23",
    vendedor: "falabella",
    precio: 2500,
    caracteristicas: {
      procesador: "i7",
      tarjetaDeVideo: "integrada",
      discoDuro: "solido",
    },
  },
  {
    marca: "mac",
    imagen: "url",
    nombre: "catalia",
    vendedor: "ripley",
    precio: 3500,
    caracteristicas: {
      procesador: "i3",
      tarjetaDeVideo: "independiente",
      discoDuro: "solido",
    },
  },
];

for (o = 0; o < laptops.length; o++) {
  console.log(laptops[o].caracteristicas.procesador);
}

//escrbir un programa que pida una frase y escriba cuantas veces
// aparecen cada una de las vocales...

const contarVocales = (frase) => {
  const fraseMayusucula = frase.toUpperCase();
  //paa podr saber cuantas voacles tengo , necsito un contador
  //este contador se va encargar de guaradr cuantas voacales tengo
  let contador = 0;

  for (let i = 0; i < fraseMayusucula.length; i++) {
    const letra = fraseMayusucula[i];

    if (
      letra === "A" ||
      letra === "E" ||
      letra === "I" ||
      letra === "O" ||
      letra === "U"
    ) {
      //contador = contador +1;
      contador++;
    }
  }

  return `la frase tiene ${contador} vocales`
};

console.log(contarVocales("hola me llamo juan"));
console.log(contarVocales("aeiou"));
console.log(contarVocales("guillermo"))


//escribir un programa que es escriba en pentalla los divisores comunes
//de dos numero dados 

