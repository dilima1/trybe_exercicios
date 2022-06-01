const validation = new window.JustValidate("#form");
const botaoEnviar = document.getElementById("botao-enviar");
const botaoLimpar = document.getElementById("botao-apagar");
const condicaoOne = document.getElementById("condicao1");
const condicaoTwo = document.getElementById("condicao2");
const enviarFoto = document.getElementById("uploadImg");
const nome = document.getElementById("nome-part");
const email = document.getElementById("email-part");
const resposta = document.getElementById("resposta-usuario");
const data = document
  .getElementById("date")
  .DatePickerX.init([{ format: "dd-mm-yyyy" }]);

function desabilitarBotao(e) {
  e.preventDefault();
}

botaoEnviar.addEventListener("click", desabilitarBotao);

function limparCampos() {
  nome.value = "";
  email.value = "";
  resposta.value = "";
  data.value = "";
  condicaoOne.checked = false;
  condicaoTwo.checked = false;
}

botaoLimpar.addEventListener("click", limparCampos);

function enviarFotos() {
  if (condicaoTwo.checked == true) {
    enviarFoto.disabled = false;
  } else {
    enviarFoto.disabled = true;
  }
}

condicaoTwo.addEventListener("click", enviarFotos);

// alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela

function verificaCampos() {
  // if (
  //   nome.value.length >= 10 &&
  //   nome.value.length <= 40 &&
  //   email.value.length >= 10 &&
  //   email.value.length <= 50 &&
  //   resposta.value.length <= 500
  // ) {
  //   alert(
  //     "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip"
  //   );
  // } else {
  //   alert("Dados Inválidos");
  // }

  validation.addField("#nome-part", [
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Valor Incorreto",
    },
    {
      rule: "maxLength",
      value: 40,
    },
  ]);
}

botaoEnviar.addEventListener("click", verificaCampos);
