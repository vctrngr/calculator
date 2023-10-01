function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let numA = '', numB = '', operator = '';

function operate(a, b, op){
    a = Number(a);
    b = Number(b);

    if (op == '+'){
        return add(a, b);
    }
    if (op == '-'){
        return subtract(a, b);
    }
    if (op == 'X'){
        return multiply(a, b);
    }
    if (op == '/'){
        return divide(a, b);
    }

}

let displayContent = '';
const display = document.querySelector('.display p');

const numButtons = document.querySelectorAll('.num-button');

function displayUpdate(e){
    // if numA or numB, 
    displayContent += e.target.textContent;
    display.textContent = displayContent;
}

numButtons.forEach(but => {
    but.addEventListener('click', displayUpdate)
})

const opButtons = document.querySelectorAll('.op-button');

function opClick(e){
    operator = e.target.textContent;
    if (numA == ''){
        numA = displayContent;
        displayContent = ''; // the variable is reset internally, not necessarily the display screen
    }
    else {
        numB = displayContent;
        displayContent = operate(numA, numB, operator);
        display.textContent = displayContent;
    }
    // if A empty, put display content in A
    // else, put it in B
    // if A and B are full,
    // perform operation


}

opButtons.forEach(but => {
    but.addEventListener('click', opClick)
})