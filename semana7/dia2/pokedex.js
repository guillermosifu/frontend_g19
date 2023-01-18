const pokemonContainer = document.querySelector("#row-pokemons");




//creamos la funcion async... obtener datos
const obtenerPokemones = async ()=>{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    const data = await response.json();
    console.log(data.results)
    setPokemonsInView(data.results)

}




//vamos a crear una funcion la cual pinte nuestos pokemons en panatlla 

const setPokemonsInView=()=>{
    const imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"

results.map(async(result,index)=>{
    //por cada iteracion crea ula variabale html con elcontenido del div que ocupa 
    //-4 cardtilla 


    const html =`
    <div class ="col-md-3 mt-3">
    <div class="card">
    <img
    class ="card-img-top mt-2"
    width ='100'
    height ='100'
    src='${imgUrl}${index + 1}.svg'>
    <div class='card-body text-center'>
    <h6 class='text-title text-white>N..-${index + 1}</h6>
    <h4 class ='text-title'>${result.name}</h4>
    </div>
    <button class = 'btn btn-primary' onclick='obtenerDetallePokemon("${result.url}")' data-bs-toggle="modal" data-bs-target='#modalPokemon'>ver detalles</button>
    </div>
    </div>
    `;
    //despues de craer todo el html basico conctenamos el html con el container 
pokemonContainer.innerHTML +=html;
});

};
//cuando debe ejcutarse?}

