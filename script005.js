// script.js
function calculateSquareRoot() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (numberInput === "") {
        resultDiv.textContent = "Por favor, insira um número.";
        return;
    }

    const number = parseFloat(numberInput);

    if (number < 0) {
        resultDiv.textContent = "Não é possível calcular a raiz quadrada de um número negativo.";
    } else {
        const squareRoot = Math.sqrt(number);
        resultDiv.textContent = `A raiz quadrada de ${number} é ${squareRoot.toFixed(2)}.`;
    }
}