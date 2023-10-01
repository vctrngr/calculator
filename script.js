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
    
    if (numA == ''){
        numA = displayContent;
        displayContent = ''; // the variable is reset internally, not necessarily the display screen
        operator = e.target.textContent;
    }
    else {
        numB = displayContent;
        displayContent = operate(numA, numB, operator);
        display.textContent = displayContent;
        numA = displayContent;
        displayContent = '';
        operator = e.target.textContent;
    }
}

opButtons.forEach(but => {
    but.addEventListener('click', opClick)
});

const equal = document.querySelector('.equal-button');

function equals(e){
    // if numA and numB are still there,
    // just repeat the last operation
    if (numA == '' && numB != ''){
        numA = displayContent;
        displayContent = operate(numA, numB, operator);
        display.textContent = displayContent;
        numA = '';
    }
    else{
        numB = displayContent;
        displayContent = operate(numA, numB, operator);
        display.textContent = displayContent;
        // reset
         numA = '';
        // keep B
    }
  
}

equal.addEventListener('click', equals);