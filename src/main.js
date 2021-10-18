import { filterData, sortData, average } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

let finalArray = 20;
const POKEMONS = data.pokemon;
let filteredPokemons = POKEMONS;
average(POKEMONS);
show(POKEMONS.slice(0, finalArray))

function show(itens) {
  document.getElementById("listaPokemon").innerHTML = "";
  for (let pokemon of itens) {
    const card = `
    <section  id = "card" class ="card-container" tabindex="0">
      <div class="thecard">
        <div class="card-front" tabindex="0">
          <div class = "title">
            <p id = "namePok"> ${pokemon.name}</p>
            <p id = "num">#${pokemon.num}</p>
          </div>
          <img id = "img" src = "${pokemon.img}">
          <div class = "tipos">
            <p class= "types-pokemon"> ${pokemon.type[0]} </p>
            <p class= "types-pokemon type1"> ${pokemon.type[1]} </p>
          </div>
        </div>
        <div class="card-back">
          <div class = "infos">
            <p class= "test" >${pokemon.generation["num"]} </p>
            <p class= "numbers">Altura ${pokemon.size["height"]} </p>
            <p class= "numbers">Peso ${pokemon.size["weight"]} </p>
            <p class= "numbers"><i class="far fa-signal-alt"></i> Média Força - ${pokemon.stats["medCal"]} </p>
          </div>
        </div>
      </div>
    </section>`
    document.getElementById("listaPokemon").innerHTML += card
  }
}
const type1 = document.querySelector('.type1')
const typeArray = pokemon.type
console.log(pokemon)
if(typeArray.length < 1){
  
  console.log(type1)
  type1.style.visibility='hidden'
}

const type = document.getElementById('type');

type.addEventListener("change", function () {
  filteredPokemons = POKEMONS;
  if (type.value !== "") {
    filteredPokemons = filterData(filteredPokemons, type.value)
  }
  show(filteredPokemons);
});

const order = document.getElementById('order');

order.addEventListener("change", function (e) {
  e.preventDefault();
  const orderValues = order.value.split("/");
  const sortnames = sortData(filteredPokemons, orderValues[0], orderValues[1]);
  show(sortnames);
});

const searchData = function (data, search) {
  const pokSearch = data.filter(
    function (pokemon) {
      return pokemon.name.includes(search)
    });
  return pokSearch;
}

let valorInput = document.getElementById("search")
valorInput.addEventListener("keyup", function () {
  let resulSearch = searchData(data.pokemon, valorInput.value)
  show(resulSearch)
})

document.getElementById("btnRefresh").addEventListener("click", function () {
  finalArray = 20
  show(POKEMONS.slice(0, finalArray))
})
document.getElementById("btnShowMore").addEventListener("click", function () {
  finalArray += 20
  show(POKEMONS.slice(0, finalArray))
});
document.getElementById("btnShowAll").addEventListener("click", function () {
  show(POKEMONS)
});
