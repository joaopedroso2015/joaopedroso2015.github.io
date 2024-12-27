function calcularArea() {
  const raioInput = document.getElementById('raio');
  const raio = parseFloat(raioInput.value);

  if (isNaN(raio)) {
    alert('Por favor, insira um valor numérico válido para o raio.');
    return;
  }

  const pi = 3.14159;
  const area = pi * raio * raio;
  document.getElementById('resultado').textContent = `A área da circunferência é: ${area.toFixed(2)} unidades quadradas.`;
}
