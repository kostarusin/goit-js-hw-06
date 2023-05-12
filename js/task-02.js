const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIng = document.querySelector('#ingredients');

// ingredients.map(ingredient => {
//   const listIngItem = document.createElement('Li');
//   listIngItem.textContent = ingredient;
//   listIngItem.classList.add('item');
//   listIng.append(listIngItem);
// });

let listIngItem = ingredients
  .map(ingredient => `<li class = "item">${ingredient}</li>`)
  .join('\n');

listIng.innerHTML = listIngItem;

console.log(listIng);
