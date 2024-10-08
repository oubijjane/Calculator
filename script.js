let firstNumber = 5;
let secondNumber = 6;
let result = 0;

function add(addend1, addend2) {
    result = addend1 + addend2;
    firstNumber = result;

    return result;
}

function substract(minuend, subtrahend) {
    result = minuend - subtrahend;
    firstNumber = result;

    return result;
}

function divide(dividend, divisor) {
    result = dividend / divisor;
    firstNumber = result;

    return result;
}

function multiply(Multiplicand, Multiplier) {
    result = Multiplicand * Multiplier;
    firstNumber = result;

    return result;
}
console.log(divide(firstNumber,secondNumber));
console.log(firstNumber);