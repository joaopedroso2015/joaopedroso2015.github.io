function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        alert('Por favor, insira valores numéricos válidos para peso e altura.');
        return;
    }

    const imc = peso / (altura * altura);
    const resultadoElement = document.getElementById('resultado');

    let resultado;
    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (imc < 25) {
        resultado = 'Peso normal';
    } else if (imc < 30) {
        resultado = 'Sobrepeso';
    } else {
        resultado = 'Obesidade';
    }

    resultadoElement.textContent = `Seu IMC é: ${imc.toFixed(2)} - ${resultado}`;
}