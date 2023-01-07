// 1. crear las variables "puntuación1", "puntuación2", "puntuación3" y
//    asignar valores (0-100)
// 2. calcular la puntuación total y la puntuación media, y asignarlas a las variables.
// 3. registre la puntuación total y la puntuación media

// 4. crea la variable "place" y asigna 20
// 5. crea la variable "personas" y asigna 7
// 6. calcular placas restantes y asignar a la variable
// 7. agregue uno a las placas restantes
// 8. cree una variable de mensaje y muestre 'Hay (su valor va aquí) placas disponibles' - concatenación de cadenas
// 9. mensaje de registro


const score1 = 98;
const score2 = 75;
const score3 = 45;


const totalScore = score1 + score2 + score3;
const avgScore = totalScore / 3 ;

const plates = 20 ;
const people = 7 ;

let remaingPlates = 20 % 7;

remaingPlates++;


const message = 'there are ' + remaingPlates +' plates available';
console.log(message) 

