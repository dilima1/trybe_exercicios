const botaoEnviar = document.getElementById("botao-enviar");
const botaoLimpar = document.getElementById("botao-apagar");

function desabilitarBotao(e) {
  e.preventDefault();
}

botaoEnviar.addEventListener("click", desabilitarBotao);

function limparCampos() {
  document.getElementById("nome-part").value = "";
  document.getElementById("email-part").value = "";
  document.getElementById("resposta-usuario").value = "";
  document.getElementById("date").value = "";
  document.getElementById("condicao1").checked = false;
  document.getElementById("condicao2").checked = false;
}

botaoLimpar.addEventListener("click", limparCampos);
