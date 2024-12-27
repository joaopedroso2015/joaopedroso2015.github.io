// script.js
function calcularRaiz() {
  const numero = document.getElementById('numero').value;
  const resultado = Math.sqrt(numero);
  document.getElementById('resultado').textContent = `A raiz quadrada de ${numero} é: ${resultado}`;
}

function limparCampo() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').textContent = '';
}