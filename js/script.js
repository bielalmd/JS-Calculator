const display = document.getElementById('display')
const nums = document.querySelectorAll('[id*=tecla]')

const insertNumber = (event) => display.textContent = event;

nums.forEach (nums => 
    nums.addEventListener('click', insertNumber)
);