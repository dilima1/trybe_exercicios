const API_URL1 = 'https://icanhazdadjoke.com/';
const API_URL2 = 'https://api.coincap.io/v2/assets';

const piada = document.getElementById('jokeContainer');
const cryto = document.getElementById('crypto');

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL1, myObject)
    .then((response) => response.json())
    .then(data => piada.innerHTML = data.joke );
};

const fetchCrypto = async () => {
  const coins = await fetch(API_URL2)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString())
    return coins;
};

const setCoins = async () => {
  const coins = await fetchCrypto();
  coins
  .filter((coin) => Number(coin.rank) <= 10)
  .forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${ coin.name } (${ coin.symbol }): ${ usdPrice.toFixed(2) }`;
    cryto.appendChild(newLi);
  })
}



window.onload = () => {
  fetchCrypto();
  fetchJoke();
  setCoins();
}