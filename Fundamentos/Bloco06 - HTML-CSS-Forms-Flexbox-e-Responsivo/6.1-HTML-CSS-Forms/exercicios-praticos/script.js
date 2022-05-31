const botaoEnviar = document.getElementById("botao-enviar");

function desabilitarBotao(e) {
  e.preventDefault();
}

botaoEnviar.addEventListener("click", desabilitarBotao);
