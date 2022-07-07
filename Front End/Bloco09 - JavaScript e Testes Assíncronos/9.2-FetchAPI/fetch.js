const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

//fetchJoke();


const fetchJoke2 = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

//fetchJoke2();


const fetchJoke3 = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

//fetchJoke3();

const conselhoAleatorio = () => {
  const url = 'https://api.adviceslip.com/advice';
  const request = fetch(url)
    .then((response) => response.json())
    .then(({ slip: { id, advice }}) => console.log(id, advice))
    .catch((error) => console.log('Ops, algo deu errado', error.errno));
      // const { slip } = object;
      // const { id, advice } = slip;
      // console.log(id, advice);
};

conselhoAleatorio();

// Algo deu errado :(
// TypeError: Only absolute URLs are supported