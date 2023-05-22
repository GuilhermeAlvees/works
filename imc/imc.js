document.addEventListener('DOMContentLoaded', function() {
    const pesoInput = document.querySelector('#peso');
    const alturaInput = document.querySelector('#altura');
    const calcularBtn = document.querySelector('#calcular');
    const resultadoDiv = document.querySelector('#resultado');
    const nomeInput = document.querySelector('#nome');
  
    calcularBtn.addEventListener('click', function() {
      const peso = parseFloat(pesoInput.value);
      const altura = parseFloat(alturaInput.value);
      const imc = peso / (altura ** 2);
  
      if (imc <= 18.5) {
        resultadoDiv.textContent = `${nomeInput.value}, seu IMC é de ${imc.toFixed(2)}. Você está abaixo do peso.`;
      } else if (imc >= 18.6 && imc <= 24.9) {
        resultadoDiv.textContent = `${nomeInput.value}, seu IMC é de ${imc.toFixed(2)}. Você está com o peso normal.`;
      } else if (imc >= 25 && imc <= 29.9) {
        resultadoDiv.textContent = `${nomeInput.value}, seu IMC é de ${imc.toFixed(2)}. Você está com sobrepeso.`;
      } else if (imc >= 30 && imc <= 34.9) {
        resultadoDiv.textContent = `${nomeInput.value}, seu IMC é de ${imc.toFixed(2)}. Você está com obesidade grau 1.`;
      } else if (imc >= 35 && imc <= 39.9) {
        resultadoDiv.textContent = `${nomeInput.value}, seu IMC é de ${imc.toFixed(2)}. Você está com obesidade grau 2.`;
      } else if (imc >= 40) {
        resultadoDiv.textContent = `${nomeInput.value}, seu IMC é de ${imc.toFixed(2)}. Você está com obesidade grau 3.`;
      } else {
        resultadoDiv.textContent = "Valores inválidos de peso e altura.";
      }
    });
  });
  