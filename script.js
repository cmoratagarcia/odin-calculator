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
    if (symbol === "") {
      symbol = operator.textContent;
      display.textContent += symbol;
    } else {
      let result = operate(Number(firstValue), symbol, Number(secondValue));
      display.textContent = result;
    }
    //take operator value

    //if second press, return result
  });
});

//add event listener to equal, return result and reset display
equal.addEventListener("click", () => {
  let result = operate(Number(firstValue), symbol, Number(secondValue));
  display.textContent = result;
});
//add event listener for clear and delete

function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
      break;
    case "-":
      return subtract(firstNum, secondNum);
      break;
    //Fix!
    case "&times":
      return multiply(firstNum, secondNum);
      break;
    //Fix!
    case "&div":
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
