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
let result = "";
let storedResult = "";

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    //Add a max length
    if (storedResult !== "") {
      clear();
    }
    let value = number.textContent;
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
    if (symbol === "") {
      if (storedResult !== "") {
        firstValue = storedResult;
      }
      symbol = operator.textContent;
      display.textContent += symbol;
    } else {
      endOperation();
    }
  });
});

//add event listener to equal, return result and reset display
equal.addEventListener("click", () => {
  endOperation();
});
//add event listener for clear and delete. Remeber to clear firstNum
clearBtn.addEventListener("click", () => {
  clear();
});

function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
      break;
    case "-":
      return subtract(firstNum, secondNum);
      break;
    case "×":
      return multiply(firstNum, secondNum);
      break;
    case "÷":
      return divide(firstNum, secondNum);
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

function endOperation() {
  longResult = operate(Number(firstValue), symbol, Number(secondValue));
  result = +longResult.toFixed(4);
  display.textContent = result;
  storedResult = result;
}

function clear() {
  display.textContent = "";
  firstValue = "";
  secondValue = "";
  symbol = "";
  result = "";
  storedResult = "";
}
