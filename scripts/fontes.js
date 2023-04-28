function atualizarTextoFormatado() {
    var texto = document.getElementById("texto").value;
    var fonte = document.getElementById("fonte").value;
    var textoFormatado = texto;
    document.getElementById("texto-formatado").value = textoFormatado;
    document.getElementById("texto-formatado").style.fontFamily = fonte;
  }

  function copiarTexto() {
    var textoFormatado = document.getElementById("texto-formatado").value;
    navigator.clipboard.writeText(textoFormatado);

    var divMensagem = document.createElement("div");
    divMensagem.innerText = "Texto copiado com sucesso!";
    divMensagem.style = "background-color: #4CAF50; color: white; padding: 10px; text-align: center; position: fixed; bottom: 10px; left: 50%; transform: translateX(-50%); z-index: 1;";

    document.body.appendChild(divMensagem);

    setTimeout(function() {
      document.body.removeChild(divMensagem);
    }, 3000);
  }