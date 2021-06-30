
export const filterData = function (data, typeselect) {
  const pokemon_filtrados = data.filter(
    function (pokemon) {
      return pokemon.type.includes( typeselect)
    });
  return pokemon_filtrados;
}

export const sortData = (data, sortBy, sortOrder) => {
  const allpokemons = data;

  if (sortOrder === 'asc') {
    allpokemons.sort(
      function (a, b) {
        if (a[sortBy] < b[sortBy])
          return -1;
        if (a[sortBy] > b[sortBy])
          return 1;
      }
    )
  } else {
    allpokemons.sort(
      function (a, b) {
        if (a[sortBy] > b[sortBy])
          return -1;
        // if (a[sortBy] < b[sortBy])
        //   return 1;
      }
    )
  }
  return allpokemons;
}

export const average = function (data) {
  data.map(function (item) {
    let medCal = (parseInt(item.stats["base-attack"])) + parseInt(item.stats["base-defense"]) + parseInt(item.stats["base-stamina"]) / 3
    return medCal
  })
}