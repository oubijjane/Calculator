let firstNumber = 0;
let temp = 0;
let secondNumber = 1;
let sing = "";
let result = 0;
const display = document.querySelector(".display");
const div = document.querySelector(".numbres");
display.textContent = result;
div.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "number":
            if (!display.textContent.includes(".") && e.target.textContent == ".") {
                display.textContent += e.target.textContent;
            } else if (e.target.textContent !== ".") {
                if (display.textContent == 0) {
                    display.textContent = "";
                }
                display.textContent += e.target.textContent;
                firstNumber = e.target.textContent
            }
            break;

        case "ac":
            firstNumber = 0;
            secondNumber = 0;
            temp = 0;
            result = 0;
            display.textContent = result;
            break;
        case "operation":
            if (e.target.textContent.includes("=")) {
                console.log("before ===>" + result + " = " + firstNumber + " " + " " + sing + " " + secondNumber);
                operations(sing, firstNumber, secondNumber);
                display.textContent = result;
                console.log("after ===>" + result + " = " + firstNumber + " " + " " + sing + " " + secondNumber);
            } else {
                sing = e.target.textContent
                display.textContent = "0";
                operations(sing, firstNumber, secondNumber);
            }

            break;

    }
})


function add(addend1, addend2) {
    result = parseInt(addend1) + parseInt(addend2);
    secondNumber = result;

    return result;
}

function substract(minuend, subtrahend) {
    result = minuend - subtrahend;
    secondNumber = result;

    return result;
}

function divide(dividend, divisor) {
    result = dividend / divisor;
    secondNumber = result;

    return result;
}

function multiply(Multiplicand, Multiplier) {
    result = Multiplicand * Multiplier;
    secondNumber = result;

    return result;
}

function operations(sing, num1, num2) {
    switch (sing) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            substract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
    return result;
};
