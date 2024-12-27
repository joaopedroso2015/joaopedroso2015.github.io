function calcularArea() {
  const raio = document.getElementById('raio').value;
  const pi = 3.14159;
  const area = pi * raio * raio;
  document.getElementById('resultado').textContent = `A área da circunferência é: ${area.toFixed(2)} unidades quadradas.`;
}