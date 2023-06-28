function add (a,b) {
  return +a + +b;
}

function subtract (a,b) {
  return a - b;
}

function multiply (a,b) {
  return a * b;
}

function divide (a,b) {
  return a / b;
}

let firstNumber = 0;
let secondNumber = 0;
let operation = '';

function operate (operator, firstNumber, secondNumber) {
  if (operator === '+') {
    return add(firstNumber,secondNumber);
  } else if (operator === '-') {
    return subtract(firstNumber,secondNumber);
  } else if (operator === 'x') {
    return multiply(firstNumber,secondNumber);
  } else if ( operator === '/') {
    return divide(firstNumber,secondNumber)
  } else return 'Error unknown operation';
}

let display = document.querySelector('.calculator-display');

function displayInputs (value) {
  display.textContent += `${value}`;
}
displayInputs('44');
displayInputs('33')