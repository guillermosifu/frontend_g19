/**
 * Logica para el pokedex
 */

const pokemonContainer = document.querySelector("#row-pokemons");
// html from modal
const pokemonName = document.querySelector("#pokemon-name");
const pokemonImg = document.querySelector("#pokemon-img")
const pokemonPeso = document.querySelector("#pokemon_peso")
const pokemonHabilidad1= document.querySelector("#pokemon_habilidad1")
const pokemonHabilidad2= document.querySelector("#pokemon_habilidad2")
const pokemonTipo = document.querySelector("#pokemon_tipo")
const pokemonTipo2 = document.querySelector("#pokemon_tipo2")

// vamos a crear una funcion para obtener los datos
const obtenerPokemones = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await response.json();

  console.log(data.results);
 
};

// vamos a crear a una funcion la cual se encargue de poder pintar nuestros pokemones
const setPokemonsInView = (results) => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  results.map(async (result, index) => {
    // Por cada iteracion crea la variable html con el contendi de div que ocupa el
    // 25% porque usa col-md-3
    // dentro creo otro con la clase card y dentro del creo al card-body

    // cuando index = 0 + 1
    // index = 1 + 1
    // !aca usamos await porque getColorPokemon es una funcion async por
    // !por ende no se cuanto demore en reponder
   

    const html = `
      <div class="col-md-3 mt-3">
        <div class='card' '>
          <img 
            class='card-img-top mt-2'
            width='100'
            height='100'
            src='${imgUrl}${index + 1}.svg'
          >
          <div class='card-body text-center'>
            <h6 class='text-title text-white'>N° ${index + 1}</h6>
            <h4 class='text-title'>${result.name}</h4>
          </div>
          <button class='btn btn-primary' onclick='obtenerDetallePokemon("${
            result.url
          }")' data-bs-toggle='modal' data-bs-target='#modalPokemon'>ver detalle</button>
        </div>
      </div>
    `;
    // despues de crear el html basico concatenamos el html el container
    pokemonContainer.innerHTML += html;
  });
};

// cuando debe ejecutarse?
const obtenerDetallePokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("detalle", data);

};




