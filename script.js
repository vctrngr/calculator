
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

// equal button

const equal = document.querySelector('.equal-button');

function equals(e){
    // if there's only A, it should equal itself
    if (numA == '' && numB == ''){
        display.textContent = displayContent;
    }
    // if numA and numB are still there,
    // just repeat the last operation
   else if (numA == '' && numB != ''){
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

// clear button

const clear = document.querySelector('.clear-button');

clear.addEventListener('click', function(e){
    numA = '';
    numB = '';
    displayContent = '';
    display.textContent = '0';
});

// floating point button

const point = document.querySelector('.point');

function floating(e){
    if (!displayContent.includes('.')){
        displayContent += e.target.textContent;
        display.textContent = displayContent;
    }
}

point.addEventListener('click', floating);

// backspace button

const backspace = document.querySelector('.backspace');

backspace.addEventListener('click', function(e){
    if (displayContent.length < 2){
        displayContent = '';
        display.textContent = '0';
    }
    else{
        let str = displayContent;
        str = str.slice(0, -1);
    
        displayContent = str;
        display.textContent = displayContent;
    }
  
})