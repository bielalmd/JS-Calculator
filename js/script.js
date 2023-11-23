'use strict'

const display = document.getElementById('display');
const nums = document.querySelectorAll('[id*=tecla]');
const operators = document.querySelectorAll('[id*=operador]');

let newNumber = true;
let operator;
let previousNumber;

const operatorPending = () => operator !== undefined

const calculate = () => {
    if (operatorPending()) {
        const currentNumber = parseFloat(display.textContent);
        newNumber = true;
        const res = eval (`${previousNumber}${operator}${currentNumber}`);
        updateDisplay(res);
    }
}

const updateDisplay = (text) => {
    if(newNumber){
        display.textContent = text;
        newNumber = false
    } else {
        display.textContent += text;
    }
}   

const insertNumber = (event) => updateDisplay(event.target.textContent);
nums.forEach (nums => nums.addEventListener('click', insertNumber));
const selectOperator = (event) => {
    if (!newNumber) {
        calculate();
        newNumber = true;
        operator = event.target.textContent;
        previousNumber = parseFloat(display.textContent);
        console.log(operator);
    }
}
operators.forEach((operator) => operator.addEventListener('click', selectOperator));


