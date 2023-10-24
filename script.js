const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#del-btn");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

display.textContent = "";

let firstValue = "";
let secondValue = "";
let symbol = "";
//add event listener to each button
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    //Add a max length

    //take inner text
    let value = number.textContent;
    //after each press, update display
    display.textContent += value;
    //If operator hasn't been entered, store as first value
    if (symbol === "") {
      firstValue += value;
    } else {
      secondValue += value;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    //after each operator, store first number
    // firstNum = number;
    //take operator value
    symbol = operator.textContent;
    display.textContent += symbol;
    //if second press, return result
  });
});

//return result at fourth press
//add event listener to equal, return result and reset display
equal.addEventListener("click", () => {
  let result = operate(firstValue, symbol, secondValue);
  display.textContent = result;
});
//add event listener for clear and delete

function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case "+":
      add(firstNum, secondNum);
      break;
    case "-":
      subtract(firstNum, secondNum);
      break;
    case "&times":
      multiply(firstNum, secondNum);
      break;
    case "&div":
      divide(firstNum, secondNum);
      break;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
