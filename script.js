const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#del-btn");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

display.textContent = "";
//add event listener to each button
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    //take inner text
    //after each press, update display
    let value = number.textContent;
    display.textContent += value;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    //after each operator, store first number
    //take operator value
    //if second press, return result
  });
});

//return result at fourth press
//add event listener to equal, return result and reset display

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
