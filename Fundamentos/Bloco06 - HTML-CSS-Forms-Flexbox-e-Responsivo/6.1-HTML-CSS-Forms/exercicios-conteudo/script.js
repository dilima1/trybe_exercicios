// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

// 1 - Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

function disableLink(e) {
  e.preventDefault();
}

HREF_LINK.addEventListener("click", disableLink);

//  2 - Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

function disableCheck(e) {
  e.preventDefault();
}

INPUT_CHECKBOX.addEventListener("click", disableLink);

// 3 -

function disableTeclas(e) {
  if (e.key !== "a") {
    e.preventDefault();
  }
}

INPUT_TEXT.addEventListener("keypress", disableTeclas);
