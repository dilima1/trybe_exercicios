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
