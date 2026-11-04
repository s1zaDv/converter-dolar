function conversor(valor) {
  let dolar = 5.47;
  valor *= dolar;

  return valor;
}

function mostrarConversao() {
  let valor = document.querySelector('#valor').value;

  let resultado = conversor(valor);

  document.querySelector('#resultado').innerHTML = `R$ ${resultado.toFixed(2)}`;
}
