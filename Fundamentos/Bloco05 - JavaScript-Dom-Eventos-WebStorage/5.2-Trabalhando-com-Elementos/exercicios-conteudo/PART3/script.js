//1. Crie um irmão para elementoOndeVoceEsta.

let irmaoElementoOnde = document.querySelector("#pai");
newDiv = document.createElement("section");
newDiv.id = "quintoFilho";
irmaoElementoOnde.appendChild(newDiv);

//2. Crie um filho para elementoOndeVoceEsta.

let filhoElementoOnde = document.querySelector("#elementoOndeVoceEsta");
createDiv = document.createElement("section");
createDiv.id = "terceiroFilhoDoFilho";
filhoElementoOnde.appendChild(createDiv);

//3. Crie um filho para primeiroFilhoDoFilho.

let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
newSection = document.createElement("section");
newSection.id = "primeiroBisnetoDoPai";
primeiroFilhoDoFilho.appendChild(newSection);

//4. A partir desse filho criado, acesse terceiroFilho.

console.log(
  document.querySelector("#primeiroBisnetoDoPai").parentNode.parentNode
    .nextElementSibling
);

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
let pai = document.getElementById("pai");

//#primeiroFilho

pai.removeChild(pai.firstElementChild);

//#terceiroFilho

pai.removeChild(pai.childNodes[4]);

//#quartoEUltimoFilho

pai.removeChild(pai.childNodes[5]);

//#quintoFilho

pai.removeChild(pai.childNodes[6]);

//#segundoEUltimoFilhoDoFilho
let filhoDoFilho = document.getElementById("elementoOndeVoceEsta");

filhoDoFilho.removeChild(filhoDoFilho.childNodes[3]);

//#terceiroFilhoDoFilho

filhoDoFilho.removeChild(filhoDoFilho.childNodes[4]);
