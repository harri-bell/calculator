let firstNumber = 0;
let secondNumber = 0;
let ans = '';
let operation = '';
let display = document.querySelector('.calculator-display');
const zeroBtn = document.querySelector('#zero-btn');
const oneBtn = document.querySelector('#one-btn');
const twoBtn = document.querySelector('#two-btn');
const threeBtn = document.querySelector('#three-btn');
const fourBtn = document.querySelector('#four-btn');
const fiveBtn = document.querySelector('#five-btn');
const sixBtn = document.querySelector('#six-btn');
const sevenBtn = document.querySelector('#seven-btn');
const eightBtn = document.querySelector('#eight-btn');
const nineBtn = document.querySelector('#nine-btn');
const clearBtn = document.querySelector('#clear-btn');

zeroBtn.addEventListener('click', () => displayInputs(0));
oneBtn.addEventListener('click',() => displayInputs(1));
twoBtn.addEventListener('click', () => displayInputs(2));
threeBtn.addEventListener('click', () => displayInputs(3));
fourBtn.addEventListener('click', () => displayInputs(4));
fiveBtn.addEventListener('click', () => displayInputs(5));
sixBtn.addEventListener('click', () => displayInputs(6));
sevenBtn.addEventListener('click', () => displayInputs(7));
eightBtn.addEventListener('click', () => displayInputs(8));
nineBtn.addEventListener('click', () => displayInputs(9));
clearBtn.addEventListener('click', () => clearInput());

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

function displayInputs (value) {
  display.textContent += `${value}`;
}

function clearInput () {
  display.textContent = display.textContent.slice(0, display.textContent.length -1);
}

