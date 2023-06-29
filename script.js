let firstNumber = null;
let secondNumber = null;
let equation = [];
let ans = '';
let currentOperator = '';
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
const addBtn = document.querySelector('#add-btn');
const subtractBtn = document.querySelector('#subtract-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const divideBtn = document.querySelector('#divide-btn');
const equalsBtn = document.querySelector('#equals-btn');
const clearBtn = document.querySelector('#clear-btn');
const allClearBtn = document.querySelector('#all-clear-btn');

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
addBtn.addEventListener('click', () => setOperator('+'));
subtractBtn.addEventListener('click', () => setOperator('-'));
multiplyBtn.addEventListener('click', () => setOperator('x'));
divideBtn.addEventListener('click', () => setOperator('/'));
clearBtn.addEventListener('click', () => clearInput());
allClearBtn.addEventListener('click', () => clearAllInput());
equalsBtn.addEventListener('click', function () {
  storeSecondInput(display.textContent);
  displayInputs(operate(firstNumber, currentOperator, secondNumber));
  resetInputs();
})


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
  if (b === '0') {
    return 'Oh no you dont';
  }
  return a / b;
}

function operate (firstNumber, currentOperator , secondNumber) {
  if (currentOperator === '+') {
    return add(firstNumber,secondNumber);
  } else if (currentOperator === '-') {
    return subtract(firstNumber,secondNumber);
  } else if (currentOperator === 'x') {
    return multiply(firstNumber,secondNumber);
  } else if ( currentOperator === '/') {
    return divide(firstNumber,secondNumber)
  } else return 'Error unknown operation';
}

function displayInputs (value) {
  if (value.typeOf === Number){
    return display.textContent += `${value}`;
  } else {
    return display.textContent += value;
  }
  
}

function clearInput () {
  display.textContent = display.textContent.slice(0, display.textContent.length -1);
}

function clearAllInput () {
  display.textContent = '';
}

function setOperator (operator) {
  storeFirstInput(display.textContent);
  if (currentOperator === '') {
    currentOperator = operator;
    clearAllInput();
    return currentOperator;
  } else {
    return currentOperator = operator;
  }
}

function storeFirstInput (number) {
  firstNumber = number;
  return firstNumber;
}

function storeSecondInput (number) {
  secondNumber = number;
  clearAllInput();
  return secondNumber;
}

function resetInputs () {
  firstNumber = display.textContent;
  secondNumber = null;
  currentOperator = '';
}
