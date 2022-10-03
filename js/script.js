function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  var imc = weight / (height * height);

  return imc;
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcRange = document.querySelector('#imc-range');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  if (imc < 16) {
    imcRange.textContent = 'Inválido';
  } else if (imc <= 16.99) {
    imcRange.textContent = 'Muito Abaixo do Peso';
  } else if (imc <= 18.49) {
    imcRange.textContent = 'Abaixo do Peso';
  } else if (imc <= 24.99) {
    imcRange.textContent = 'Peso Normal';
  } else if (imc <= 29.99) {
    imcRange.textContent = 'Sobrepeso';
  } else if (imc <= 34.99) {
    imcRange.textContent = 'Obesidade Grau I';
  } else if (imc <= 40) {
    imcRange.textContent = 'Obesidade Grau II';
  } else if (imc > 40) {
    imcRange.textContent = 'Obesidade Grau III';
  }

  return;
}

start();
