const API = "https://pokeapi.co/api/v2/pokemon/";

// funcion asincrona que me retornará los datos de un pokemon al azar.

const pokemonGenerator = async (url_api) => {
  try {
    const data = await fetch(url_api)
      .then((response) => response.json())
      .catch((error) => console.error(error));

    // A pesar de haber 1118 Pokemones segun la documentacion de la API, aparentemente solo
    // tienen registrado hasta el 898. Para eivtar errores decidí poner ese limite.

    const randomNumber = Math.floor(Math.random() * (898 - 1)) + 1;

    const pokemon = await fetch(`${url_api}${randomNumber}`)
      .then((response) => response.json())
      .catch((error) => console.error(error));

    renderInHTML(data, pokemon);
  } catch (error) {
    console.error(error);

    pokemonGenerator(url_api);
  }
};

// Creo la funcion donde se insertarán los datos en el HTML

const renderInHTML = (data, pokemon) => {
  const image = pokemon.sprites.front_default;
  const numberOfPokemons = document.getElementById("numberOfPokemons");
  const nameOfPokemons = document.getElementById("nameOfPokemon");
  const idOfPokemons = document.getElementById("idOfPokemon");
  const typeOfPokemons = document.getElementById("typeOfPokemon");
  const secondaryType = document.getElementById("secondaryType");
  const imageOfPokemons = document.getElementById("imageOfPokemon");

  numberOfPokemons.innerHTML = `<strong>Pokemon count: ${data.count}</strong>`;
  nameOfPokemons.innerHTML = `<strong>Name: ${pokemon.name}</strong>`;
  typeOfPokemons.innerHTML = `<strong>Type: ${pokemon.types[0].type.name}</strong>`;

  // En caso de que el Pokemon tenga mas de un sub-tipo, aqui lo imprimiré en pantalla

  if (pokemon.types.length > 1)
    secondaryType.innerHTML = `<strong>Secondary type: ${pokemon.types[1].type.name}</strong>`;
  else secondaryType.innerHTML = `<p display: hidden></p>`;

  idOfPokemons.innerHTML = `<strong>N°: ${pokemon.id}</strong>`;
  imageOfPokemons.innerHTML = `<img src='${image}'></img>`;
};

pokemonGenerator(API);
