const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#del-btn");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

display.textContent = "";

let firstNum = 0;
let secondNum = 0;
let symbol = "";
//add event listener to each button
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    //Add a max length

    //take inner text
    //after each press, update display
    let value = number.textContent;
    display.textContent += value;
    //If operator hasn't been entered, store as first value
    if ((symbol = "")) {
      firstNum = value;
    } else {
      secondNum = value;
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
