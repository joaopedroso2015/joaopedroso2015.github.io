// script.js
function calcularArea() {
  const raio = document.getElementById("raio").value;
  const pi = 3.14159;
  const area = pi * raio * raio;

  document.getElementById("resultado").textContent = `A área do círculo é: ${area.toFixed(2)}`;
}