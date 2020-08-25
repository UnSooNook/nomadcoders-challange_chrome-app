// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const displaySpan = document.querySelector(".display__span");

let answer = 0;
let tempValue = "0";
let currValue = 0;
let currOperator = "";

function handleOperand(event) {
    const num = event.target.innerHTML;
    tempValue = tempValue.concat(num);
    displaySpan.innerHTML = parseInt(tempValue, 10);
}

function calculate() {
    switch (currOperator) {
        case "+":
            answer += currValue;
            break;
        case "-":
            answer -= currValue;
            break;
        case "*":
            answer *= currValue;
            break;
        case "/":
            answer /= currValue;
            break;
        default:
            break;
    }

    displaySpan.innerHTML = answer;
}

function handleOperator(event) {
    const operator = event.target.innerHTML;
    switch (operator) {
        case "C":
            answer = 0;
            currValue = 0;
            displaySpan.innerHTML = answer;
            currOperator = "";
            tempValue = "0";
            break;
        case "=":
            displaySpan.innerHTML = answer;
            currValue = parseInt(tempValue, 10);
            calculate();
            tempValue = "0";
            currOperator = "";
            answer = 0;
            break;
        default:
            if (currOperator === "") {
                answer = parseInt(tempValue, 10);
            } else {
                currValue = parseInt(tempValue, 10);
                calculate();
            }
            currOperator = operator;
            tempValue = "0";
    }
}

function init() {
    if (operands) {
        operands.forEach(function (operand) {
            operand.addEventListener("click", handleOperand);
        });
    }
    if (operators) {
        operators.forEach(function (operator) {
            operator.addEventListener("click", handleOperator);
        });
    }
}

init();
