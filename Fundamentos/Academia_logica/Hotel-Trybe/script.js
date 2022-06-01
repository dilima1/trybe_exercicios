const checkin = document.querySelector(".inputCheckin");
const checkout = document.querySelector(".inputCheckout");
const bedroom = document.querySelectorAll(".bedroom");
const select = document.querySelector(".nPessoas");
const textArea = document.querySelector(".obs");
const btnSubmit = document.querySelector("#submit-btn");
const btnClear = document.querySelector("#clear-btn");
const ol = document.querySelector("ol");

function getQuarto() {
  for (let i = 0; i < bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPessoas() {
  return select.options[select.selectedIndex].value;
}

function getData(value) {
  const valueDate = value + "T03:00:00.000Z";
  data = new Date(valueDate);
  dataFormatada = data.toLocaleDateString("pt-BR");
  return dataFormatada;
}

function fazerReserva() {
  let reservaDia = document.createElement("li");

  reservaDia.innerHTML =
    "Reserva para dia " + checkin.value + " até o dia " + checkout.value;

  ol.appendChild(reservaDia);

  //Reserva para o dia xx/xx/xxxx até o dia xx/xx/xxxx
}

btnSubmit.addEventListener("click", fazerReserva);
