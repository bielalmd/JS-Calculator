const display = document.getElementById('display');
const nums = document.querySelectorAll('[id*=tecla]');
const operators = document.querySelectorAll('[id*=operador]');

let newNumber = true;

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

const selectOperator = () => {
    newNumber = true
}
operators.forEach (operators => operators.addEventListener('click', selectOperator));


