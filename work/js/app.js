document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const numbers = document.querySelectorAll('.number');
  const operators = document.querySelectorAll('.operator');
  const equals = document.querySelector('.equals');
  const clear = document.querySelector('.clear');

  
  numbers.forEach((button) => {
    button.addEventListener('click', () => {
      display.value += button.dataset.number;
    });
  });

  operators.forEach((button) => {
    button.addEventListener('click', () => {
      display.value += ` ${button.dataset.operator} `;
    });
  });

  equals.addEventListener('click', () => {
    display.value = eval(display.value);
  });

  clear.addEventListener('click', () => {
    display.value = '';
  });
});
