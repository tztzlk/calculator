const display = document.getElementById('display')

let firstNumber = '';
let operator = '';
let secondNumber = '';

function appendNumber(number) {
  display.value += number;
}

function setOperator(op) {
  if (operator === '' && display.value !== firstNumber) {
    operator = op;
    display.value += op;
  }
  
}



function clearDisplay() {
  display.value = '';
  firstNumber = '';
  operator = '';
  secondNumber = '';
}

function calculate() {
  if (operator !== '') {
    const expression = display.value;
    const numbers = expression.split(operator);
    firstNumber = parseFloat(numbers[0]);
    secondNumber = parseFloat(numbers[1]);

    switch (operator) {
      case '+':
        display.value = firstNumber + secondNumber;
        break;
      case '-':
        display.value = firstNumber - secondNumber;
        break;
      case '*':
        display.value = firstNumber * secondNumber;
        break;
      case '/':
        if (secondNumber !== 0) {
          display.value = firstNumber / secondNumber;
        } else {
          clearDisplay();
          alert("Error: Cannot divide by zero!");
        }
        break;
    }

    firstNumber = display.value;
    operator = '';
    secondNumber = '';
  }
}

