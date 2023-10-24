const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear-btn");
const deleteBtn = document.querySelector(".del-btn");
const button = document.querySelectorAll(".button");

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
