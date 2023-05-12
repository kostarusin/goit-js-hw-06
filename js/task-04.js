let counterValue = 0;

const counterValueElement = document.querySelector('#value');

const decrementButton = document.querySelector('[data-action="decrement"]');

decrementButton.addEventListener('click', () => {
  counterValue = counterValue -= 1;
  counterValueElement.textContent = counterValue;
});

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
incrementButton.addEventListener('click', () => {
  counterValue = counterValue += 1;
  counterValueElement.textContent = counterValue;
});
