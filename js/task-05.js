const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// var 1

// nameInput.addEventListener('input', event => {
//   const inputValue = nameInput.value.trim();
//   if (inputValue !== '') {
//     nameOutput.textContent = inputValue;
//   } else {
//     nameOutput.textContent = 'Anonymous';
//   }
// });

// var 2

// nameInput.addEventListener('input', () => {
//   nameOutput.textContent =
//     nameInput.value.trim() !== '' ? nameInput.value.trim() : 'Anonymus';
// });

// var 3

nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue !== '' ? inputValue : 'Anonymus';
});
