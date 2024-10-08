const display = document.querySelector(".display");
const div = document.querySelector(".numbres");
let h = "yth"
div.addEventListener("click", (e) => {
    console.log(e.target.textContent.includes("."));
    switch(e.target.className) {
        case "number":
            if(!display.textContent.includes(".") && e.target.textContent == ".") {
                display.textContent += e.target.textContent;
            } else if ( e.target.textContent !== ".") {
            display.textContent += e.target.textContent;
        }
        break;

        case "ac":
            display.textContent = "";
        break;
    }
})

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