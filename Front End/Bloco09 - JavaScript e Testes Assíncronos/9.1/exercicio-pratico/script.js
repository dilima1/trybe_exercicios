//  1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// R - A ordem de finalização das linhas comentadas é: A, B e, por fim, C.

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C

//  2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// R - A ordem de finalização das linhas comentadas é: A, C e, por fim, B.

const planetDistanceFromSun2 = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars2 = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus2 = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter2 = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun2(mars2)); // A
setTimeout(() => console.log(planetDistanceFromSun2(venus2)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun2(jupiter2)), 2000); // C

//  3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos

//  4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay());
};

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

//  5 - Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura.

const messageDelay2 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature2 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature2 = (onSuccess) => {
  const currentTemperature = getMarsTemperature2();
  setTimeout(() => onSuccess(currentTemperature), messageDelay2());
};

sendMarsTemperature2(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature2(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

//  6 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.

const messageDelay3 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature3 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit2 = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit2 = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet2 = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature3 = (onSuccess, onError) => {
  const currentTemperature = getMarsTemperature3();
  const messageSuccessfullySent = Math.random() <= 0.6;
  setTimeout(() => {
      if(messageSuccessfullySent) onSuccess(currentTemperature)
      else onError('Robot is busy');
  }, messageDelay3());
}


// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature3(temperatureInFahrenheit2, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature3(greet2, handleError);