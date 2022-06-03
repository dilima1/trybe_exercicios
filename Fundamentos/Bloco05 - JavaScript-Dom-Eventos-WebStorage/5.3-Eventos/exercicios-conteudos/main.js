const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele;

// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//A primeira caixa esta com uma class chamda tech que esta aplicando a propriedade transforn: translateY, isso esta fazendo com que a mesma fique em outra distantecia em comparação as demais.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
let incluirClasse = document.querySelector(".container").children;

incluirClasse[0].addEventListener("click", inclusao);
incluirClasse[1].addEventListener("click", inclusao1);
incluirClasse[2].addEventListener("click", inclusao2);

function inclusao() {
  incluirClasse[0].classList.toggle("tech");
}

function inclusao1() {
  incluirClasse[1].classList.toggle("tech");
}

function inclusao2() {
  incluirClasse[2].classList.toggle("tech");
}

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

//adionei a função toogle junto a classList para fazer fazer com que ao clicar apareça a class tech e apos clicar novamente a class saia.

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

let caixaTexto = document.getElementById("input");
let incluirTexto = document.querySelector("#first-li");
let incluirTexto2 = document.querySelector("#second-li");
let incluirTexto3 = document.querySelector("#third-li");

caixaTexto.addEventListener("keypress", function () {
  if (incluirTexto.className === "tech") {
    incluirTexto.innerText = caixaTexto.value;
  }
  if (incluirTexto2.className === "tech") {
    incluirTexto2.innerText = caixaTexto.value;
  }
  if (incluirTexto3.className === "tech") {
    incluirTexto3.innerText = caixaTexto.value;
  }
});

// alterarElemento.addEventListener("click", function () {
//   alterarElemento.innerText = "teste";
// });

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

let redirecionar = document.querySelector("h3");

redirecionar.addEventListener("dblclick", function () {
  window.location.href = "http://www.devmedia.com.br";
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
let mudarCor = document.querySelector("h3");
mudarCor.addEventListener("mouseover", function () {
  mudarCor.style.color = "red";
});

mudarCor.addEventListener("mouseout", function () {
  mudarCor.style.color = "white";
});

// Segue abaixo um exemplo do uso de event.target:

// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = "Opção reiniciada";
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
// }

// firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
