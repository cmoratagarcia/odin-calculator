const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#del-btn");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

display.textContent = "0";
let firstValue = "";
let secondValue = "";
let symbol = "";
let result = "";
let storedResult = "";

//EVENT LISTENERS
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    handleNumbers(number.textContent);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    handleOperators(operator.textContent);
  });
});

equal.addEventListener("click", () => {
  endOperation();
});

clearBtn.addEventListener("click", () => {
  clear();
});

deleteBtn.addEventListener("click", () => {
  deleteOne();
});

//Keyboard
// Add an event listener to the document to capture keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;
  const isNumber = /^[0-9]$/i.test(key);
  const isOperator = /^[+-/*]$/i.test(key);

  //If pressed key is a number
  if (isNumber || key === ".") {
    handleNumbers(key);
  }
  //If key is an operator
  else if (isOperator) {
    handleOperators(key);
  } else if (key === "Enter") {
    endOperation();
  } else if (key === "Backspace") {
    deleteOne();
  }
});

//FUNCTIONS
function updateValues(value) {
  if (symbol === "") {
    if (storedResult !== "") {
      clear();
    }
    if (display.textContent === "0") {
      display.textContent = "";
    }
    if (value === "." && firstValue.includes(".")) {
      return;
    }
    display.textContent += value;
    firstValue += value;
  } else {
    if (value === "." && secondValue.includes(".")) {
      return;
    }
    display.textContent += value;
    secondValue += value;
  }
}

function handleNumbers(value) {
  if (display.textContent.length < 10) {
    updateValues(value);
  }
}
function handleOperators(value) {
  if (symbol === "") {
    if (storedResult !== "") {
      firstValue = storedResult;
    }
    if (value === "/") {
      //Fix!
      symbol = "÷";
    }
    if (value === "*") {
      symbol = "×";
    } else {
      symbol = value;
    }
    display.textContent += symbol;
  } else {
    endOperation();
  }
}

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
    case "*":
      return multiply(firstNum, secondNum);
      break;
    case "÷":
      return divide(firstNum, secondNum);
      break;
    case "/":
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
  symbol = "";
  firstValue = "";
  secondValue = "";
}

function clear() {
  display.textContent = "0";
  firstValue = "";
  secondValue = "";
  symbol = "";
  result = "";
  storedResult = "";
}

function deleteOne() {
  display.textContent = display.textContent.slice(0, -1);
  storedResult = "";
  firstValue = "";
  secondValue = "";

  if (symbol === "") {
    firstValue = display.textContent;

    // If an operator is present, update operator or secondValue
  } else if (secondValue === "") {
    symbol = "";
  } else {
    secondValue = display.textContent.slice(firstValue.length + 1);
  }
}

//Add keyboard support in the future
