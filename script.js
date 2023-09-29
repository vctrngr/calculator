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

let numA, numB, operator;

function operate(a, b, op){
    a = Number(a);
    b = Number(b);

    if (op == '+'){
        return add(a, b);
    }
    if (op == '-'){
        return subtract(a, b);
    }
    if (op == '*'){
        return multiply(a, b);
    }
    if (op == '/'){
        return divide(a, b);
    }

}