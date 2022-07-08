function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}

async function fetchPokemon(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    const data = await response.json();
    const pokemon = {
      name: data.name,
      imageUrl: data.sprites.front_default
    }
    append(pokemon);
    
  } catch (error) {
    console.log('Vishi deu erro')
  }
}

async function requestPokemon() {
  await fetchPokemon('pikachu');
  await fetchPokemon('bulbasaur');
  await fetchPokemon('squirtle');
  await fetchPokemon('dratini');
  await fetchPokemon('charmander');
}

window.onload = requestPokemon;