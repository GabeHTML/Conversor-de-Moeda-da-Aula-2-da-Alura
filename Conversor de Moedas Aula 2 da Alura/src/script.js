function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.08;

  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmReal = valorEmEuroNumerico * 5.55;

  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmLibraNumerico = parseFloat(valor);

  var valorEmReal = valorEmLibraNumerico * 6.68;

  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
