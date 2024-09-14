let firstNumber = 0;
let secondNumber = 0;
let operator = '';


const expression = document.querySelector('.expression');


const numButtons = document.querySelectorAll('.number');
numButtons.forEach((item) => {
        item.addEventListener('click', () => {
           expression.textContent += item.textContent;
        });
});

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    firstNumber = parseFloat(expression.textContent);
    expression.textContent = plus.textContent;
    operator = '+';
});

const division = document.querySelector('#division');
division.addEventListener('click', () => {
    firstNumber = parseFloat(expression.textContent);
    expression.textContent = 0;
    operator = '/';
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    firstNumber = parseFloat(expression.textContent);
    expression.textContent = minus.textContent;
    operator = '-';
});

const multi = document.querySelector('#multi');
multi.addEventListener('click', () => {
    firstNumber = parseFloat(expression.textContent);
    expression.textContent = 0;
    operator = '*';
});

function opearte(a, oper, b) {
    if (oper === '+') {
        return a + b;
    } else if (oper === '-') {
        return a - b;
    } else if (oper === '*') {
        return a  * b ;
    } else if (oper === '/') {
        return a / b;
    }
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    secondNumber = parseFloat(expression.textContent);
    let result = opearte(firstNumber, operator, secondNumber);
    expression.textContent = result;
    console.log(typeof(firstNumber));
    console.log(operator);
    console.log(typeof(secondNumber));
    
});


