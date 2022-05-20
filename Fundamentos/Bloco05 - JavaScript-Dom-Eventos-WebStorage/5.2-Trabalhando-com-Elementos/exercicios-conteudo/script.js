//1. Acesse o elemento elementoOndeVoceEsta.

function primeiroQuesito() {
  console.log(document.querySelectorAll("#elementoOndeVoceEsta"));
}

primeiroQuesito();

//2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

function segundoQuesito() {
  const adicionarCor = document.querySelector(
    "#elementoOndeVoceEsta"
  ).parentNode;

  adicionarCor.style.color = "red";
}

segundoQuesito();

//3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

function terceiroQuesito() {
  const adicionaText = (document.querySelector(
    "#primeiroFilhoDoFilho"
  ).innerText =
    "Esse texto foi inserido via javaScript, acessando a o ID: primeiroFilhodoFilho.");
}

terceiroQuesito();

// 4. Acesse o primeiroFilho a partir de pai.

function quartoQuesito() {
  console.log(document.querySelector("#pai").firstElementChild);
}

quartoQuesito();

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

function quintoQuesito() {
  console.log(
    document.querySelector("#elementoOndeVoceEsta").previousElementSibling
  );
}

quintoQuesito();

//6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

function sextoQuesito() {
  console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling);
}

sextoQuesito();

//7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

function setimoQuesito() {
  console.log(
    document.querySelector("#elementoOndeVoceEsta").nextElementSibling
  );
}

setimoQuesito();

//8. Agora acesse o terceiroFilho a partir de pai.

function oitavoQuesito() {
  console.log(document.querySelector("#pai").children[2]);
}

oitavoQuesito;

// parentNode: retorna o nó pai.
// parentElement: retorna o elemento pai.
// childNodes: retorna um NodeList com todos os nós filhos.
// children: retorna um HTMLCollection com todos os elementos filhos.
// firstChild: retorna o primeiro nó filho.
// firstElementChild: retorna o primeiro elemento filho.
// lastChild: retorna o último nó filho.
// lastElementChild: retorna o último elemento filho.
// nextSibling: retorna o próximo nó.
// nextElementSibling: retorna o próximo elemento.
// previousSibling: retorna o nó anterior.
// previousElementSibling: retorna o elemento anterior.
