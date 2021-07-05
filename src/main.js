import { filterData, sortData, average } from './data.js';
import data from './data/pokemon/pokemon.js';



let POKEMONS = data.pokemon;
average(POKEMONS);


function exibir(itens) {
  
  document.getElementById("listaPokemon").innerHTML = "";
  for (let pokemon of itens) {
    
    const card = `<section  id = "card" class ="card fire">
    <div class = "titulos">
      <p id = "namePok"> ${pokemon.name}</p>
      <p id = "num"> ${pokemon.num}</p>
    </div>
    <img id = "img" src = "${pokemon.img}">
    <div class = "tipos">
      <p> ${pokemon.type} </p>
    </div>
    <div class = "indices">
      <p> ⚔️${pokemon.stats["base-attack"]} </p>
      <p> 🛡️${pokemon.stats["base-defense"]} </p>
      <p> ❤️${pokemon.stats["base-stamina"]} </p>
    </div>
    <p> 📊 ${pokemon.stats["medCal"]} </p>
  </section>`
    
    document.getElementById("listaPokemon").innerHTML += card
  }
}
exibir(POKEMONS)


const type = document.getElementById('type');

type.addEventListener("change", function () {
  if (type.value !== "") {
    POKEMONS = filterData(data.pokemon, type.value)
  }
  else {
    POKEMONS = data.pokemon;
  }
  exibir(POKEMONS)
});


const order = document.getElementById('order');

order.addEventListener("change", function (e) {
  e.preventDefault();

  const orderValues = order.value.split("/");
  const sortnames = sortData(POKEMONS, orderValues[0], orderValues[1]);
  exibir(sortnames);
});













const buscaData = function (data, campoBusca) {
  const pokBusca = data.filter(
    function (pokemon) {
      return pokemon.name.includes(campoBusca)
    });
  return pokBusca;
}

let botao = document.getElementById("btnBusca")
botao.addEventListener("click", function(event){
  let valorInput = document.getElementById("campoBusca").value
  let resulBusca = buscaData(data.pokemon, valorInput)
  console.log(buscaData(data.pokemon, valorInput))
  exibir(resulBusca)
  event.preventDefault();
})