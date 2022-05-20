const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const paragraph2 = document.getElementById("paragraph2");
paragraph2.style.color = "red";

// 1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.getElementById("page-title").innerText = "A Cabana";

// 2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

document.getElementById("second-paragraph").innerText =
  "Ola, eu sou um texto que fui inserido via Java Script.";

//3. Por fim, recupere o subtítulo e altere-o também.

document.getElementById("subtitle").innerText =
  "Titulo alterado via JavaScript";

//    Utilizando o mesmo template de exercício anterior:

//     Adicione uma classe igual para os dois parágrafos.
//adicionado - class="paragrafos"

//     Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;

//     Altere algum estilo do primeiro deles.
document.getElementsByClassName("paragrafos")[0].innerHTML =
  "Eu fui alterado via JavaScript";

//     Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.

document.getElementsByTagName("h4")[1].innerText =
  "Titulo Alterado via javaScript utilizando o TagName.";
